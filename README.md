# Jiang Hongxin Blog

This repository powers [jhx77.github.io](https://jhx77.github.io/), a simple personal homepage and blog built with Vite, React, TypeScript and Tailwind CSS.

## Structure

- Home
- About
- Projects
- Blog
- Contact

## Tech stack

- Vite
- React
- TypeScript
- Tailwind CSS
- React Router HashRouter for GitHub Pages
- Markdown posts imported through Vite raw content modules
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
