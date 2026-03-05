# React Architecture Guide

## Layer Rules
- `app`: app bootstrap, global styles, providers.
- `pages`: route-level composition only.
- `widgets`: section-level UI composition.
- `features`: user actions with business behavior.
- `entities`: domain model, DTO, entity UI.
- `shared`: reusable UI, hooks, utils, constants.

## Current Structure
```text
src
├─ app
│  ├─ App.jsx
│  ├─ providers
│  ├─ routes
│  └─ styles
├─ pages
│  └─ portfolio
│     └─ ui
├─ widgets
│  ├─ navigation
│  │  └─ ui
│  ├─ portfolio-sections
│  │  └─ ui
│  └─ footer
│     └─ ui
├─ entities
│  └─ portfolio
│     └─ model
└─ shared
   ├─ api
   ├─ config
   ├─ constants
   ├─ hooks
   ├─ lib
   ├─ model
   ├─ types
   └─ ui
```

## Conventions
- Data/DTO goes to `entities/*/model`.
- `pages` should not contain low-level markup; compose `widgets`.
- Reusable pieces (header/title/badge/hooks) go to `shared`.
- Keep one component per file.
- Use alias import: `@/...`.

## Next Refactor Rules For Incoming Code
- Split giant component by section into `widgets/portfolio-sections/ui/*Section.jsx`.
- Move constants, arrays, text blocks to `entities/portfolio/model`.
- Move repeated UI blocks into `shared/ui`.
- Keep side effects in hooks (`shared/hooks`).
