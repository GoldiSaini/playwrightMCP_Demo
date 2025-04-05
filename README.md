# 🎭 Playwright Test Automation Framework

> 🚀 A powerful, data-driven test automation framework built with Playwright and TypeScript, leveraging @executeautomation/playwright-mcp-server for enhanced test recording and playback capabilities. Features Page Object Model design pattern for scalable and maintainable automated testing.

[![Playwright](https://img.shields.io/badge/Playwright-45ba4b.svg?style=for-the-badge&logo=Playwright&logoColor=white)](https://playwright.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6.svg?style=for-the-badge&logo=TypeScript&logoColor=white)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-339933.svg?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![MCP Server](https://img.shields.io/badge/MCP_Server-FF3E00.svg?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSJ3aGl0ZSIgZD0iTTEyIDJDNi40NyAyIDIgNi40NyAyIDEyczQuNDcgMTAgMTAgMTAgMTAtNC40NyAxMC0xMFMxNy41MyAyIDEyIDJ6bTAgMThjLTQuNDEgMC04LTMuNTktOC04czMuNTktOCA4LTggOCAzLjU5IDggOC0zLjU5IDgtOCA4eiIvPjwvc3ZnPg==)](https://github.com/executeautomation/playwright-mcp)

## ✨ Highlights

- 🏗️ **Page Object Model** - Clean and maintainable test architecture
- 📊 **Data-Driven Testing** - Easily scale tests with external test data
- 🔧 **TypeScript Support** - Robust type checking and better IDE integration
- ♻️ **Reusable Components** - Modular design for maximum code reuse
- 🎯 **Easy Maintenance** - Centralized locators and data management
- 📈 **Scalable Design** - Effortlessly add new test scenarios
- 🎥 **MCP Server Integration** - Enhanced test recording and playback functionality

## 🌟 Key Features

- Structured and organized test architecture
- Separation of test data from test logic
- Powerful helper methods for common operations
- Easy-to-follow page object pattern implementation
- Comprehensive test data management
- Ready-to-use registration flow example
- Test recording and playback using MCP Server
- Automated test script generation

## Framework Structure

```
tests/
├── data/                    # Test Data Layer
│   ├── interfaces/         
│   │   └── TestData.ts     # Data type definitions
│   ├── TestDataHelper.ts   # Helper class for data management
│   └── testData.ts         # Test scenarios data
├── pages/                   # Page Objects
│   ├── BasePage.ts         # Base page with common functionality
│   ├── LoginPage.ts        # Login page object
│   └── RegistrationPage.ts # Registration page object
└── specs/                   # Test Specifications
    └── registration.spec.ts # Test cases
```

## Features

- **Page Object Model**: Separates test logic from page interactions
- **Data-Driven Testing**: Test data is separated from test logic
- **TypeScript**: Strong typing and better IDE support
- **Reusable Components**: Common functionality in base classes
- **Easy Maintenance**: Centralized locators and data management
- **Scalable**: Easy to add new test scenarios and page objects

## Test Data Structure

The framework uses a structured approach to manage test data:

```typescript
interface TestScenario {
    name: string;
    login: LoginData;
    registration: RegistrationData;
}
```

Current test scenarios:
1. Valid Registration Flow (Male user)
2. Female User Registration

## Setup

1. Clone the repository:
```bash
git clone <repository-url>
cd playwrightMCP_Demo
```

2. Install dependencies:
```bash
npm install
```

3. Install Playwright browsers:
```bash
npx playwright install
```

## Running Tests

Run all tests:
```bash
npx playwright test
```

Run specific test file:
```bash
npx playwright test tests/specs/registration.spec.ts
```

Run tests in headed mode:
```bash
npx playwright test --headed
```

## Adding New Test Scenarios

1. Add new test data in `tests/data/testData.ts`:
```typescript
{
    name: 'Your Scenario Name',
    login: {
        email: 'your.email@test.com'
    },
    registration: {
        firstName: 'First',
        lastName: 'Last',
        address: 'Address',
        email: 'email@test.com',
        phone: '1234567890',
        gender: 'Male' | 'Female',
        country: 'Country Name'
    }
}
```

2. The test will automatically execute for new scenarios.

## Framework Components

### Page Objects

- **BasePage**: Contains common methods and utilities
- **LoginPage**: Handles login functionality
- **RegistrationPage**: Manages registration form interactions

### Data Management

- **TestData.ts**: Contains test scenarios
- **TestDataHelper**: Provides methods to access and manage test data
- **Interfaces**: Defines structure for test data

## Best Practices

1. Keep page objects focused on page-specific functionality
2. Maintain test data separately from test logic
3. Use meaningful scenario names
4. Follow TypeScript naming conventions
5. Keep tests independent and atomic

## Contributing

1. Create a new branch for your feature
2. Add/Update tests and page objects
3. Update test data if needed
4. Submit a pull request

## Dependencies

- Playwright
- TypeScript
- Node.js
- @executeautomation/playwright-mcp-server - For enhanced test recording and playback
- @playwright/test - Core testing framework

## Support

For any questions or issues, please create a new issue in the repository. 