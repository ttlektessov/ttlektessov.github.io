# Tim's Portfolio

Personal portfolio site built with **React 19**, **Vite 6**, **Tailwind CSS 4**, and **i18next** (English, Kazakh, Korean, Russian). Smooth scrolling uses [Lenis](https://lenis.darkroom.engineering/).

## Table of contents

- [Installation](#installation)
- [Usage](#usage)
- [Deployment](#deployment)
- [Project structure](#project-structure)
- [Dependencies](#dependencies)
- [Scripts](#scripts)
- [License](#license)

## Installation

Clone the repository and install dependencies with **npm** (this matches CI and `package-lock.json`):

```sh
git clone https://github.com/ttlektessov/ttlektessov.github.io.git
cd ttlektessov.github.io
npm install
```

## Usage

Start the dev server:

```sh
npm run dev
```

Vite prints the local URL (by default [http://localhost:5173](http://localhost:5173)). Production builds use `base: "/tlektessov.github.io/"` in `vite.config.js`, so asset URLs match that path on GitHub Pages; `npm run preview` serves `dist/` with the same base. If your Pages URL path ever changes, update `base` and the `homepage` field in `package.json` together.

Other commands:

```sh
npm run build    # production build → dist/
npm run preview  # preview dist/
npm run lint     # ESLint
```

## Deployment

- **GitHub Actions**: pushes to `main` run `.github/workflows/static.yml` (`npm ci`, `npm run build`, deploy `dist/` to GitHub Pages).
- **Manual deploy** (optional): `npm run deploy` uses [gh-pages](https://github.com/tschaub/gh-pages) to publish `dist/`; `predeploy` runs `build` first.

Live site (`package.json` `homepage`): [https://ttlektessov.github.io/tlektessov.github.io](https://ttlektessov.github.io/tlektessov.github.io)

## Project structure

```text
ttlektessov.github.io
├── public
│   └── locales              # i18next JSON (en, kz, kr, ru)
├── src
│   ├── assets               # images, resume PDF, etc.
│   ├── components
│   │   ├── About
│   │   ├── Contact
│   │   ├── context          # DarkModeContext
│   │   ├── Experience       # cards, summary, containers
│   │   ├── Footer
│   │   ├── General          # Button, Card, Container, Drawer, …
│   │   ├── Header           # Logo, menus, theme/CV/locale controls
│   │   ├── Hero
│   │   ├── Hooks            # use-scroll, use-windows-size, useResponsive, useDateFormatter
│   │   ├── Projects
│   │   └── Skills
│   ├── i18n                 # config, LocaleSwitcher
│   ├── assets.jsx           # centralized image/document imports
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .github/workflows        # Pages deploy
├── eslint.config.js
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Dependencies

Runtime highlights:

- [React](https://react.dev/) & [React DOM](https://react.dev/)
- [Vite](https://vitejs.dev/) & [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react)
- [Tailwind CSS](https://tailwindcss.com/) & [@tailwindcss/vite](https://tailwindcss.com/docs/installation/using-vite)
- [i18next](https://www.i18next.com/), [react-i18next](https://react.i18next.com/), [i18next-http-backend](https://github.com/i18next/i18next-http-backend)
- [Lenis](https://lenis.darkroom.engineering/) (`lenis/react`)
- [Lucide React](https://lucide.dev/) (icons)
- [@radix-ui/react-dialog](https://www.radix-ui.com/primitives/docs/components/dialog) (accessible dialog primitives)

## Scripts

| Script            | Description                          |
| ----------------- | ------------------------------------ |
| `npm run dev`     | Vite dev server                      |
| `npm run build`   | Production build to `dist/`        |
| `npm run preview` | Local preview of `dist/`           |
| `npm run lint`    | ESLint                               |
| `npm run deploy`  | Build (via `predeploy`) + gh-pages   |

## License

This project is licensed under the MIT License.
