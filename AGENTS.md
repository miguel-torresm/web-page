# Project rules
- The site is a static SPA deployed to GitHub Pages (`.github/workflows/deploy.yml`) under `/web-page/`. Reference files with `asset("profile/<file>")` from `@/components/site`, never a hard-coded `/` path.
- CV, portrait and certificates live in `public/profile/` (`cv.pdf`, `miguel-portrait.jpeg`); papers, articles and slides in `public/articles/`.
