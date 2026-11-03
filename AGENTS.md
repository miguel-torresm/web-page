# Project rules
- The site is Jekyll on GitHub Pages under `/web-page/`, deployed by `.github/workflows/deploy.yml`. Content lives in `_data/*.yml`; link local files through the `links` include or `relative_url`, never a hard-coded `/` path.
- CV and portrait live in `profile/`; papers, articles and slides in `articles/`.
- Do not link the user's GitHub profile on the site.
- Do not publish documents that contain ID numbers (e.g. the Universidad del Rosario certificate).
