# 📖 Vignesh M (@Vignesh7778) — Master Profile README Guide

This document contains the complete documentation, asset specifications, installation instructions, customization guidelines, and master link registry for **Vignesh M's (@Vignesh7778)** GitHub Profile README.

---

## 📂 1. Folder Structure

```text
Vignesh7778/
├── .github/
│   └── workflows/
│       └── snake.yml               # Automated GitHub Action for Contribution Snake SVG
├── assets/
│   ├── banner.svg                  # Custom Cyberpunk Neon Vector Hero Header
│   ├── terminal.svg                # Realistic Zsh/Linux Terminal Diagnostics SVG
│   ├── divider.svg                 # Glowing Cyber Divider Line Vector
│   ├── footer.svg                  # Premium Waving Dark Cyber Footer Vector
│   ├── world-map.svg               # Cyber Grid Global Node & Network Map
│   ├── particles.svg               # Cyber Matrix Particle Animation Element
│   └── icons/
│       ├── README.md               # Custom Vector Icons Registry Documentation
│       └── security.svg            # Custom Shield & Hardening SVG Icon Asset
├── README.md                       # Main Production-Ready GitHub Profile README (15 Sections)
└── GUIDE.md                        # Master Documentation, Assets List & Setup Guide
```

---

## 🎨 2. Assets List

1. **`assets/banner.svg`**: Custom-built cyberpunk vector hero header featuring SVG glow filters, linear gradients, neon green (`#00FF66`) and cyber cyan (`#00D2FF`) highlights, status badges, and tech stack pills.
2. **`assets/terminal.svg`**: Interactive Linux/Zsh terminal diagnostic window with macOS style buttons, command prompts (`$ whoami`, `$ pwd`, `$ cat education.txt`, `$ cat skills.md`, `$ git status`, `$ ls -l repositories/`, `$ java --version`, `$ uptime`), blinking cursor animation, and status fields.
3. **`assets/divider.svg`**: Glowing cyber neon section separator line.
4. **`assets/footer.svg`**: Waving cyber neon footer banner with status indicators.
5. **`assets/world-map.svg`**: Interactive location node map highlighting primary engineering base in Tamil Nadu, India.
6. **`assets/particles.svg`**: Cyber particle matrix grid visual graphic.
7. **`assets/icons/`**: Directory containing vector icon assets (`security.svg`, `README.md`) for technical branding.
8. **Readme Typing SVG**: Dynamic animated typing effect displaying current roles and focus (`https://readme-typing-svg.demolab.com`).
9. **GitHub Profile Views Counter**: Real-time counter badge by Komarev (`https://komarev.com/ghpvc/`).
10. **GitHub Readme Stats & Top Languages**: Dark-themed analytics cards with cyan and green accents (`https://github-readme-stats.vercel.app`).
11. **GitHub Streak Stats**: Daily contribution streak tracking widget (`https://github-readme-streak-stats.herokuapp.com`).
12. **Contribution Snake SVG**: Automated vector animation eating contribution dots generated daily via GitHub Actions (`output/github-contribution-grid-snake-dark.svg`).
13. **Shields.io Badges**: Standardized tech stack, category pills, and social badges (`https://img.shields.io`).

---

## ⚙️ 3. Installation & Deployment Instructions

Follow these steps to deploy this profile to your live GitHub profile:

### Step 1: Create Your Profile Repository
1. On GitHub, create a repository named **`Vignesh7778`** (matching your exact GitHub username).
2. Set the repository visibility to **Public**.
3. Do not add a default README if you are pushing from this local repository.

### Step 2: Push Workspace Files to GitHub
Run the following terminal commands inside this directory:

```bash
git init
git add .
git commit -m "feat: deploy world-class cyberpunk profile README and snake action"
git branch -M main
git remote add origin https://github.com/Vignesh7778/Vignesh7778.git
git push -u origin main --force
```

### Step 3: Configure GitHub Actions Permissions for Contribution Snake
1. Go to your repository on GitHub: `https://github.com/Vignesh7778/Vignesh7778`
2. Click **Settings** ➔ **Actions** ➔ **General**.
3. Scroll down to **Workflow permissions** and select **Read and write permissions**.
4. Click **Save**.
5. Navigate to the **Actions** tab ➔ Click **Generate Contribution Snake Animation** ➔ Click **Run workflow**.
6. The snake workflow will generate SVG animations into an `output` branch automatically every 24 hours.

---

## 🛠️ 4. Customization Guide

### Modifying Text & Bio Information
- **Main README Sections**: All text content across the 15 sections is located in `README.md`. You can update project descriptions, bio details, or timeline goals directly.
- **Terminal Diagnostics**: Edit `assets/terminal.svg` using any text editor. Terminal commands (`$ whoami`, `$ pwd`, `$ cat education.txt`, `$ cat skills.md`, `$ git status`, `$ ls -l repositories/`, `$ java --version`, `$ uptime`) are cleanly grouped inside `<g transform="translate(30, 70)">`.
- **Hero Banner Header**: Edit `assets/banner.svg` to adjust text, subtitle, or badge labels.

### Color Theme Palette
- 🟢 **Neon Green Accent**: `#00FF66`
- 🔵 **Cyber Blue Accent**: `#00D2FF`
- ⬛ **Deep Obsidian Canvas**: `#05070a` / `#0d1117`
- 🌌 **Card Surface**: `#121826` / `#161e2e`
- ⚪ **High-Contrast Text**: `#ffffff` / `#e2e8f0`

---

## 🐍 5. GitHub Actions Workflow (`.github/workflows/snake.yml`)

The contribution snake animation is powered by `.github/workflows/snake.yml`:

```yaml
name: Generate Contribution Snake Animation

on:
  schedule:
    - cron: "0 0 * * *"
  workflow_dispatch:
  push:
    branches:
      - main

jobs:
  generate:
    permissions:
      contents: write
    runs-on: ubuntu-latest
    timeout-minutes: 5

    steps:
      - name: Checkout Repository
        uses: actions/checkout@v4

      - name: Generate Contribution Snake SVG
        uses: Platane/snk/svg-only@v3
        with:
          github_user_name: ${{ github.repository_owner }}
          outputs: |
            dist/github-contribution-grid-snake.svg
            dist/github-contribution-grid-snake-dark.svg?palette=github-dark&color_snake=%2300FF66&color_dots=%23161b22,%230e4429,%23006d32,%2326a641,%2300ff66

      - name: Push Snake SVG to Output Branch
        uses: crazy-max/ghaction-github-pages@v4
        with:
          target_branch: output
          build_dir: dist
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

---

## 🔗 6. Master External Link Registry

All external URLs integrated into `README.md` have been checked and verified:

| Identifier / Platform | Target URL | Status |
| :--- | :--- | :---: |
| **GitHub Profile** | `https://github.com/Vignesh7778` | Verified 🟢 |
| **LinkedIn Profile** | `https://www.linkedin.com/in/vignesh-murali-dharan/` | Verified 🟢 |
| **LeetCode Profile** | `https://leetcode.com/u/M_Vignesh_1520/` | Verified 🟢 |
| **HackerRank Profile** | `https://www.hackerrank.com/profile/vigneshdevi22` | Verified 🟢 |
| **Live Developer Portfolio** | `https://new-portfolio-gold-alpha.vercel.app` | Verified 🟢 |
| **Email Contact** | `mailto:vigneshdevi22@gmail.com` | Verified 🟢 |
| **CropLedger Payment Register Repo** | `https://github.com/Vignesh7778/Farmer_Digital_payment_Register` | Verified 🟢 |
| **CropLedger Payment Register Demo** | `https://cropledger-farmer-digital-payment-register.vercel.app/` | Verified 🟢 |
| **CyberSec EduSuite Repo** | `https://github.com/Vignesh7778/CyberSec-EduSuite` | Verified 🟢 |
| **TLS Security Lab Repo** | `https://github.com/Vignesh7778/TLS-Security-Lab` | Verified 🟢 |
| **Restaurant Booking Repo** | `https://github.com/Vignesh7778/Resturant_table_booking_project` | Verified 🟢 |
| **Restaurant Booking Demo** | `https://resturant-table-booking-project.vercel.app` | Verified 🟢 |
| **STA Experiments Repo** | `https://github.com/Vignesh7778/STA_experiments` | Verified 🟢 |
| **Developer Portfolio Repo** | `https://github.com/Vignesh7778/new_portfolio` | Verified 🟢 |
