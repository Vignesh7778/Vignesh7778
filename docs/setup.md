# Vignesh7778 Profile System Setup Guide

Welcome to the **Vignesh7778 Terminal Profile System** repository documentation.

## 🚀 Quickstart & Local SVG Generation

1. **Install Dependencies:**
   Ensure Node.js v18+ is installed on your local environment.

2. **Run Generator Scripts:**
   ```bash
   node scripts/generateHero.js
   node scripts/generateTerminal.js
   node scripts/generatePortrait.js
   node scripts/generateWordmark.js
   node scripts/generateStats.js
   ```

3. **Verify SVG Assets:**
   Check the `assets/` directory to preview generated vector graphics.

## ⚙️ GitHub Actions Automation

- **`snake.yml`**: Triggers daily at `00:00 UTC` to render the contribution graph snake animation and publishes to the `output` branch.
- **`hero.yml`**: Auto-generates `assets/hero.svg` with live system telemetry timestamps.
- **`stats.yml`**: Fetches GitHub metrics and updates dynamic badge SVG graphics.
- **`ascii.yml`**: Regenerates ASCII portrait and wordmark vector SVGs weekly.

## 🛡️ Required Repository Permissions

Under **Settings > Actions > General > Workflow permissions**:
- Select **Read and write permissions**.
- Enable **Allow GitHub Actions to create and approve pull requests**.
