---
name: new-section
description: Scaffold a new routed section/component for this personal website (component + colocated test + route registration), matching existing conventions.
---

# New section

Use this when adding a new routed page/section to the site (e.g. a "Publications" or "Talks" page), following the pattern used by the existing components (`Skills.js` is a good reference).

## Steps

1. **Component** — create `src/components/Name.js`:
   - Default-exported arrow function component.
   - Call `usePageTitle('Title')` (from `../hooks/usePageTitle`) as the first line of the body.
   - Wrap content in `<section className="name-section" aria-label="Name">` with an `<h2>` heading.
   - Reuse existing shared class names where the content fits the pattern (`card`, `card-container`, `card-title`, `card-list`, `card-list-item`) instead of inventing new ones. Only add new CSS if the content genuinely doesn't fit an existing shape.
   - Keep data (e.g. lists of items) as a plain exported const above the component, like `skillGroups` in `Skills.js`, if the section is data-driven.

2. **Test** — create `src/components/Name.test.js` colocated next to it:
   - Use `render`/`screen` from `@testing-library/react` (add `userEvent` only if the component has interactive elements).
   - Assert on visible content (headings, list items, computed values) the way `Skills.test.js` does — not on implementation details.
   - This repo enforces an 80% coverage threshold gate (`npm run test:coverage`) — make sure the new component is meaningfully covered, not just smoke-tested.

3. **Routing** — register the page in `src/App.js`:
   - Import the component.
   - Add `<Route path="/name" element={<Name />} />` inside `<Routes>`.

4. **Navigation** — if the section should be reachable from the nav, add `{ path: '/name', label: 'Label' }` to the `NAV_ITEMS` array in `src/components/Header.js` (nav links are data-driven, not individually hand-written).

5. **CSS** — only add a new co-located `.css` file if the section needs styles beyond the shared card/list classes; keep it plain CSS, no framework or CSS-in-JS.

## Verify

- `npm run test:coverage` passes at the 80% thresholds.
- `npm start` and visit the new route manually to confirm it renders and the nav link (if added) works.
