# Miguel Ángel Torres Montoya — Personal site

TanStack Start (SPA mode) + React + Tailwind, deployed to GitHub Pages by `.github/workflows/deploy.yml` on every push to `main`.
Site: https://miguel-torresm.github.io/web-page/

## Structure

```
public/            Files served as-is at the site root
  profile/         cv.pdf, miguel-portrait.jpeg, iem01x-certificate.png
  articles/        Papers, articles, slides
src/
  routes/          Pages (index, research, academic-experience)
  components/      Shared site components
  lib/             Error handling helpers
  styles.css       Global styles
docs/              Notes (roadmap)
```

## Adding a PDF

1. Drop the file in `public/profile/` or `public/articles/`.
2. Link it with `href={asset("articles/my-paper.pdf")}` (`asset` is exported from `@/components/site`).

Dev: `bun run dev` · Build: `bun run build`
