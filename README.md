# Portfolio — Hiya Arora

Personal portfolio site. Single-page, dark, built from scratch.

**Live:** _not deployed yet_

## Stack

- Vite + React 19 + TypeScript
- Tailwind CSS v4 (design tokens in `src/index.css` under `@theme`)
- No UI library, no component kit — every element is hand-written

## Editing content

All copy, projects, skills, and links live in **`src/data/content.ts`**.
Edit that file; the components read from it and never hardcode content.

To re-skin the entire site, change `--color-accent` in `src/index.css`.

## Running locally

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build to dist/
```

## Structure

```
src/
  data/content.ts      all site content
  components/
    Nav.tsx            sticky numbered nav
    Hero.tsx           hero + typewriter role rotation
    Sections.tsx       about, resume, education, skills, experience, open source, contact, footer
    Projects.tsx       project grid + detail modal
    ui.tsx             shared primitives (Reveal, Section, Eyebrow, Chip, Dot)
  index.css            design tokens + animations
```
