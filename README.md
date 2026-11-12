# JK-Sah.github.io

Personal academic website of **J.K. Sah**, mechanical engineering researcher.

Built with plain HTML, CSS, and vanilla JavaScript, with no build step or dependencies. Deploys directly to **GitHub Pages**.

## Project structure

```
JK-Sah.github.io/
├── index.html        # All page content (single page, anchored sections)
├── styles.css        # Design tokens, light/dark theme, layout & components
├── script.js         # Theme toggle, mobile nav, scroll reveal, active-link spy
├── assets/
│   ├── profile.jpg   # ← add your photo here (4:5 portrait works best)
│   └── cv.pdf        # CV (linked from the nav "CV" button), built from cv/cv.tex
├── cv/
│   └── cv.tex        # LaTeX source of the CV
└── README.md
```

## Updating the CV

Edit `cv/cv.tex`, then rebuild and copy the PDF into `assets/`:

```bash
cd cv && latexmk -pdf -outdir=build cv.tex && cp build/cv.pdf ../assets/cv.pdf
```

## Editing content

Everything is in `index.html`, split into clearly labeled sections:
`HERO`, `ABOUT`, `RESEARCH`, `PROJECTS`, `PUBLICATIONS`, `NEWS`, `CONTACT`.
Search for the section name in the comments and edit the text directly.

- **Add your photo:** drop `profile.jpg` into `assets/`.
- **Add your CV:** drop `cv.pdf` into `assets/`.
- **Fill in social links:** in the hero, find the links marked `data-placeholder`
  (Google Scholar, LinkedIn, ORCID) and replace `href="#"` with your real URLs.
- **Change the accent color:** edit `--accent` near the top of `styles.css`.

## Previewing locally

Just open `index.html` in a browser, or run a tiny local server:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deploying to GitHub Pages

Because the repo is named `JK-Sah.github.io`, GitHub serves it automatically at
**https://jk-sah.github.io** once pushed. In the repo: **Settings → Pages →
Build and deployment → Source: Deploy from a branch → `main` / `root`**.
