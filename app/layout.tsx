import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Backend Developer Portfolio",
  description: "Professional backend developer and DevOps engineer portfolio showcasing projects, experience, and technical blog.",
  keywords: ["backend developer", "devops", "software engineer", "portfolio", "api development", "microservices"],
  authors: [{ name: "Backend Developer" }],
  creator: "Backend Developer",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yourwebsite.com",
    title: "Backend Developer Portfolio",
    description: "Professional backend developer and DevOps engineer portfolio",
    siteName: "Backend Developer Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Backend Developer Portfolio",
    description: "Professional backend developer and DevOps engineer portfolio",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
