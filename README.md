# Playwright Automation Demo

This project demonstrates a comprehensive Playwright automation setup with both UI and API testing capabilities.

## Project Structure

```
├── src/
│   ├── ui/           # UI test files
│   └── api/          # API test files
├── playwright.ui.config.ts    # UI test configuration
├── playwright.api.config.ts   # API test configuration
├── package.json
├── tsconfig.json
└── .env              # Environment variables
```

## Setup

1. Install dependencies:
```bash
npm install
```

2. Install Playwright browsers:
```bash
npx playwright install
```

## Running Tests

- Run all tests:
```bash
npm test
```

- Run only UI tests:
```bash
npm run test:ui
```

- Run only API tests:
```bash
npm run test:api
```

- View test report:
```bash
npm run report
```

## Environment Variables

Create a `.env` file in the root directory with the following variables:
- `UI_BASE_URL`: Base URL for UI tests
- `API_BASE_URL`: Base URL for API tests

## Features

- Separate configurations for UI and API testing
- TypeScript support
- HTML test reports
- Environment variable configuration
- Cross-browser testing support
- Example tests for both UI and API scenarios 