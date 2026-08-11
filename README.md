# Bryan's Personal Website

A professional personal website built with React, showcasing experience, education, skills, and professional summary. This project is deployed as an [Azure Static Web App](https://docs.microsoft.com/azure/static-web-apps/overview).

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## A Note on Infrastructure Choices

Infrastructure and architecture decisions in this repo - and in the linked "Demo Hosting
Platform" and "Local Data Platform" projects - prioritize low cost and low operational overhead:
a single Azure Static Web App, one shared Azure Container App fronting multiple demos, Docker
Compose instead of managed services, and so on. These choices fit a personal-project/demo
context, not an enterprise one. In a company environment, factors like scale, compliance,
redundancy, and team ownership would lead to different (often more complex) decisions, so nothing
here should be read as indicative of how infrastructure would be designed in an enterprise
setting.

## Available Scripts

In the project directory, you can run:

### `npm start`
Runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm test`
Launches the test runner in interactive watch mode.

### `npm run test:coverage`
Runs all tests and generates a comprehensive code coverage report. This will:
- Run all test suites
- Generate coverage statistics for statements, branches, functions, and lines
- Create an HTML coverage report in the `coverage/` directory
- Display coverage results in the terminal

### `npm run test:coverage:watch`
Runs tests with coverage in watch mode, updating coverage as you make changes.

### `npm run build`
Builds the app for production to the `build` folder.

## Resume PDF

The "Download CV" button links to `/resume.pdf`. The source of truth is the LaTeX file at
[`resume/resume.tex`](resume/resume.tex); `public/resume.pdf` is a committed, checked-in copy so
`npm start` always has something real to serve locally.

- `.github/workflows/azure-static-web-apps.yml` recompiles `resume/resume.tex` with `latexmk` on
  every CI run and overwrites `public/resume.pdf` before `npm run build`, so production always ships
  the PDF that matches the current `.tex` source - the committed copy is just a local-dev
  convenience, not the canonical output.
- To update the CV content: edit `resume/resume.tex`, then recompile and commit the refreshed PDF
  (`latexmk -pdf -output-directory=public resume/resume.tex`, requires a local TeX Live install) so
  local dev stays in sync. If you don't have LaTeX installed, it's fine to skip this - CI will
  regenerate the correct PDF on the next push.

## Testing

This project includes comprehensive test coverage for all major components:

- **Education.test.js** - Tests for education entries, module listings, and institutional information
- **Experience.test.js** - Tests for work experience, job descriptions, and professional history
- **Footer.test.js** - Tests for footer component, copyright information, and dynamic year display
- **Summary.test.js** - Tests for professional summary content and key skills
- **Header.test.js** - Tests for navigation, dark mode toggle, and active page highlighting
- **Skills.test.js** - Tests for skills categories and progress indicators
- **Projects.test.js** - Tests for project case studies, tech stack tags, and repo/demo links

### Coverage Thresholds

The project maintains high code quality with coverage thresholds set at 80% for:
- Statement coverage
- Branch coverage  
- Function coverage
- Line coverage

CI fails the build if any metric drops below the 80% threshold. Run `npm run test:coverage` for the
current figures.
