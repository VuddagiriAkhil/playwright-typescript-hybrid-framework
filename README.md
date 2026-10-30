# Playwright TypeScript Hybrid Automation Framework

A scalable and reusable UI automation framework developed using **Playwright, TypeScript, and the Page Object Model (POM)**. This framework demonstrates automated testing of the SauceDemo application with reusable fixtures, JSON-based data-driven testing, environment configuration, and cross-browser execution.

## Project Overview

This framework is designed to maintain readable, reusable, and maintainable automation scripts while following industry-standard automation practices.

### Key Features

- Playwright with TypeScript
- Page Object Model (POM)
- Reusable custom fixtures
- JSON-based data-driven testing
- TypeScript interfaces
- Environment configuration using dotenv
- Cross-browser testing
- Login, product, cart, and checkout test coverage
- Playwright HTML reporting
- GitHub Actions workflow

## Technology Stack

| Technology     | Purpose                   |
| -------------- | ------------------------- |
| Playwright     | Browser automation        |
| TypeScript     | Programming language      |
| Node.js        | Runtime environment       |
| npm            | Package management        |
| JSON           | Test data management      |
| dotenv         | Environment configuration |
| Git & GitHub   | Version control           |
| GitHub Actions | CI/CD workflow            |

## Framework Architecture

```text
PlaywrightAutomation/
│
├── .github/
│   └── workflows/
│       └── playwright.yml
│
├── config/
│   └── env.ts
│
├── fixtures/
│   └── baseFixture.ts
│
├── pages/
│   ├── LoginPage.ts
│   ├── homepage.ts
│   ├── CartPage.ts
│   └── CheckoutPage.ts
│
├── test-data/
│   ├── loginData.json
│   └── loginTypes.ts
│
├── tests/
│   └── ui/
│       ├── login.spec.ts
│       ├── home.spec.ts
│       ├── cart.spec.ts
│       └── checkout.spec.ts
│
├── utils/
│
├── .env
├── .gitignore
├── package.json
└── playwright.config.ts
```

## Application Under Test

**SauceDemo:** [https://www.saucedemo.com/](https://www.saucedemo.com/)

The framework uses SauceDemo as the application under test.

## Installation and Setup

### Prerequisites

- Node.js
- npm
- Visual Studio Code
- Git

### 1. Clone the repository

```bash
git clone https://github.com/VuddagiriAkhil/playwright-typescript-hybrid-framework.git
```

### 2. Navigate to the project

```bash
cd playwright-typescript-hybrid-framework
```

### 3. Install dependencies

```bash
npm install
```

### 4. Install Playwright browsers

```bash
npx playwright install
```

### 5. Configure environment variables

Create a `.env` file in the project root:

```env
BASE_URL=https://www.saucedemo.com/
SAUCE_USERNAME=standard_user
PASSWORD=secret_sauce
```

Do not commit `.env` or expose credentials in public repositories.

## Test Execution Commands

### Run all tests

```bash
npx playwright test
```

### Run tests with browser visible

```bash
npx playwright test --headed
```

### Run a specific test file

```bash
npx playwright test tests/ui/login.spec.ts
```

### Run tests in Chromium

```bash
npx playwright test --project=chromium
```

### Run tests in Firefox

```bash
npx playwright test --project=firefox
```

### Run tests in WebKit

```bash
npx playwright test --project=webkit
```

### Generate and open HTML report

```bash
npx playwright show-report
```

## Test Coverage

The framework currently covers:

- Login functionality
- Successful and unsuccessful login scenarios
- Home page validation
- Product listing validation
- Shopping cart operations
- Adding and removing products
- Checkout functionality
- Checkout form validation
- Order completion validation

## Test Execution Results

**Latest recorded execution: 24 tests passed.**

Cross-browser execution configured for:

- Chromium
- Firefox
- WebKit

## Reporting

Playwright's HTML reporter is used to review:

- Test execution status
- Passed and failed tests
- Execution duration
- Failure details
- Browser-specific results

## Version Control and CI/CD

The project is maintained using Git and GitHub.

A GitHub Actions workflow is included under:

`.github/workflows/playwright.yml`

## Project Repository

[Playwright TypeScript Hybrid Automation Framework](https://github.com/VuddagiriAkhil/playwright-typescript-hybrid-framework)

---

## Author

**Vuddagiri Akhil Krishna Gupta**
