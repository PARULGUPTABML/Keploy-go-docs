# Keploy Go Quickstart Documentation

A beginner-friendly, single-page documentation website built as part of the **Keploy DevRel Candidate Assignment**.

The project explains how a developer can get started with Keploy and a Go application, record API interactions, and run the generated tests. The documentation is presented as a clean, documentation-style website using **Next.js and MDX**.

## 🚀 Live Demo

**Vercel:** `ADD_YOUR_VERCEL_URL_HERE`

## 📦 Repository

**GitHub:** https://github.com/PARULGUPTABML/Keploy-go-docs

---

## 🎯 Assignment Objective

The goal of this project is to:

- Learn and run a Keploy Go quickstart.
- Document the experience in a beginner-friendly tutorial.
- Explain the purpose behind each step rather than simply copying existing documentation.
- Build the tutorial as a static website using **Next.js + MDX**.
- Provide a clean and professional developer documentation experience.
- Deploy the finished website to Vercel.

---

## ✨ Features

- **Next.js** based documentation website
- **MDX** content so Markdown can be combined with React components
- Step-by-step Go + Keploy tutorial
- Syntax-highlighted code blocks
- Documentation-style sidebar navigation
- Active step highlighting and same-page navigation
- Custom callout/info components
- Result cards and step badges
- Interactive test-runner component
- Light/dark theme support
- Responsive layout for different screen sizes
- Beginner-friendly explanations and troubleshooting guidance

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| Next.js | Web framework |
| React | UI components |
| MDX | Documentation content |
| Tailwind CSS | Styling |
| Lucide React | Icons |
| Remark GFM | GitHub-Flavored Markdown support |
| Rehype Highlight | Code syntax highlighting |
| TypeScript | Type-safe development |
| Vercel | Deployment |

---

## 📁 Project Structure

```text
keploy-go-docs/
│
├── app/
│   ├── page.mdx                 # Main documentation/tutorial page
│   └── ...
│
├── components/
│   ├── callout.tsx              # Information/warning callouts
│   ├── result-card.tsx          # Result/status cards
│   ├── step-badge.tsx           # Step indicators
│   ├── interactive-test-runner.tsx
│   ├── auth-gate.tsx
│   ├── guest-gate.tsx
│   └── ...
│
├── public/                      # Static assets
│
├── next.config.ts               # Next.js + MDX configuration
├── package.json                 # Dependencies and scripts
├── tsconfig.json                # TypeScript configuration
├── postcss.config.mjs           # Tailwind/PostCSS configuration
├── eslint.config.mjs            # ESLint configuration
├── .gitignore
└── README.md
```

---

## ⚙️ Prerequisites

Before running the documentation website locally, make sure you have:

- Node.js installed
- npm installed
- Git installed

For the tutorial itself, follow the prerequisites mentioned inside the documentation page for the Go/Keploy quickstart.

---

## 🚀 Run the Project Locally

### 1. Clone the repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
cd keploy-go-docs
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

The development server will normally be available at:

```text
http://localhost:3000
```

### 4. Build for production

```bash
npm run build
```

### 5. Start the production server

```bash
npm start
```

### 6. Run linting

```bash
npm run lint
```

---

## 📝 Documentation Content

The main tutorial is written in MDX.

The tutorial follows a beginner-friendly flow:

1. Introduction to the tutorial
2. Prerequisites
3. Setting up the Go application
4. Setting up Keploy
5. Running the application
6. Recording API test cases
7. Running Keploy tests
8. Understanding the generated tests
9. Troubleshooting common issues
10. Summary

The tutorial focuses not only on **what command to run**, but also on **why the step is necessary** and what Keploy is doing behind the scenes.

---

## 🧩 MDX Components

The project uses custom React components directly inside MDX.

Examples include:

### Callouts

Used to highlight important information, tips, warnings, or notes.

```mdx
<Callout type="info">
  This step explains why the command is required.
</Callout>
```

### Step badges

Used to make the tutorial steps visually easier to follow.

```mdx
<StepBadge>01</StepBadge>
```

### Result cards

Used to show expected results or important outcomes.

```mdx
<ResultCard />
```

### Interactive test runner

Used to provide a more interactive developer experience around the testing workflow.

---

## 🎨 UI / UX Approach

The website is designed to feel like modern developer documentation rather than a traditional marketing website.

The interface includes:

- A persistent step-based sidebar
- Highlighting of the current section
- Same-page navigation
- Clear section hierarchy
- Readable typography
- Code blocks with syntax highlighting
- Contextual callouts
- Responsive behavior
- Theme switching

The navigation is designed so that clicking a step takes the reader directly to the corresponding section on the page.

---

## 🔄 Keploy Workflow Covered

The tutorial introduces the basic workflow of using Keploy with a Go application:

```text
Go Application
      │
      ▼
Run the application
      │
      ▼
Send API requests
      │
      ▼
Keploy records interactions
      │
      ▼
Generated test cases
      │
      ▼
Run Keploy tests
      │
      ▼
Verify application behaviour
```

The purpose is to make the testing workflow understandable to a developer who has never used Keploy before.

---

## 🌐 Deployment

The application can be deployed using Vercel.

Typical deployment flow:

```text
GitHub Repository
       │
       ▼
Connect repository to Vercel
       │
       ▼
Vercel builds Next.js application
       │
       ▼
Live documentation website
```

The project uses Next.js and is therefore suitable for deployment through Vercel.

---

## 🧪 Quality Checks

Before submitting the project, verify:

- [ ] The website starts successfully with `npm run dev`
- [ ] The production build succeeds with `npm run build`
- [ ] MDX content renders correctly
- [ ] All sidebar links navigate to the correct sections
- [ ] Code blocks are readable and syntax highlighted
- [ ] Dark/light mode works correctly
- [ ] The layout works on smaller screens
- [ ] There are no broken links
- [ ] There are no obvious spelling or formatting errors
- [ ] The GitHub repository is public
- [ ] The Vercel deployment is accessible

---

## 📌 Assignment Deliverables

The final submission requires two links:

1. **Public GitHub repository** containing the source code.
2. **Live Vercel deployment** containing the completed documentation page.

Replace the placeholders at the top of this README with the final links before submission.

---

## 👩‍💻 Built For

**Keploy DevRel Candidate Assignment**

This project demonstrates:

- Technical learning
- Developer-focused documentation
- Next.js development
- MDX usage
- React component integration
- UI/UX thinking
- API testing concepts
- Technical communication

---

## 📄 License

This project was created for the Keploy DevRel candidate assignment.
