# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server (http://localhost:5173)
npm run build     # Production build (outputs to dist/)
npm run preview   # Preview production build locally
npm run lint      # Run ESLint
npm run deploy    # Build and deploy to GitHub Pages (gh-pages -d dist)
```

## Architecture

Single-page React 19 portfolio site built with Vite, targeting Business Analyst, Business Systems Analyst and Data Analyst roles. No router: one scrolling page with anchor links (`#about`, `#experience`, `#projects`). Sections fade in via `src/hooks/useScrollReveal.js`.

**Component tree:**
```
App.jsx
├── Navigation.jsx   # Fixed top nav; blurs after scrolling; resume link
├── Hero.jsx         # Name, title, tagline, stat row, social links
├── Info/About.jsx   # Bio, education, photo
├── Skills.jsx       # Grouped skill chips
├── Info/Experience.jsx  # Vertical timeline
├── Info/Projects.jsx    # Card grid
└── Footer.jsx
```

**Content** lives in `src/data/` (`experience.js`, `projects.js`, `skills.js`). Edit those, not the components, to change text. Every fact should match the resumes; do not invent roles or numbers.

Each component has its own co-located `.css` file. Global styles and color tokens are in `App.css`.

**Assets** live in `src/assets/`: profile photo, the resume PDF (`Almat_Bolatbekov_Resume.pdf`, the Business Analyst version), and project screenshots in `src/assets/projects/`.

**Deployment:** GitHub Pages at `https://almatb22.github.io`. `npm run deploy` runs `predeploy` (build) then pushes `dist/` via gh-pages.
