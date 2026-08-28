# AGENTS.md - Portfolio-FullStack

## Build / Lint / Test Commands

```bash
# Development
npm run dev          # Start dev server (alias: npm start)
npm run build        # Type-check + production build (astro check && astro build)
npm run preview      # Preview production build
npm run astro        # Run Astro CLI commands
```

**No test framework configured** - project has no test scripts or testing dependencies.

## Code Style Guidelines

### TypeScript / Types
- Extends `astro/tsconfigs/strict` - strict mode enabled
- JSX: `react-jsx` with `react` as import source
- Prefer `type` over `interface` for simple object types
- Use explicit return types for exported functions
- Import types with `import type { ... }` syntax

### Imports
- External packages first, then internal (`@/` paths not configured)
- React imports: `import { useState } from "react"` (not from "react/hooks")
- Astro components: `.astro` extension required in imports
- CSS: Import in component file (e.g., `import "./Nabvar.css"`)

### Formatting
- 2 spaces indentation (Astro/TypeScript default)
- Single quotes for strings
- Trailing commas in multiline objects/arrays
- Semicolons required
- No explicit Prettier config - follows Astro defaults

### Naming Conventions
- **Components**: PascalCase (`Button.tsx`, `Navbar.tsx`, `Hero.astro`)
- **Hooks**: `use` prefix + PascalCase (`useContact.ts`)
- **Types**: PascalCase (`Proyecto`, `Titles`, `Link`)
- **Props interfaces**: `{Component}Props` suffix (`ButtonProps`)
- **Files**: PascalCase for components, camelCase for hooks/utils
- **CSS classes**: Tailwind utility classes (no custom CSS modules)

### React / Astro Patterns
- Astro components (`.astro`) for static/layout content
- React components (`.tsx`) for interactive islands (`client:load`, etc.)
- Default exports for components
- Fragment shorthand `<>...</>` for multiple root elements
- Inline Tailwind classes (no separate CSS files except `Nabvar.css`)

### Error Handling
- Try/catch in async functions (see `useContact.ts`)
- `.catch()` on promises for API calls
- Loading/error states in hooks (`isLoading`, `error`, `status`)
- No global error boundary

### State Management
- React `useState` for local component state
- Custom hooks for reusable logic (`useContact`)
- No context, Redux, or external state libraries

### Environment / Config
- `astro.config.mjs` for integrations (React, Tailwind)
- `tailwind.config.js` with `tailwindcss-animated` plugin
- TypeScript config extends Astro strict preset
- No `.env` files - EmailJS keys hardcoded in `useContact.ts` (should be moved to env)

### Git / Workflow
- Main branch: `master`
- No pre-commit hooks configured
- No linting/formatting scripts in package.json