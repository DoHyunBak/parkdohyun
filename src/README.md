# src Guide

## Entry
- `main.jsx` -> `app/App.jsx`

## Portfolio Composition
- `pages/portfolio/ui/PortfolioPage.jsx` composes all sections.
- Section widgets are in `widgets/portfolio-sections/ui`.
- Domain data is in `entities/portfolio/model/portfolioData.js`.

## Quick Add Rule
- New section UI: `widgets/portfolio-sections/ui/NewSection.jsx`
- New domain data: `entities/portfolio/model/*.js`
- New shared component/hook: `shared/ui` or `shared/hooks`
