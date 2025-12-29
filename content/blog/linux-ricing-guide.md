---
title: "The Complete Guide to Ricing Linux: From Noob to r/unixporn"
excerpt: "Everything you need to transform your Linux setup into a masterpiece worthy of r/unixporn. Tiling managers, themes, dotfiles, workflows, and the secrets behind those insane screenshots."
date: "2024-12-29"
tags:
  - Linux
  - Customization
  - Dotfiles
  - Hyprland
  - Tiling Managers
  - unixporn
featured: true
author: "Vinay Yadav"
published: true
---

You've seen those insane Linux setups on r/unixporn. Smooth animations, perfectly color-matched terminals, status bars that look futuristic, and workflows so efficient they make your current setup look ancient.

You want that. I'm going to show you exactly how to get there.

This is the complete blueprint—from choosing a tiling window manager to mastering color theory, from basic dotfiles to advanced scripting. By the end, you'll have a setup that makes people ask "What distro is that?" even though it's just Arch with customization.

## What is Ricing?

**Ricing** = Customizing your Linux desktop to be uniquely yours—aesthetically beautiful, functionally superior, and keyboard-driven.

### Why Rice?

- **Efficiency**: Keyboard workflows are objectively faster
- **Productivity**: Optimized environment, zero distractions
- **Learning**: Deep Linux understanding
- **Aesthetic**: Because staring at default GNOME sucks
- **Flex**: Showing off your setup feels good
- **Community**: r/unixporn, dotfiles sharing, helping others

### Philosophy of Good Ricing

1. **Function over form** (but achieve both)
2. **Consistency** (color scheme everywhere)
3. **Minimalism** (remove bloat)
4. **Keyboard-first** (mouse is optional)
5. **Reproducibility** (portable dotfiles)

---

## Choosing Your Tiling Window Manager

This is the most important decision. Your WM defines your workflow.

### The Contenders

#### **i3wm** - The Gateway Drug
**Pros:** Easy to learn, stable, huge community, works everywhere
**Cons:** X11 only, no fancy animations

```bash
sudo pacman -S i3-wm i3status i3lock dmenu
```

**Best for:** Beginners to tiling WMs

#### **Hyprland** - The Eye Candy King
**Pros:** Wayland, gorgeous animations, modern, active development
**Cons:** Needs decent GPU, newer

```bash
yay -S hyprland-git
```

**Best for:** Modern ricing, r/unixporn content, animation lovers

#### **bspwm** - The Minimalist
**Pros:** Extremely minimal, flexible, fast
**Cons:** Steeper learning curve, requires sxhkd

```bash
sudo pacman -S bspwm sxhkd
```

**Best for:** Complete control freaks

#### **Sway** - i3 for Wayland
**Pros:** Drop-in i3 replacement, Wayland benefits
**Cons:** Less fancy than Hyprland

```bash
sudo pacman -S sway
```

**Best for:** i3 users wanting Wayland

#### **dwm** - The Suckless Way
**Pros:** Ultra lightweight, you edit source code
**Cons:** Need to recompile for changes

**Best for:** Programmers wanting ultimate control

### My Recommendation

- **Starting out?** → i3wm
- **Want eye candy?** → Hyprland
- **Minimalist?** → bspwm
- **Need stability?** → Sway

---

## The Perfect Rice Stack

Here's what you need for a killer setup:

```bash
# Window Manager
yay -S hyprland-git xdg-desktop-portal-hyprland-git

# Terminal
sudo pacman -S kitty

# Shell & Prompt
sudo pacman -S zsh
curl -sS https://starship.rs/install.sh | sh

# Status Bar
yay -S waybar-hyprland-git

# Launcher
sudo pacman -S rofi-wayland

# Notifications
sudo pacman -S dunst

# Wallpaper
sudo pacman -S swaybg

# File Manager
sudo pacman -S yazi nautilus

# Screenshots
sudo pacman -S grim slurp

# Lock Screen
yay -S swaylock-effects-git

# Essential Tools
sudo pacman -S btop neofetch cava

# Fonts
sudo pacman -S ttf-jetbrains-mono-nerd ttf-font-awesome noto-fonts-emoji
```

---

## Hyprland Configuration

Create `~/.config/hypr/hyprland.conf`:

```conf
# Monitor
monitor=,preferred,auto,1

# Auto-start
exec-once = waybar &
exec-once = dunst &
exec-once = swaybg -i ~/Pictures/wallpaper.jpg &

# Input
input {
    kb_layout = us
    follow_mouse = 1
    touchpad {
        natural_scroll = true
    }
}

# Appearance
general {
    gaps_in = 5
    gaps_out = 10
    border_size = 2
    col.active_border = rgba(33ccffee) rgba(00ff99ee) 45deg
    col.inactive_border = rgba(595959aa)
    layout = dwindle
}

# Decorations
decoration {
    rounding = 10
    blur {
        enabled = true
        size = 8
        passes = 3
    }
    drop_shadow = true
}

# Animations
animations {
    enabled = true
    bezier = myBezier, 0.05, 0.9, 0.1, 1.05
    animation = windows, 1, 7, myBezier
    animation = fade, 1, 7, default
    animation = workspaces, 1, 6, default
}

# Keybindings
$mod = SUPER

bind = $mod, RETURN, exec, kitty
bind = $mod, Q, killactive
bind = $mod, M, exit
bind = $mod, V, togglefloating
bind = $mod, D, exec, rofi -show drun
bind = $mod, F, fullscreen

# Focus
bind = $mod, h, movefocus, l
bind = $mod, l, movefocus, r
bind = $mod, k, movefocus, u
bind = $mod, j, movefocus, d

# Workspaces
bind = $mod, 1, workspace, 1
bind = $mod, 2, workspace, 2
bind = $mod, 3, workspace, 3
bind = $mod, 4, workspace, 4
bind = $mod, 5, workspace, 5

# Move to workspace
bind = $mod SHIFT, 1, movetoworkspace, 1
bind = $mod SHIFT, 2, movetoworkspace, 2
bind = $mod SHIFT, 3, movetoworkspace, 3
bind = $mod SHIFT, 4, movetoworkspace, 4
bind = $mod SHIFT, 5, movetoworkspace, 5

# Mouse bindings
bindm = $mod, mouse:272, movewindow
bindm = $mod, mouse:273, resizewindow

# Screenshots
bind = , PRINT, exec, grim -g "$(slurp)" - | wl-copy
```

---

## Terminal Setup (Kitty)

`~/.config/kitty/kitty.conf`:

```conf
# Font
font_family JetBrainsMono Nerd Font
font_size 12.0

# Cursor
cursor_shape block
cursor_blink_interval 0

# Window
window_padding_width 10
background_opacity 0.95

# Rose Pine Theme
foreground #e0def4
background #191724

# Black
color0 #26233a
color8 #6e6a86

# Red
color1 #eb6f92
color9 #eb6f92

# Green
color2 #31748f
color10 #31748f

# Yellow
color3 #f6c177
color11 #f6c177

# Blue
color4 #9ccfd8
color12 #9ccfd8

# Magenta
color5 #c4a7e7
color13 #c4a7e7

# Cyan
color6 #ebbcba
color14 #ebbcba

# White
color7 #e0def4
color15 #e0def4
```

---

## Waybar Configuration

`~/.config/waybar/config`:

```json
{
    "layer": "top",
    "position": "top",
    "height": 35,
    "modules-left": ["hyprland/workspaces", "hyprland/window"],
    "modules-center": ["clock"],
    "modules-right": ["pulseaudio", "network", "cpu", "memory", "battery"],
    
    "hyprland/workspaces": {
        "format": "{icon}",
        "format-icons": {
            "1": "",
            "2": "",
            "3": "",
            "4": "",
            "5": ""
        }
    },
    
    "clock": {
        "format": " {:%H:%M   %d %b}"
    },
    
    "cpu": {
        "format": " {usage}%"
    },
    
    "memory": {
        "format": " {}%"
    },
    
    "battery": {
        "format": "{icon} {capacity}%",
        "format-icons": ["", "", "", "", ""]
    },
    
    "network": {
        "format-wifi": " {essid}",
        "format-ethernet": " Wired"
    },
    
    "pulseaudio": {
        "format": "{icon} {volume}%",
        "format-icons": ["", "", ""]
    }
}
```

`~/.config/waybar/style.css`:

```css
* {
    font-family: "JetBrainsMono Nerd Font";
    font-size: 13px;
}

window#waybar {
    background: rgba(25, 23, 36, 0.95);
    color: #e0def4;
    border-bottom: 2px solid #31748f;
}

#workspaces button {
    padding: 0 10px;
    color: #6e6a86;
}

#workspaces button.active {
    color: #9ccfd8;
    background: rgba(156, 207, 216, 0.2);
}

#clock {
    color: #c4a7e7;
    padding: 0 15px;
}

#cpu, #memory, #battery, #network, #pulseaudio {
    padding: 0 10px;
    margin: 0 2px;
    background: rgba(49, 116, 143, 0.2);
    border-radius: 5px;
}
```

---

## Rofi Launcher

`~/.config/rofi/config.rasi`:

```css
configuration {
    modi: "drun,run,window";
    show-icons: true;
    font: "JetBrainsMono Nerd Font 12";
}

* {
    bg: #191724;
    fg: #e0def4;
    accent: #9ccfd8;
    background-color: @bg;
    text-color: @fg;
}

window {
    width: 600px;
    border: 2px;
    border-color: @accent;
    border-radius: 10px;
    padding: 20px;
}

element selected {
    background-color: @accent;
    text-color: @bg;
}
```

---

## Color Schemes

### Popular Palettes

- **Rose Pine**: Soft, warm, easy on eyes
- **Catppuccin**: Pastel, modern, trendy
- **Dracula**: Bold, high contrast
- **Gruvbox**: Retro, comfortable
- **Nord**: Cool, minimal, professional
- **Tokyo Night**: Dark, vibrant

### Using Pywal (Auto Theme Generator)

```bash
yay -S python-pywal

# Generate from wallpaper
wal -i ~/Pictures/wallpaper.jpg

# Auto-apply on startup
echo "(cat ~/.cache/wal/sequences &)" >> ~/.zshrc
```

---

## Dotfiles Management

### Git Bare Repository Method

```bash
# Initialize
git init --bare $HOME/.dotfiles

# Alias
echo "alias dotfiles='/usr/bin/git --git-dir=$HOME/.dotfiles/ --work-tree=$HOME'" >> ~/.zshrc

# Configure
dotfiles config --local status.showUntrackedFiles no

# Add files
dotfiles add ~/.config/hypr/hyprland.conf
dotfiles add ~/.config/waybar/config
dotfiles add ~/.config/kitty/kitty.conf
dotfiles add ~/.zshrc

# Commit and push
dotfiles commit -m "Initial dotfiles"
dotfiles remote add origin git@github.com:yourusername/dotfiles.git
dotfiles push -u origin main
```

### Restore on New Machine

```bash
git clone --bare git@github.com:yourusername/dotfiles.git $HOME/.dotfiles
alias dotfiles='/usr/bin/git --git-dir=$HOME/.dotfiles/ --work-tree=$HOME'
dotfiles checkout
```

---

## Becoming r/unixporn Worthy

### What Makes a Good Post

1. **Consistency**: Colors match everywhere
2. **Originality**: Not just default themes
3. **Details**: Custom scripts, unique features
4. **Screenshots**: High quality, show workflow
5. **Dotfiles**: Share on GitHub

### Screenshot Essentials

```bash
# Perfect screenshot setup:
# Terminal 1: neofetch
# Terminal 2: cava (music visualizer)
# Terminal 3: btop (system monitor)
# Terminal 4: actual code/work
```

### Must-Have for Screenshots

```bash
sudo pacman -S neofetch btop cava
```

### Advanced Neofetch Config

`~/.config/neofetch/config.conf`:

```bash
print_info() {
    info title
    info underline
    info "OS" distro
    info "Kernel" kernel
    info "WM" wm
    info "Shell" shell
    info "Terminal" term
    info "CPU" cpu
    info "Memory" memory
    info cols
}

image_backend="kitty"
image_size="250px"
```

---

## Advanced Tips

### Window Rules (Hyprland)

```conf
# Floating windows
windowrule = float, ^(pavucontrol)$
windowrule = opacity 0.9, ^(kitty)$

# Workspace assignment
windowrule = workspace 2, ^(firefox)$
windowrule = workspace 3, ^(code)$
```

### Custom Scripts

Lock screen script:
```bash
#!/bin/bash
swaylock --screenshots --clock --effect-blur 7x5
```

Screenshot script:
```bash
#!/bin/bash
grim -g "$(slurp)" ~/Pictures/screenshot-$(date +%Y%m%d-%H%M%S).png
```

### Performance Optimization

```bash
# Enable parallel downloads
sudo nano /etc/pacman.conf
# Uncomment: ParallelDownloads = 5

# SSD optimization
sudo systemctl enable fstrim.timer

# Reduce swappiness
echo "vm.swappiness=10" | sudo tee -a /etc/sysctl.d/99-swappiness.conf
```

---

## Publishing Your Rice

Create a README for your dotfiles:

```markdown
# My Arch Rice 🌸

## Details
- **OS**: Arch Linux
- **WM**: Hyprland
- **Bar**: Waybar
- **Terminal**: Kitty
- **Theme**: Rose Pine

## Installation
git clone https://github.com/yourusername/dotfiles
cd dotfiles
./install.sh

## Features
- Smooth animations
- Color-matched everything
- Keyboard-driven workflow
```

---

## Final Thoughts

You now have everything needed to create a setup worthy of r/unixporn. Remember:

**Golden Rules:**
1. Consistency is key
2. Function over form
3. Iterate constantly
4. Share your work
5. Backup your dotfiles
6. Have fun

**Resources:**
- r/unixporn - Inspiration
- dotfiles.github.io - Examples
- Arch Wiki - Documentation

Now go make something beautiful. Your Linux box is a canvas.

**Time to rice.** 🎨

*Check out my dotfiles at [github.com/vinayydv3695/HollowDots](https://github.com/vinayydv3695/HollowDots) for my complete Hyprland setup.*
