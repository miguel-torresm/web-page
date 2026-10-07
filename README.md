# Miguel Ángel Torres Montoya — Personal site

TanStack Start + React + Tailwind, deployed on Cloudflare.

## Structure

```
public/            Files served as-is at the site root
  profile/         CV, certificates, portrait   -> /profile/<file>
  articles/        Papers, articles, slides     -> /articles/<file>
src/
  routes/          Pages (index, research, academic-experience)
  components/      Shared site components
  assets/          Lovable Assets pointers (*.asset.json) for uploaded binaries
  lib/             Error handling helpers
  styles.css       Global styles
docs/              Notes (roadmap)
```

## Adding a PDF

1. Drop the file in `public/profile/` or `public/articles/`.
2. Link it from a page with an absolute path, e.g. `href="/articles/my-paper.pdf"`.

Dev: `bun run dev` · Build: `bun run build`
