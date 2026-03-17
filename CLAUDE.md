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

Single-page React 19 portfolio site built with Vite. No React Router — navigation is state-based in `App.jsx` via a `page` state variable (`'home' | 'about' | 'experience' | 'project'`).

**Key behaviors:**
- Screens narrower than 760px force the `page` state back to `'home'` (handled in `App.jsx` with a resize listener)
- `Home.jsx` renders differently on mobile vs desktop: mobile shows inline work experience data, desktop shows navigation cards

**Component tree:**
```
App.jsx
├── Navigation.jsx          # Top nav with resume PDF link and email
├── Home.jsx                # Landing page; entry point for page navigation
└── Info/ (conditionally rendered based on page state)
    ├── InfoHeader.jsx      # Shared back button for info pages
    ├── About.jsx
    ├── Experience.jsx      # Carousel, 4 positions, left/right arrow nav
    └── Projects.jsx        # Carousel, 2 projects, left/right arrow nav
```

Each component has its own co-located `.css` file. Global styles are in `App.css`.

**Assets** live in `src/assets/`: profile photo, resume PDF, nav arrow icons, and project screenshots in `src/assets/projects/`.

**Deployment:** GitHub Pages at `https://almatb22.github.io`. The `main` branch is production; `dev` is the working branch. `npm run deploy` runs `predeploy` (build) then pushes `dist/` via gh-pages.
