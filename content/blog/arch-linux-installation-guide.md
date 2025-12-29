---
title: "How to Not Fuck Up Your Arch Install"
excerpt: "From complete beginner to power user—a no-bullshit guide covering everything you need to know about installing and configuring Arch Linux. Basic concepts, advanced tricks, and how to avoid common pitfalls."
date: "2024-12-28"
tags:
  - Linux
  - Arch Linux
  - Tutorial
  - DevOps
  - Advanced
featured: true
author: "Vinay Yadav"
published: true
---

So you want to install Arch Linux without screwing it up? Good. You're already ahead of the game by reading this first. Let me be straight with you: **installing Arch isn't hard, but it's very easy to fuck up if you don't know what you're doing**.

This guide will take you from zero to hero—whether you're a complete Linux noob or someone who's installed Ubuntu a few times and wants to level up. We'll cover the basics, then dive into the advanced shit that separates casual users from power users.

By the end of this, you'll not only have a working Arch installation, but you'll actually understand what the fuck each step does and why it matters.

## Table of Contents

1. [Understanding What the Fuck You're Getting Into](#understanding)
2. [Pre-Installation: The Basics](#pre-installation)
3. [Booting Into the Live Environment](#booting)
4. [Disk Partitioning: Don't Fuck This Up](#partitioning)
5. [Installation: The Core System](#installation)
6. [Bootloader: Making It Actually Boot](#bootloader)
7. [Post-Installation: Making It Usable](#post-installation)
8. [Advanced Configuration](#advanced)
9. [Common Fuckups and How to Fix Them](#troubleshooting)

---

## Understanding What the Fuck You're Getting Into {#understanding}

### Why Arch? (The Real Reasons)

- **Rolling Release**: Get the latest shit as soon as it's released. No waiting 6 months for Ubuntu to package last year's software
- **The AUR**: 80,000+ user-maintained packages. If it exists on Linux, it's in the AUR
- **Minimalism**: No bloat. You install what YOU want, not what Canonical thinks you need
- **Learning**: You'll understand Linux at a level that GUI installer users never will
- **Customization**: Complete control. Every. Single. Thing.
- **The Arch Wiki**: The best Linux documentation that exists, period
- **Street Cred**: Yeah, you get to say "I use Arch btw" unironically

### What You Actually Need to Know

**Basic Shit:**
- What a partition is
- Basic terminal commands (cd, ls, nano/vim)
- The difference between BIOS and UEFI
- What a bootloader does

**Don't Worry If You Don't Know:**
- Advanced networking concepts
- Kernel compilation
- How to write bash scripts
- What systemd actually does (we'll cover it)

### Prerequisites

**Hardware:**
- 64-bit CPU (obviously)
- 512MB RAM minimum (2GB+ recommended)
- 20GB disk space minimum (50GB+ recommended)
- USB drive (4GB+)
- Wired internet connection (WiFi is doable but more complex)

**Software:**
- The Arch ISO from [archlinux.org](https://archlinux.org/download/)
- balenaEtcher, Rufus, or dd to create bootable USB
- A backup of your data (SERIOUSLY, BACK YOUR SHIT UP)

**Mental Prerequisites:**
- Patience
- Willingness to read error messages
- Not being afraid to Google things
- Coffee/energy drinks

---

## Pre-Installation: The Basics {#pre-installation}

### Step 1: Create Bootable USB

**On Linux:**
```bash
# Find your USB device
lsblk

# Write the ISO (replace /dev/sdX with your USB device)
# WARNING: This WILL erase everything on the USB
sudo dd bs=4M if=/path/to/archlinux.iso of=/dev/sdX status=progress oflag=sync

# Or use cat if you're fancy
sudo cat archlinux.iso > /dev/sdX
```

**On Windows:**
- Download [Rufus](https://rufus.ie/)
- Select your ISO and USB drive
- Use DD mode (not ISO mode)
- Click Start

**On macOS:**
```bash
# Find disk number
diskutil list

# Unmount it
diskutil unmountDisk /dev/diskN

# Write ISO
sudo dd if=/path/to/archlinux.iso of=/dev/rdiskN bs=1m

# Eject
diskutil eject /dev/diskN
```

### Step 2: BIOS/UEFI Settings

**Important Shit to Configure:**

1. **Disable Secure Boot** (it's a pain in the ass with Arch)
2. **Enable UEFI mode** (if your system supports it—most do since 2012)
3. **Set USB as first boot device**
4. **Disable Fast Boot** (Windows feature that fucks with dual-booting)

**How to Access BIOS:**
- Press F2, F12, DEL, or ESC during boot
- Google your motherboard model if you're lost

---

## Booting Into the Live Environment {#booting}

### What You'll See

After booting from USB, you'll see a black screen with some options. Select:
```
Arch Linux install medium (x86_64, UEFI)
```

You'll end up at a root shell that looks like:
```
root@archiso ~ #
```

### Verify UEFI Mode

```bash
ls /sys/firmware/efi/efivars
```

If this shows files, you're in UEFI mode. If it says "No such file or directory", you're in BIOS mode (legacy).

**UEFI is better.** Use it if your system supports it.

### Connect to Internet

**Wired Connection:**
```bash
# Check if you're connected
ping -c 3 archlinux.org

# If not, try:
dhcpcd
```

**WiFi (Using iwctl):**
```bash
iwctl

# Inside iwctl prompt:
device list                          # Find your device name (usually wlan0)
station wlan0 scan                   # Scan for networks
station wlan0 get-networks           # List networks
station wlan0 connect "Your-SSID"    # Connect (it'll ask for password)
exit

# Verify connection
ping -c 3 archlinux.org
```

### Sync System Clock

```bash
timedatectl set-ntp true

# Verify
timedatectl status
```

---

## Disk Partitioning: Don't Fuck This Up {#partitioning}

This is where most people panic. Don't worry, I'll walk you through it.

### Understanding Partition Schemes

**UEFI Systems Need:**
1. **EFI System Partition** (ESP) - 512MB, FAT32
2. **Root Partition** (/) - Rest of disk (or split it up)
3. **Swap** (optional but recommended)

**BIOS Systems Need:**
1. **Root Partition** (/) - Whole disk
2. **Swap** (optional)

### Check Your Disks

```bash
lsblk

# Or more detailed:
fdisk -l
```

You'll see something like `/dev/sda`, `/dev/nvme0n1`, etc. That's your disk.

### Partitioning Methods

**Method 1: fdisk (BIOS Legacy)**
```bash
fdisk /dev/sda

# Commands:
# g - create new GPT partition table
# n - new partition
# t - change partition type
# w - write changes and exit
# q - quit without saving
```

**Method 2: gdisk (UEFI - Recommended)**
```bash
gdisk /dev/sda

# Same commands as fdisk but with GPT support
```

**Method 3: cfdisk (Beginner-Friendly)**
```bash
cfdisk /dev/sda

# Use arrow keys and Enter
# Much easier to visualize
```

### Example UEFI Partitioning Scheme

Let's say you have a 500GB disk (`/dev/sda`):

```bash
cfdisk /dev/sda

# Select 'gpt' when asked

# Create partitions:
# 1. EFI: 512MB, Type: EFI System
# 2. Swap: 8GB (or 2x your RAM), Type: Linux swap
# 3. Root: Remaining space, Type: Linux filesystem

# Write and quit
```

Result:
```
/dev/sda1 - 512MB  - EFI System Partition
/dev/sda2 - 8GB    - Swap
/dev/sda3 - 491GB  - Root (/)
```

### Advanced: Separate /home Partition

**Why?**
- Reinstall without losing personal data
- Easier backups
- Quota control

**Scheme:**
```
/dev/sda1 - 512MB  - EFI
/dev/sda2 - 8GB    - Swap
/dev/sda3 - 50GB   - Root (/)
/dev/sda4 - 441GB  - Home (/home)
```

### Format the Partitions

```bash
# EFI Partition (FAT32)
mkfs.fat -F32 /dev/sda1

# Root Partition (ext4)
mkfs.ext4 /dev/sda3

# Swap
mkswap /dev/sda2
swapon /dev/sda2

# Home (if you made one)
mkfs.ext4 /dev/sda4
```

**Advanced Filesystem Options:**

**Btrfs (Modern, has snapshots):**
```bash
mkfs.btrfs /dev/sda3
```

**XFS (Better for large files):**
```bash
mkfs.xfs /dev/sda3
```

**ext4 with optimization:**
```bash
mkfs.ext4 -L "ArchRoot" -O ^has_journal /dev/sda3
# -L: Label
# -O ^has_journal: Disable journaling for SSDs (faster, slightly risky)
```

### Mount the Partitions

```bash
# Mount root
mount /dev/sda3 /mnt

# Create and mount EFI
mkdir -p /mnt/boot
mount /dev/sda1 /mnt/boot

# If you have separate /home:
mkdir -p /mnt/home
mount /dev/sda4 /mnt/home
```

Verify:
```bash
lsblk
```

---

## Installation: The Core System {#installation}

### Select Mirrors (For Faster Downloads)

```bash
# Backup original
cp /etc/pacman.d/mirrorlist /etc/pacman.d/mirrorlist.backup

# Use reflector to auto-select fastest mirrors
reflector --country US,Canada --age 12 --protocol https --sort rate --save /etc/pacman.d/mirrorlist

# Or manually edit
nano /etc/pacman.d/mirrorlist
# Move your country's mirrors to the top
```

### Install Base System

```bash
# Minimal installation
pacstrap /mnt base linux linux-firmware

# Recommended installation (includes useful tools)
pacstrap /mnt base base-devel linux linux-firmware \
  vim nano sudo networkmanager \
  man-db man-pages texinfo
```

**What's Being Installed:**
- `base`: Core system utilities
- `base-devel`: Compilation tools (needed for AUR)
- `linux`: The kernel
- `linux-firmware`: Firmware for hardware
- `vim/nano`: Text editors
- `sudo`: Run commands as root
- `networkmanager`: Manage network connections
- `man-db/man-pages`: Documentation

**Advanced: Different Kernels**
```bash
# LTS kernel (more stable, older)
pacstrap /mnt linux-lts linux-lts-headers

# Zen kernel (optimized for performance)
pacstrap /mnt linux-zen linux-zen-headers

# Hardened kernel (security-focused)
pacstrap /mnt linux-hardened linux-hardened-headers
```

### Generate Fstab

```bash
genfstab -U /mnt >> /mnt/etc/fstab

# Verify it looks correct
cat /mnt/etc/fstab
```

**What is fstab?**
It tells Linux which partitions to mount at boot and where.

### Chroot Into New System

```bash
arch-chroot /mnt
```

You're now inside your new Arch installation!

---

## System Configuration {#installation}

### Set Timezone

```bash
# List timezones
ls /usr/share/zoneinfo/

# Set yours
ln -sf /usr/share/zoneinfo/America/New_York /etc/localtime

# Generate /etc/adjtime
hwclock --systohc
```

### Localization

```bash
# Edit locale.gen
nano /etc/locale.gen

# Uncomment your locale (e.g., en_US.UTF-8 UTF-8)
# Save and exit

# Generate locale
locale-gen

# Set LANG variable
echo "LANG=en_US.UTF-8" > /etc/locale.conf
```

### Network Configuration

```bash
# Set hostname
echo "yourarchbox" > /etc/hostname

# Configure hosts file
nano /etc/hosts
```

Add:
```
127.0.0.1    localhost
::1          localhost
127.0.1.1    yourarchbox.localdomain yourarchbox
```

### Set Root Password

```bash
passwd

# Type a STRONG password (you'll need this)
```

### Create User Account

```bash
# Create user
useradd -m -G wheel,audio,video,optical,storage -s /bin/bash yourusername

# Set password
passwd yourusername

# Enable sudo
EDITOR=nano visudo

# Uncomment this line:
%wheel ALL=(ALL:ALL) ALL
```

**What the Groups Mean:**
- `wheel`: Sudo access
- `audio`: Audio devices
- `video`: Video/GPU access
- `optical`: CD/DVD drives
- `storage`: External storage

---

## Bootloader: Making It Actually Boot {#bootloader}

### GRUB (Most Popular)

**UEFI Installation:**
```bash
# Install GRUB and efibootmgr
pacman -S grub efibootmgr

# Install to EFI partition
grub-install --target=x86_64-efi --efi-directory=/boot --bootloader-id=GRUB

# Generate config
grub-mkconfig -o /boot/grub/grub.cfg
```

**BIOS Installation:**
```bash
pacman -S grub

grub-install --target=i386-pc /dev/sda

grub-mkconfig -o /boot/grub/grub.cfg
```

### systemd-boot (Simpler, UEFI Only)

```bash
bootctl install

# Create entry
nano /boot/loader/entries/arch.conf
```

Add:
```
title   Arch Linux
linux   /vmlinuz-linux
initrd  /initramfs-linux.img
options root=/dev/sda3 rw
```

Configure loader:
```bash
nano /boot/loader/loader.conf
```

Add:
```
default arch.conf
timeout 3
console-mode max
editor no
```

### rEFInd (Advanced, Beautiful)

```bash
pacman -S refind

refind-install

# Generates config automatically
# Customize at /boot/EFI/refind/refind.conf
```

---

## Post-Installation: Making It Usable {#post-installation}

### Enable NetworkManager

```bash
systemctl enable NetworkManager
```

### Install Microcode

**Intel:**
```bash
pacman -S intel-ucode
grub-mkconfig -o /boot/grub/grub.cfg
```

**AMD:**
```bash
pacman -S amd-ucode
grub-mkconfig -o /boot/grub/grub.cfg
```

### Exit and Reboot

```bash
exit              # Leave chroot
umount -R /mnt    # Unmount partitions
reboot            # Remove USB when prompted
```

### First Boot

Login with your username and password.

**Enable WiFi:**
```bash
nmcli device wifi list
nmcli device wifi connect "SSID" password "your-password"
```

**Update System:**
```bash
sudo pacman -Syu
```

---

## Advanced Configuration {#advanced}

### Install AUR Helper (yay)

```bash
cd /tmp
git clone https://aur.archlinux.org/yay.git
cd yay
makepkg -si
```

Now you can install AUR packages:
```bash
yay -S package-name
```

### Install Desktop Environment

**KDE Plasma (Feature-rich):**
```bash
sudo pacman -S plasma-meta kde-applications sddm
sudo systemctl enable sddm
```

**GNOME (Modern, clean):**
```bash
sudo pacman -S gnome gnome-extra gdm
sudo systemctl enable gdm
```

**XFCE (Lightweight):**
```bash
sudo pacman -S xfce4 xfce4-goodies lightdm lightdm-gtk-greeter
sudo systemctl enable lightdm
```

**Minimal Window Manager (See my ricing guide for this!):**
```bash
sudo pacman -S i3-wm i3status i3lock dmenu
# Or Hyprland, bspwm, etc.
```

### Graphics Drivers

**NVIDIA (Proprietary):**
```bash
sudo pacman -S nvidia nvidia-utils nvidia-settings
```

**NVIDIA (Open-source):**
```bash
sudo pacman -S xf86-video-nouveau
```

**AMD:**
```bash
sudo pacman -S xf86-video-amdgpu vulkan-radeon
```

**Intel:**
```bash
sudo pacman -S xf86-video-intel vulkan-intel
```

### Audio Setup

```bash
# PipeWire (modern, recommended)
sudo pacman -S pipewire pipewire-pulse pipewire-alsa pipewire-jack \
  wireplumber pavucontrol

# Or PulseAudio (traditional)
sudo pacman -S pulseaudio pulseaudio-alsa pavucontrol
```

### Essential Tools

```bash
sudo pacman -S \
  firefox \
  git \
  wget \
  curl \
  htop \
  neofetch \
  tree \
  unzip \
  zip \
  p7zip \
  ffmpeg \
  imagemagick \
  vlc \
  code \
  discord \
  obs-studio
```

### Performance Optimization

**Enable Parallel Downloads:**
```bash
sudo nano /etc/pacman.conf

# Uncomment:
ParallelDownloads = 5
```

**Reduce Swappiness:**
```bash
echo "vm.swappiness=10" | sudo tee -a /etc/sysctl.d/99-swappiness.conf
```

**Enable TRIM for SSDs:**
```bash
sudo systemctl enable fstrim.timer
```

**Optimize makepkg:**
```bash
sudo nano /etc/makepkg.conf

# Find and edit:
MAKEFLAGS="-j$(nproc)"
COMPRESSXZ=(xz -c -z - --threads=0)
COMPRESSZST=(zstd -c -z -q - --threads=0)
```

### Security Hardening

**Firewall:**
```bash
sudo pacman -S ufw
sudo ufw default deny incoming
sudo ufw default allow outgoing
sudo ufw enable
sudo systemctl enable ufw
```

**Fail2ban:**
```bash
sudo pacman -S fail2ban
sudo systemctl enable fail2ban
```

**AppArmor:**
```bash
sudo pacman -S apparmor
# Add to GRUB: apparmor=1 security=apparmor
sudo nano /etc/default/grub
# Add to GRUB_CMDLINE_LINUX_DEFAULT
sudo grub-mkconfig -o /boot/grub/grub.cfg
sudo systemctl enable apparmor
```

---

## Common Fuckups and How to Fix Them {#troubleshooting}

### "No such file or directory" when booting

**Problem:** Wrong root partition in bootloader config

**Fix:**
1. Boot from USB again
2. Mount your partitions
3. `arch-chroot /mnt`
4. Reinstall bootloader
5. Check `/etc/fstab` for correct UUIDs

### Can't connect to WiFi

**Fix:**
```bash
sudo systemctl start NetworkManager
sudo systemctl enable NetworkManager
nmcli device wifi connect "SSID" password "password"
```

### Black screen after boot

**Problem:** Graphics driver issue

**Fix:**
1. Boot into TTY (Ctrl+Alt+F2)
2. Login
3. Install correct drivers
4. Reboot

### Forgot root password

**Fix:**
1. Boot from USB
2. Mount root: `mount /dev/sda3 /mnt`
3. Chroot: `arch-chroot /mnt`
4. Reset: `passwd`
5. Reboot

### Package conflicts

**Fix:**
```bash
# Remove conflicting package
sudo pacman -Rdd package-name

# Force overwrite
sudo pacman -S package-name --overwrite '*'
```

### System clock is wrong

**Fix:**
```bash
sudo timedatectl set-ntp true
sudo hwclock --systohc
```

### "Signature is unknown trust" errors

**Fix:**
```bash
sudo pacman-key --init
sudo pacman-key --populate archlinux
sudo pacman -Sy archlinux-keyring
```

---

## Advanced Tips and Tricks

### Snapshots with Btrfs

If you used Btrfs:
```bash
sudo pacman -S snapper
sudo snapper -c root create-config /
sudo snapper list
sudo snapper create --description "Before update"
```

### Automated Backups

```bash
yay -S timeshift
# GUI for system snapshots
```

### Power Management (Laptops)

```bash
sudo pacman -S tlp tlp-rdw
sudo systemctl enable tlp
sudo systemctl mask systemd-rfkill.service
sudo systemctl mask systemd-rfkill.socket
```

### Custom Kernel Parameters

```bash
sudo nano /etc/default/grub

# Example optimizations:
GRUB_CMDLINE_LINUX_DEFAULT="quiet splash nowatchdog"

sudo grub-mkconfig -o /boot/grub/grub.cfg
```

### Plymouth (Boot Splash)

```bash
yay -S plymouth
# Edit mkinitcpio.conf and GRUB
# Full guide: https://wiki.archlinux.org/title/Plymouth
```

---

## Final Thoughts

Congratulations! You've installed Arch Linux and hopefully learned a fuck-ton along the way. You now have a minimal, fast, and customizable system that you actually understand.

**What's Next?**
- Check out my **Linux Ricing guide** for making it look sexy
- Set up a tiling window manager (i3, bspwm, Hyprland)
- Explore the AUR
- Break shit and fix it (that's how you learn)
- Join r/unixporn and flex your setup

Remember: **The Arch Wiki is your best friend.** Whenever you want to configure something, search "arch wiki [thing]" and you'll find the answer.

Now go forth and rice the fuck out of your system.

**I use Arch btw. And now, so do you.** 🔥

# Write the ISO (replace /dev/sdX with your USB device)
sudo dd bs=4M if=archlinux-2024.12.01-x86_64.iso of=/dev/sdX status=progress oflag=sync
```

**On Windows:**
- Download [Rufus](https://rufus.ie/)
- Select your ISO and USB drive
- Click Start (use DD mode if prompted)

**On macOS:**
```bash
# Find your USB
diskutil list

# Unmount it (replace diskN with your USB)
diskutil unmountDisk /dev/diskN

# Write the ISO
sudo dd if=archlinux-2024.12.01-x86_64.iso of=/dev/rdiskN bs=1m
```

## Boot into Arch Live Environment

1. Restart your computer
2. Press **F2/F12/Del** (depends on your motherboard) to enter boot menu
3. Select your USB drive
4. You should see the Arch Linux boot menu—select the first option

If you see a command prompt with `root@archiso ~ #`, congrats! You're in.

## Step 1: Verify Boot Mode

First, let's check if you're running UEFI or BIOS (most modern systems use UEFI):

```bash
ls /sys/firmware/efi/efivars
```

If you see files, you're using UEFI. If you get an error, you're using BIOS. Remember this for later!

## Step 2: Connect to Internet

**Wired connection:**
Should work automatically. Test with:
```bash
ping archlinux.org
```

**WiFi:**
```bash
# Start iwctl
iwctl

# Inside iwctl:
device list                    # Find your wifi device (usually wlan0)
station wlan0 scan            # Scan for networks
station wlan0 get-networks    # List networks
station wlan0 connect "YourWiFiName"  # Connect
exit

# Test connection
ping archlinux.org
```

Press `Ctrl+C` to stop the ping.

## Step 3: Update System Clock

```bash
timedatectl set-ntp true
timedatectl status
```

## Step 4: Partition Your Disk

**⚠️ WARNING: This will erase data. Make sure you're working on the right disk!**

### Find Your Disk

```bash
lsblk
```

Look for your main disk (usually `/dev/sda` for HDDs or `/dev/nvme0n1` for NVMe SSDs).

### Partition with cfdisk (Easier for Beginners)

```bash
cfdisk /dev/sda  # Replace with your disk
```

Select **GPT** (for UEFI) or **DOS** (for BIOS).

#### For UEFI Systems:

Create these partitions:

1. **EFI System Partition**: 512MB, Type: EFI System
2. **Swap** (optional): 2-4GB or equal to your RAM, Type: Linux swap
3. **Root**: Rest of the disk, Type: Linux filesystem

#### For BIOS Systems:

1. **Swap** (optional): 2-4GB, Type: Linux swap
2. **Root**: Rest of the disk, Type: Linux filesystem

Hit **Write**, type `yes`, then **Quit**.

## Step 5: Format the Partitions

**For UEFI:**
```bash
# Format EFI partition
mkfs.fat -F32 /dev/sda1

# Format swap
mkswap /dev/sda2
swapon /dev/sda2

# Format root
mkfs.ext4 /dev/sda3
```

**For BIOS:**
```bash
# Format swap (if created)
mkswap /dev/sda1
swapon /dev/sda1

# Format root
mkfs.ext4 /dev/sda2  # or /dev/sda1 if no swap
```

## Step 6: Mount the File Systems

**For UEFI:**
```bash
# Mount root
mount /dev/sda3 /mnt

# Create and mount EFI
mkdir -p /mnt/boot/efi
mount /dev/sda1 /mnt/boot/efi
```

**For BIOS:**
```bash
# Mount root (adjust partition number if you created swap)
mount /dev/sda2 /mnt
```

## Step 7: Install Base System

This is where the magic happens:

```bash
pacstrap /mnt base linux linux-firmware base-devel vim nano networkmanager sudo
```

This will take a few minutes. Grab that coffee! ☕

**What did we just install?**
- `base`: Essential packages
- `linux`: The Linux kernel
- `linux-firmware`: Firmware for hardware
- `base-devel`: Tools for building software
- `vim/nano`: Text editors (choose your fighter!)
- `networkmanager`: To get internet after reboot
- `sudo`: To run commands as root

## Step 8: Generate fstab

```bash
genfstab -U /mnt >> /mnt/etc/fstab
```

This tells your system what partitions to mount on boot.

## Step 9: Chroot into New System

```bash
arch-chroot /mnt
```

You're now inside your new Arch installation!

## Step 10: Set Time Zone

```bash
# List available timezones
ls /usr/share/zoneinfo/

# Set your timezone (example for India)
ln -sf /usr/share/zoneinfo/Asia/Kolkata /etc/localtime

# Generate /etc/adjtime
hwclock --systohc
```

## Step 11: Localization

```bash
# Edit locale.gen
nano /etc/locale.gen
```

Uncomment your locale (e.g., `en_US.UTF-8 UTF-8`).

Press `Ctrl+X`, then `Y`, then `Enter` to save.

```bash
# Generate locales
locale-gen

# Set LANG variable
echo "LANG=en_US.UTF-8" > /etc/locale.conf
```

## Step 12: Network Configuration

```bash
# Set your hostname
echo "arch-vinay" > /etc/hostname

# Edit hosts file
nano /etc/hosts
```

Add these lines:
```
127.0.0.1    localhost
::1          localhost
127.0.1.1    arch-vinay.localdomain    arch-vinay
```

Enable NetworkManager:
```bash
systemctl enable NetworkManager
```

## Step 13: Set Root Password

```bash
passwd
```

Enter a strong password (you won't see characters as you type—this is normal).

## Step 14: Install Bootloader

**For UEFI:**
```bash
# Install GRUB and efibootmgr
pacman -S grub efibootmgr

# Install GRUB to EFI
grub-install --target=x86_64-efi --efi-directory=/boot/efi --bootloader-id=GRUB

# Generate config
grub-mkconfig -o /boot/grub/grub.cfg
```

**For BIOS:**
```bash
# Install GRUB
pacman -S grub

# Install to disk (NOT a partition)
grub-install --target=i386-pc /dev/sda

# Generate config
grub-mkconfig -o /boot/grub/grub.cfg
```

## Step 15: Create Your User

```bash
# Add user (replace 'vinay' with your username)
useradd -m -G wheel -s /bin/bash vinay

# Set password
passwd vinay

# Give sudo privileges
EDITOR=nano visudo
```

Uncomment this line:
```
%wheel ALL=(ALL:ALL) ALL
```

Save and exit (`Ctrl+X`, `Y`, `Enter`).

## Step 16: Install a Desktop Environment (Optional but Recommended)

Let's install a lightweight desktop to get you started:

```bash
# Install Xorg (display server)
pacman -S xorg

# Install a desktop environment
# Choose ONE:

# 1. GNOME (beautiful, user-friendly)
pacman -S gnome gnome-tweaks
systemctl enable gdm

# 2. KDE Plasma (highly customizable)
pacman -S plasma kde-applications
systemctl enable sddm

# 3. XFCE (lightweight, simple)
pacman -S xfce4 xfce4-goodies lightdm lightdm-gtk-greeter
systemctl enable lightdm

# 4. Or go minimal with a window manager (we'll cover this in the ricing blog!)
```

## Step 17: Reboot!

```bash
# Exit chroot
exit

# Unmount partitions
umount -R /mnt

# Reboot
reboot
```

Remove your USB when the system restarts.

## First Boot: What Now?

Congrats! If you see a login screen, you did it! 🎉

Login with the user you created.

### Connect to WiFi (if needed)

```bash
nmcli device wifi list
nmcli device wifi connect "YourWiFiName" password "YourPassword"
```

### Update Your System

```bash
sudo pacman -Syu
```

### Install Essential Tools

```bash
# Install yay (AUR helper)
sudo pacman -S git
cd /tmp
git clone https://aur.archlinux.org/yay.git
cd yay
makepkg -si

# Now you can install AUR packages with yay!
```

## Common Issues and Fixes

### "No bootable device" after reboot

- Boot back into live USB
- Mount your partitions
- `arch-chroot /mnt`
- Reinstall GRUB (see Step 14)

### WiFi not working

```bash
sudo systemctl start NetworkManager
sudo systemctl enable NetworkManager
```

### "Cannot find device" errors

Double-check partition names with `lsblk`. NVMe drives use `/dev/nvme0n1p1` format instead of `/dev/sda1`.

### Black screen after GRUB

Add `nomodeset` to GRUB parameters temporarily, then install proper graphics drivers.

## What's Next?

Now that you have Arch running, it's time to make it **yours**. Check out my next blog post on "Ricing Your Linux Setup" where we'll transform this basic installation into a stunning, personalized desktop environment.

**You've joined the club. Welcome!** Now you can say "I use Arch btw" with pride. 😎

## Resources

- [Arch Wiki Installation Guide](https://wiki.archlinux.org/title/Installation_guide) - The official guide
- [Arch Forums](https://bbs.archlinux.org/) - Friendly community for help
- [r/archlinux](https://reddit.com/r/archlinux) - Reddit community

Remember: Every Arch user was once where you are. Don't be afraid to ask questions, read the wiki, and experiment. That's how you learn!

Happy hacking! 🐧
