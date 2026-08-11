---
name: verify
description: Project-specific verification steps for this personal website — exercise the running app and the coverage gate before calling a change done.
---

# Verify

This is a small CRA single-page app. Don't rely on tests alone — actually run it.

## Steps

1. **Run tests with coverage**: `npm run test:coverage`. Confirm it passes and stays at/above the 80% branches/functions/lines/statements thresholds (this is what CI gates on).
2. **Start the dev server**: `npm start` (http://localhost:3000). If it's already running, reuse it.
3. **Hit every route** and confirm each renders without console errors: `/`, `/skills`, `/experience`, `/education`, `/projects`.
4. **Check the dark-mode toggle** in the header actually flips the theme and persists across a reload (it's backed by `localStorage`).
5. **Check the "Download CV" link** resolves to `/resume.pdf` and actually downloads/opens a PDF (not a 404) — remember the committed `public/resume.pdf` is a local-dev convenience; if you edited `resume/resume.tex`, the local copy only reflects your change if you recompiled it, otherwise CI will regenerate the correct one on push.
6. If your change touched a specific component/route, focus manual checks there first, then do a quick pass over the rest to catch regressions.

## Scope note

If the change is docs-only, or touches only `.github/`, `.claude/`, or `README.md` with no `src/` changes, running the app isn't necessary — running `npm run test:coverage` once to confirm nothing broke is enough.
