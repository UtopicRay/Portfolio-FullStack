# Portfolio FullStack

Personal portfolio website built with Astro, React, and Tailwind CSS. Showcases projects, skills, experience, and provides a contact form.

## 🎯 Project Intention

This is a **full-stack developer portfolio** designed to:
- Display professional projects with live demos and GitHub links
- Highlight technical skills and technologies used
- Present work experience and education
- Enable visitors to contact via EmailJS integration
- Demonstrate modern web development practices with Astro Islands architecture

## 📁 Folder Structure

```
/
├── public/
│   ├── favicon.svg
│   └── book-2.svg
├── src/
│   ├── assets/
│   │   ├── icons/          # Technology icon components (Astro/React/Vue/etc.)
│   │   └── img/            # Project screenshots and images
│   ├── components/
│   │   ├── Navbar/         # Navigation with mobile hamburger menu
│   │   │   ├── Navbar.tsx
│   │   │   └── Nabvar.css
│   │   ├── HeroSection/    # Landing section components
│   │   │   ├── Hero.astro
│   │   │   ├── PersonalInfo.tsx
│   │   │   └── Habilidades.astro
│   │   ├── Button.tsx      # Reusable button component
│   │   ├── Card.tsx        # Project card display
│   │   ├── Contacto.tsx    # Contact form with EmailJS
│   │   ├── Datos.tsx       # Site data (sections, navigation)
│   │   ├── Experiencia.astro
│   │   ├── Footer.astro
│   │   ├── Info.astro
│   │   ├── Proyectos.tsx   # Projects grid
│   │   ├── Titulo.astro
│   │   └── Titulos.astro
│   ├── hooks/
│   │   └── useContact.ts   # EmailJS contact form hook
│   ├── layouts/
│   │   └── Layout.astro    # Base layout with SEO meta
│   ├── pages/
│   │   └── index.astro     # Main page (single-page layout)
│   ├── type/
│   │   └── types.ts        # TypeScript type definitions
│   └── env.d.ts            # Astro type declarations
├── astro.config.mjs        # Astro configuration (React, Tailwind)
├── tailwind.config.js      # Tailwind with animated plugin
├── tsconfig.json           # TypeScript strict config
└── package.json
```

## 🛠️ Technologies

### Core Framework
- **Astro 5** - Static site generator with Islands architecture
- **React 18** - Interactive components (client-side hydration)
- **TypeScript** - Strict type checking (extends `astro/tsconfigs/strict`)

### Styling & UI
- **Tailwind CSS 3** - Utility-first styling
- **tailwindcss-animated** - Animation utilities
- **Motion (Framer Motion)** - Complex animations

### Integrations & Services
- **@astrojs/react** - React integration for Astro
- **@astrojs/tailwind** - Tailwind integration
- **@astrojs/check** - TypeScript checking during build
- **@emailjs/browser** - Client-side email sending
- **react-icons** - Icon library (Font Awesome, Material, etc.)
- **react-type-animation** - Typing animation effects

### Development
- **Node.js** (ESM modules)
- **npm** - Package manager

## 🚀 Commands

| Command | Action |
|---------|--------|
| `npm install` | Install dependencies |
| `npm run dev` | Start dev server at `localhost:4321` |
| `npm run build` | Type-check + production build to `./dist/` |
| `npm run preview` | Preview production build locally |
| `npm run astro` | Run Astro CLI commands |

## 📦 Deployment

Build output in `./dist/` can be deployed to any static hosting:
- Vercel, Netlify, Cloudflare Pages, GitHub Pages, etc.

## 🔧 Configuration Notes

- **EmailJS credentials** are currently hardcoded in `src/hooks/useContact.ts` — should be moved to environment variables
- **No test framework** configured
- **No linting/formatting** scripts (follows Astro defaults)
- **Main branch**: `master`