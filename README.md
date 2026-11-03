# Miguel Angel Torres-Montoya — personal site

Jekyll site published with GitHub Pages: https://miguel-torresm.github.io/web-page/
Built and deployed by `.github/workflows/deploy.yml` on every push to `main`.

## Where things live

```
index.html           Page layout (single page with anchors)
_data/               Content: news, publications, projects, experience, education
_layouts/, _includes/  Templates
assets/css/main.css  Colors (Dracula dark, Tomorrow light) and styles
profile/             cv.pdf, miguel-portrait.jpeg
articles/            Papers, slides and other PDFs you link to
```

## Common edits

- **New paper / news / course:** add an entry to the matching file in `_data/`.
- **New PDF:** drop it in `articles/` and link it as `/articles/<file>.pdf` in a `links:` list.
- **Change colors:** edit the variables at the top of `assets/css/main.css`.
- **Update the CV:** replace `profile/cv.pdf`.

## Local preview

```
brew install ruby        # once
bundle install           # once
bundle exec jekyll serve # http://127.0.0.1:4000/web-page/
```
