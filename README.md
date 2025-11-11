# Food App (React + Vite)

A single‑page food delivery/promo website built with React 18 and Vite. It features a sticky navigation header, responsive pages, reusable cards, carousels for testimonials and brand logos, and custom theming with Bootstrap and bespoke CSS.

## Features
- Client‑side routing for Home, About, Menu, Blog, and Contact pages
- Sticky header, footer with scroll‑to‑top, and consistent layout wrapper
- Reusable components for menu cards and blog entries
- Carousels for testimonials and partner brands (React‑Bootstrap `Carousel`)
- Mock data arrays for menu items and blog posts
- Custom styling with CSS variables, Google Fonts, and Bootstrap 5

## Tech Stack
- React 18, Vite 6
- React Router 7 (`react-router-dom`)
- React‑Bootstrap, Bootstrap 5, Bootstrap Icons, React Icons
- ESLint for React/Refresh/Hooks

## Project Structure (key files)
```
food-app/
├─ index.html
├─ package.json
├─ vite.config.js
├─ src/
│  ├─ main.jsx                # Entry; mounts <App />
│  ├─ App.jsx                 # Routes setup
│  ├─ index.css               # Global variables, fonts, buttons
│  ├─ components/
│  │  ├─ Cards.jsx            # Reusable product card
│  │  ├─ BlogList.jsx         # Reusable blog card
│  │  └─ Layouts/
│  │     ├─ Layout.jsx        # Header + Footer wrapper
│  │     ├─ Header.jsx        # Sticky navbar
│  │     └─ Footer.jsx        # Footer + scroll to top
│  ├─ pages/
│  │  ├─ Home/Section1..7.jsx # Hero, About, Menu, Promo, Shop/Brands, Reviews, CTA
│  │  ├─ Home/Home.jsx        # Composes home sections
│  │  ├─ About/{About,Section11}.jsx
│  │  ├─ Menu/{Menu,Section12}.jsx
│  │  ├─ Blog/{Blogs,Section13}.jsx
│  │  └─ Contact/{Contact,Section14}.jsx
│  ├─ styles/
│  │  ├─ HeaderStyle.css
│  │  ├─ HomeStyle.css
│  │  └─ OtherStyle.css       # About, Menu, Blog, Contact
│  └─ assets/                 # Images for hero/menu/brands/etc.
└─ public/
   ├─ favicon.png
   └─ vite.svg
```

## Routing
- `/` → `Home`
- `/about` → `About`
- `/menu` → `Menu`
- `/blog` → `Blogs`
- `/contact` → `Contact`

Configured in `src/App.jsx` using `BrowserRouter`, `Routes`, and `Route`.

## Styling
- Global CSS variables, fonts, base typography, and buttons are defined in `src/index.css`.
- Header styles and sticky behavior in `src/styles/HeaderStyle.css`.
- Home‑specific sections (hero, menus, promotions, brand carousel, testimonials, contact CTA) in `src/styles/HomeStyle.css`.
- Page banners and content for About, Menu, Blog, and Contact in `src/styles/OtherStyle.css`.

## Available Scripts
- `npm run dev` → Start Vite dev server
- `npm run build` → Build for production
- `npm run preview` → Preview production build locally
- `npm run lint` → Run ESLint

## Getting Started
1. Ensure Node.js (LTS recommended) and npm are installed.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the dev server:
   ```bash
   npm run dev
   ```
4. Open the printed local URL in your browser.

To create a production build:
```bash
npm run build && npm run preview
```

## Components & Data Highlights
- `Cards` displays a menu item with rating stars, price, and an Add‑to‑Cart link.
- `BlogList` displays a blog card that links to an external URL.
- Rating stars are computed from numeric ratings to render full/half/empty icons.
- Mock data arrays are embedded in section files for demonstration.

## Notes / Potential Improvements
- Replace hardcoded mock data with API or CMS data.
- Standardize JSX attributes: use `className` instead of `class` and ensure `Link` uses `to`.
- External links in blog cards can use `<a href target="_blank" rel="noopener">` instead of router `Link`.
- Remove duplicate import of `BrowserRouter` aliasing in `src/App.jsx`.
- Consider extracting repeated mock data and rating helpers into shared modules.

---
Generated for the Food App to provide a quick overview, setup steps, and development notes.
