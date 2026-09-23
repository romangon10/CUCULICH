# CUCULICH

![React](https://img.shields.io/badge/React-18-20232A?logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-6-646CFF?logo=vite&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-0055FF?logo=framer&logoColor=white)
![Build](https://github.com/romangon10/CUCULICH/actions/workflows/quality.yml/badge.svg)

A premium fashion experience with a **black-and-gold visual identity**, editorial composition and fluid interactions. Built with React and Vite as a portfolio-ready frontend.

## Highlights

- Responsive hero, collection, manifesto and atelier sections.
- Interactive product collection with local selection drawer.
- Dedicated presentation for a reversible coat and its two visual identities.
- Motion and transitions powered by Framer Motion.
- Component-based React structure with centralized visual tokens.
- Automated production-build verification through GitHub Actions.

## Technology

| Area | Tools |
| --- | --- |
| Interface | React 18, JSX |
| Build | Vite 6 |
| Motion | Framer Motion |
| Icons | Lucide React |
| Styling | CSS, responsive layout, design tokens |
| Quality | Automated production build on every push and pull request |

## Run locally

Requires **Node.js 22 or later**.

```sh
git clone https://github.com/romangon10/CUCULICH.git
cd CUCULICH
npm install
npm run dev
```

Open the local URL shown by Vite.

## Verify a production build

```sh
npm run build
npm run preview
```

The optimized output is generated in `dist/`. GitHub Actions runs the build automatically on changes to `main` and on pull requests.

## Project structure

| Path | Responsibility |
| --- | --- |
| `src/pages/Home.jsx` | Main page composition and selection state |
| `src/components/Collection.jsx` | Product catalogue and interactions |
| `src/components/ReversibleCoat.jsx` | Reversible garment presentation |
| `src/components/SelectionDrawer.jsx` | Local product selection experience |
| `src/components/Hero.jsx` | Brand introduction |
| `src/components/Manifesto.jsx` | Editorial brand narrative |
| `src/theme.css` | Design tokens and visual system |
| `src/index.css` | Layout, responsive behavior and component styling |

## Scope

This repository is a frontend portfolio project. The selection drawer is local and does not process payments, create real orders or reserve stock. Product information and contact details must be validated before commercial use.

Images currently depend on external hosting. Production use should migrate authorized assets to controlled storage and add a real commerce backend, authentication, inventory and payment integration.

## Roadmap

- Automated interaction and accessibility tests
- Owned image hosting and optimized responsive assets
- Product detail routes
- Real inventory and checkout integration
- Production deployment with a custom domain

## Author

Created by [Roman Nicolas Gonzalez](https://github.com/romangon10) · [LinkedIn](https://www.linkedin.com/in/romannicolasgonzalez/)
