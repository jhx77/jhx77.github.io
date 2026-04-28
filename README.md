# Jiang Hongxin Personal Site

This repository powers [jhx77.github.io](https://jhx77.github.io/), a personal brand website rebuilt from the previous academic template into a Vite, React, TypeScript and Tailwind CSS application.

## What changed

The site is now structured around four main routes: home, project narratives, Markdown blog and contact. The project page is written as interview-grade engineering storytelling, with FastKB and the smart life platform described through background, core constraints, architecture decisions and system-level trade-offs.

## Tech stack

- Vite
- React
- TypeScript
- Tailwind CSS
- React Router HashRouter for GitHub Pages stability
- Markdown blog posts imported through Vite raw content modules
- GitHub Actions deployment to GitHub Pages

## Local development

```bash
npm install
npm run dev
```

## Verification

```bash
npm test
npm run build
```

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which installs dependencies, builds the static site and deploys `dist` to GitHub Pages.
