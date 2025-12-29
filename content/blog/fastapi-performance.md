---
title: "Optimizing FastAPI Performance for High-Traffic Applications"
excerpt: "Techniques for improving FastAPI application performance, including async operations, database optimization, and caching strategies."
date: "2023-12-15"
tags:
  - FastAPI
  - Python
  - Performance
  - Backend
featured: false
author: "Vasu Jain"
published: true
---

FastAPI has become my go-to framework for building high-performance Python APIs. Here's how to squeeze every bit of performance from it.

## Why FastAPI?

FastAPI offers several advantages out of the box:

- **Async-first**: Built on Starlette and ASGI
- **Type hints**: Automatic validation and documentation
- **Speed**: One of the fastest Python frameworks
- **Developer experience**: Excellent tooling and auto-generated docs

## Async All the Way

The biggest performance gains come from proper async usage:

```python
from fastapi import FastAPI, Depends
from sqlalchemy.ext.asyncio import AsyncSession, create_async_engine
from sqlalchemy.orm import sessionmaker

app = FastAPI()

# Async database engine
engine = create_async_engine(
    "postgresql+asyncpg://user:pass@localhost/db",
    pool_size=20,
    max_overflow=30,
    pool_pre_ping=True
)

AsyncSessionLocal = sessionmaker(
    engine, class_=AsyncSession, expire_on_commit=False
)

async def get_db():
    async with AsyncSessionLocal() as session:
        yield session

@app.get("/users/{user_id}")
async def get_user(user_id: int, db: AsyncSession = Depends(get_db)):
    result = await db.execute(
        select(User).where(User.id == user_id)
    )
    return result.scalar_one_or_none()
```

## Connection Pooling

Proper connection pooling is crucial:

```python
from asyncpg import create_pool

class Database:
    def __init__(self):
        self.pool = None

    async def connect(self):
        self.pool = await create_pool(
            dsn="postgresql://user:pass@localhost/db",
            min_size=10,
            max_size=50,
            max_inactive_connection_lifetime=300
        )

    async def disconnect(self):
        await self.pool.close()

    async def fetch_one(self, query: str, *args):
        async with self.pool.acquire() as conn:
            return await conn.fetchrow(query, *args)

database = Database()

@app.on_event("startup")
async def startup():
    await database.connect()

@app.on_event("shutdown")
async def shutdown():
    await database.disconnect()
```

## Caching with Redis

Implement response caching for frequently accessed data:

```python
import aioredis
import json
from functools import wraps
from typing import Optional

redis = aioredis.from_url("redis://localhost:6379")

def cache(ttl: int = 300, key_prefix: str = ""):
    def decorator(func):
        @wraps(func)
        async def wrapper(*args, **kwargs):
            # Generate cache key
            cache_key = f"{key_prefix}:{func.__name__}:{hash(str(args) + str(kwargs))}"

            # Try to get from cache
            cached = await redis.get(cache_key)
            if cached:
                return json.loads(cached)

            # Execute function
            result = await func(*args, **kwargs)

            # Store in cache
            await redis.setex(cache_key, ttl, json.dumps(result))

            return result
        return wrapper
    return decorator

@app.get("/products")
@cache(ttl=600, key_prefix="products")
async def get_products(category: Optional[str] = None):
    # Expensive database query
    return await fetch_products(category)
```

## Background Tasks

Offload heavy operations to background tasks:

```python
from fastapi import BackgroundTasks
from celery import Celery

celery_app = Celery("tasks", broker="redis://localhost:6379")

@celery_app.task
def send_email_task(email: str, subject: str, body: str):
    # Heavy email sending logic
    pass

@app.post("/orders")
async def create_order(
    order: OrderCreate,
    background_tasks: BackgroundTasks
):
    # Create order immediately
    order_id = await create_order_in_db(order)

    # Send confirmation email in background
    background_tasks.add_task(
        send_order_confirmation,
        order.email,
        order_id
    )

    # Or use Celery for more reliability
    send_email_task.delay(
        order.email,
        "Order Confirmation",
        f"Your order {order_id} has been placed"
    )

    return {"order_id": order_id}
```

## Response Compression

Enable gzip compression for large responses:

```python
from fastapi.middleware.gzip import GZipMiddleware

app.add_middleware(GZipMiddleware, minimum_size=1000)
```

## Optimizing Pydantic Models

Use performance-optimized Pydantic settings:

```python
from pydantic import BaseModel, ConfigDict

class UserResponse(BaseModel):
    model_config = ConfigDict(
        from_attributes=True,  # For ORM mode
        extra="ignore",  # Ignore extra fields
    )

    id: int
    email: str
    name: str

# Use __slots__ for memory efficiency in heavy objects
class CachedUser:
    __slots__ = ["id", "email", "name", "cached_at"]

    def __init__(self, id: int, email: str, name: str):
        self.id = id
        self.email = email
        self.name = name
        self.cached_at = time.time()
```

## Database Query Optimization

Avoid N+1 queries with proper eager loading:

```python
from sqlalchemy.orm import selectinload, joinedload

@app.get("/users/{user_id}/orders")
async def get_user_orders(user_id: int, db: AsyncSession = Depends(get_db)):
    # Bad: N+1 queries
    # user = await db.get(User, user_id)
    # orders = user.orders  # Triggers additional query per order

    # Good: Single query with eager loading
    result = await db.execute(
        select(User)
        .options(selectinload(User.orders).selectinload(Order.items))
        .where(User.id == user_id)
    )
    user = result.scalar_one_or_none()
    return user.orders if user else []
```

## Profiling and Monitoring

Add request profiling middleware:

```python
import time
from starlette.middleware.base import BaseHTTPMiddleware
from prometheus_client import Histogram, Counter

REQUEST_LATENCY = Histogram(
    "http_request_latency_seconds",
    "Request latency in seconds",
    ["method", "endpoint"]
)

REQUEST_COUNT = Counter(
    "http_requests_total",
    "Total requests",
    ["method", "endpoint", "status"]
)

class ProfilingMiddleware(BaseHTTPMiddleware):
    async def dispatch(self, request, call_next):
        start_time = time.perf_counter()

        response = await call_next(request)

        duration = time.perf_counter() - start_time

        REQUEST_LATENCY.labels(
            method=request.method,
            endpoint=request.url.path
        ).observe(duration)

        REQUEST_COUNT.labels(
            method=request.method,
            endpoint=request.url.path,
            status=response.status_code
        ).inc()

        # Add timing header
        response.headers["X-Process-Time"] = str(duration)

        return response

app.add_middleware(ProfilingMiddleware)
```

## Production Deployment

Use Gunicorn with Uvicorn workers:

```bash
gunicorn app.main:app \
    --workers 4 \
    --worker-class uvicorn.workers.UvicornWorker \
    --bind 0.0.0.0:8000 \
    --timeout 120 \
    --keepalive 5 \
    --max-requests 1000 \
    --max-requests-jitter 100
```

## Key Takeaways

1. **Use async everywhere** - Don't mix sync and async
2. **Pool connections** - Database, Redis, HTTP clients
3. **Cache aggressively** - Especially for read-heavy endpoints
4. **Profile continuously** - You can't optimize what you don't measure
5. **Background heavy tasks** - Don't block the event loop

These optimizations have helped me handle 10,000+ requests per second on modest hardware.
