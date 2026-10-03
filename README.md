# Keploy + Go: From API Traffic to Automated Tests

> A beginner-friendly, interactive documentation tutorial built with **Next.js 15** and **MDX** — submitted as part of the Keploy DevRel Candidate Assignment.

🔗 **Live Demo:** [keploy-go-docs.vercel.app](https://keploy-go-docs.vercel.app) &nbsp;|&nbsp; 📖 **Tutorial:** [View on site](https://keploy-go-docs.vercel.app)

---

## 📌 What this is

This is a single-page documentation website that teaches developers how to:
1. Run a Go + MySQL URL shortener app
2. Record real API traffic using **Keploy**
3. Replay those recordings as **automated tests — without writing a single line of test code**

The tutorial covers 10 steps end-to-end, from cloning the repo to seeing 3 passing tests.

---

## ✨ Features

| Feature | Description |
|---|---|
| 🌗 Dark / Light mode | Toggle between themes |
| 🔐 Sign In system | Demo auth with per-user progress tracking |
| 🧪 Interactive Test Runner | Click "Run Tests" to watch tests animate live |
| 📊 Step progress tracker | Mark steps done, progress saved per user |
| 🔒 Guest gate | Signed-out users see step names + fade preview |
| 📖 Scroll-spy sidebar | Active step highlights as you scroll |
| 📋 Copy buttons | One-click copy on every code block |
| ⏱ Reading time | Hero meta bar shows estimated read time |
| 📱 Mobile responsive | Works on all screen sizes |
| 🦶 Icon footer | Links to GitHub, Docs, Discord, CI/CD |

---

## 🔑 Demo Credentials

To access the full tutorial on the live site:

| Field | Value |
|---|---|
| Email | `demo@keploy.io` |
| Password | `Keploy@123` |

> Password requirements: 8+ chars · 1 uppercase · 1 lowercase · 1 number · 1 special character

---

## 🛠 Tech Stack

| Technology | Purpose |
|---|---|
| [Next.js 15](https://nextjs.org) | React framework (App Router) |
| [MDX](https://mdxjs.com) | Markdown + JSX content |
| [Tailwind CSS v4](https://tailwindcss.com) | Styling utility |
| [rehype-highlight](https://github.com/rehypejs/rehype-highlight) | Syntax highlighting |
| [remark-gfm](https://github.com/remarkjs/remark-gfm) | GitHub Flavored Markdown (tables) |
| [next-themes](https://github.com/pacocoursey/next-themes) | Dark/light mode |
| [lucide-react](https://lucide.dev) | Icons |

---

## 📁 Project Structure

```
keploy-go-docs/
├── app/
│   ├── page.mdx              # Main tutorial content (10 steps)
│   ├── layout.tsx            # Root layout with providers
│   ├── globals.css           # Design system + all styles
│   └── login/
│       ├── page.tsx          # Sign-in page
│       └── layout.tsx        # Login page layout
├── components/
│   ├── docs-shell.tsx        # Sidebar, header, scroll-spy, progress
│   ├── auth-provider.tsx     # Auth context (demo credentials)
│   ├── guest-gate.tsx        # Content gate for signed-out users
│   ├── interactive-test-runner.tsx  # Animated test runner widget
│   ├── code-block.tsx        # Dark code shell with copy button
│   ├── callout.tsx           # Info/Tip/Warning/Success boxes
│   ├── footer.tsx            # Icon footer with links
│   ├── result-card.tsx       # Test result summary card
│   ├── step-badge.tsx        # Numbered step badge
│   ├── theme-toggle.tsx      # Dark/light toggle button
│   └── theme-provider.tsx    # next-themes wrapper
├── mdx-components.tsx        # MDX component registry
└── next.config.ts            # MDX + remark/rehype config
```

---

## 🚀 Run Locally

```bash
# 1. Clone the repo
git clone https://github.com/YOUR_USERNAME/keploy-go-docs.git
cd keploy-go-docs

# 2. Install dependencies
npm install

# 3. Start dev server
npm run dev

# 4. Open in browser
# http://localhost:3000
```

### Build for production

```bash
npm run build
npm start
```

---

## 🎯 Assignment Requirements Checklist

| Requirement | Status |
|---|---|
| Next.js framework | ✅ |
| MDX content (`.mdx`) | ✅ |
| Step-by-step tutorial | ✅ 10 steps |
| Code snippets with syntax highlighting | ✅ |
| Interactive UI elements (callout boxes) | ✅ |
| **Bonus:** High-quality polished UI | ✅ |
| **Bonus:** Dark / Light mode toggle | ✅ |
| **Bonus:** Thoughtful UI library usage | ✅ |
| Deployed on Vercel | ✅ |

---

## 📸 Screenshots

### Home page (Dark mode)
> Scroll-spy sidebar · Reading progress bar · Step tracker

### Sign In page
> Demo credentials · Password strength requirements · Autofill button

### Interactive Test Runner
> Click "▶ Run Tests" → watch 3 tests animate with live timing

---

## 👩‍💻 Author

Built by **Parul Gupta** as part of the [Keploy DevRel Candidate Assignment](https://keploy.io).

- GitHub: [@YOUR_GITHUB_USERNAME](https://github.com/YOUR_GITHUB_USERNAME)

---

## 📄 License

MIT — free to use and learn from.
