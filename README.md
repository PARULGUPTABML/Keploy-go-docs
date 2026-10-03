# Keploy + Go: From API Traffic to Automated Tests

> **Keploy DevRel Candidate Assignment** — A single-page, static documentation website built with Next.js and MDX.

## 🔗 Live Demo

👉 **[View Live on Vercel](https://keploy-go-docs.vercel.app)**

---

## 📖 About

This is a beginner-friendly tutorial documenting how to use **Keploy** with a **Go + MySQL** application to automatically record API traffic and replay it as a test suite — without writing a single test manually.

**Tutorial covers:**
1. Setting up the Go sample app (Mux + MySQL)
2. Starting MySQL via Docker
3. Recording API traffic with Keploy
4. Inspecting auto-generated YAML test cases and mocks
5. Replaying all tests without a live database

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| **Next.js 16** | React framework with App Router |
| **MDX** | Markdown + React components for content |
| **Tailwind CSS v4** | Utility-first styling |
| **rehype-highlight** | Syntax highlighting for code blocks |
| **remark-gfm** | GitHub Flavored Markdown (tables, etc.) |
| **Lucide React** | Icon library |
| **next-themes** | Dark / Light mode |

---

## ✨ Features

- 📄 **Full 10-step tutorial** written as a developer narrative
- 🌙 **Dark / Light mode toggle**
- 📍 **Scroll-spy sidebar** — highlights current section as you scroll
- 🖱️ **Click nav → smooth scroll + teal highlight flash** on the target section
- 📊 **Reading progress bar** at the top of the page
- 🔢 **Step number badges** on each section heading
- 📋 **Copy button** on all code blocks
- 💬 **Callout components** (Info / Tip / Warning / Success)
- 🏆 **ResultCard widget** showing test results
- 📱 **Mobile responsive** with slide-in hamburger menu

---

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

```bash
# Production build
npm run build
npm run start
```

---

## 📁 Project Structure

```
keploy-go-docs/
├── app/
│   ├── page.mdx          # Full tutorial content (MDX)
│   ├── layout.tsx        # Root layout with ThemeProvider
│   └── globals.css       # Design system & styles
├── components/
│   ├── callout.tsx       # Info/Tip/Warning/Success boxes
│   ├── code-block.tsx    # Dark code shell with copy button
│   ├── docs-shell.tsx    # Header + sidebar + scroll-spy
│   ├── result-card.tsx   # Test results widget
│   ├── step-badge.tsx    # Numbered step badges
│   ├── theme-provider.tsx
│   └── theme-toggle.tsx  # Dark/light toggle button
├── mdx-components.tsx    # MDX component overrides
└── next.config.ts        # MDX + GFM + highlight config
```

---

## 🎯 Assignment Requirements Met

| Requirement | ✅ |
|---|---|
| Next.js framework | ✅ |
| MDX content (`.mdx` file) | ✅ |
| Step-by-step tutorial | ✅ |
| Code snippets with syntax highlighting | ✅ |
| Interactive UI elements (Callouts, ResultCard) | ✅ |
| Clean, professional UI | ✅ |
| Dark / Light mode toggle (Bonus) | ✅ |
| Polished UI (Bonus) | ✅ |
| Deployed on Vercel | ✅ |
