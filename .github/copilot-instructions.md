# GitHub Copilot / Agent Instructions for PersonalWebsite

## Purpose
-------
This file gives quick, practical guidance for AI assistants (Copilot/Chat agents) working in this repo. Keep suggestions minimal, accurate, and aligned with the project's conventions.

## Quick context
- Stack: Create React App (React, plain CSS)
- Deployment: Azure Static Web Apps (see `public/staticwebapp.config.json` and `.github/workflows/azure-static-web-apps.yml`)
- Source: `src/` ; built output: `build/`
- Components: `src/components/`
- Tests: Jest + React Testing Library (see `src/*.test.js`)

## Common commands
- Install: `npm install`
- Dev: `npm start` (localhost:3000)
- Tests: `npm test`
- Coverage: `npm run test:coverage`
- Build: `npm run build`

## What to do when editing files
- Preserve existing API / component props unless the change requires a coordinated update across files.
- Run unit tests (`npm test`) after changes that touch component logic.
- Run coverage (`npm run test:coverage`) for multi-file refactors.
- Keep CSS changes scoped to existing stylesheets unless adding a new global token.

## Where to look
- Entry point: `src/index.js`
- App wrapper: `src/App.js` and `src/App.css`
- Components: `src/components/` (Header, Footer, Summary, Skills, Experience, Education, DownloadCVButton)
- Static assets and built output: `public/` and `build/`
- CI: `.github/workflows/azure-static-web-apps.yml`

## Agent best practices
- Be conservative: prefer small, test-covered changes.
- When modifying a component API, update tests in the same PR.
- For accessibility, prefer semantic HTML and aria attributes for interactive elements (buttons, links).
- When suggesting dependency upgrades, include rationale and a short test plan.

## Contact / Review
If unsure about a change, open a draft PR and request a human review. Prefer code-review before wide-reaching refactors.