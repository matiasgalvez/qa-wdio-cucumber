![WebdriverIO](https://img.shields.io/badge/WebdriverIO-Automation-orange)
![Cucumber](https://img.shields.io/badge/Cucumber-BDD-brightgreen)
![Allure](https://img.shields.io/badge/Reporting-Allure-blue)
# 🧪 QA WebdriverIO + Cucumber Automation Framework

## 📌 Overview

This project is an end-to-end (E2E) test automation framework built to validate core user flows of the ![SauceDemo web application](https://www.saucedemo.com/).

The framework follows modern automation engineering best practices:

- Page Object Model (POM)
- BDD with Cucumber
- Environment-based configuration
- Headless / headful execution modes
- Allure reporting
- Automatic screenshot capture on failure
- Scalable folder structure

---

# 1️⃣ Technology Stack & Rationale

## 🔹 Automation Framework: WebdriverIO

**Why WebdriverIO?**

- Modern, actively maintained automation framework
- Built-in smart waits
- Strong integration with Cucumber
- Excellent reporting ecosystem (Allure)
- Supports headless execution and CI/CD pipelines
- Clean async/await syntax

WebdriverIO provides a scalable and enterprise-ready browser automation solution.

---

## 🔹 Test Framework: Cucumber (BDD)

**Why Cucumber?**

- Enables Behavior-Driven Development (BDD)
- Uses Gherkin syntax (Given/When/Then)
- Improves collaboration between QA, Dev, and Business
- Human-readable test scenarios
- Encourages behavior-focused testing

Cucumber aligns automated tests with business requirements.

---

## 🔹 Programming Language: JavaScript (Node.js)

**Why JavaScript?**

- Native support within WebdriverIO
- Large ecosystem
- Easy CI/CD integration
- Async/await improves readability
- Widely adopted in modern automation engineering

---

## 🔹 Reporting: Allure

**Why Allure?**

- Rich visual test reports
- Screenshot attachments on failure
- Step breakdown and execution history
- CI artifact compatibility

Allure enhances visibility and debugging efficiency.

---

# 2️⃣ Project Structure
````
qa-wdio-cucumber/
│
├── test/
│ ├── features/
│ │ ├── login.feature
│ │ ├── cart.feature
│ │ ├── checkout.feature
│
│ ├── pageobjects/
│ │ ├── login.page.js
│ │ ├── inventory.page.js
│ │ ├── cart.page.js
│ │ ├── checkout.page.js
│ │ ├── page.js
│ │
│ ├── step-definitions/
│ │ └── steps.js
│ │
│ ├── support/
│ │ └── hooks.js
│
├── .env.qa
├── .env.staging
├── wdio.conf.js
├── package.json
└── README.md
````
---

# 3️⃣ Scenarios Automated & Rationale

## ✅ 1. Login

**Scenarios:**
- Valid login
- Invalid login

**Reasoning:**
- Authentication is a critical entry point
- High business impact if broken
- Common regression area
- Covers both positive and negative paths

---

## ✅ 2. Add to Cart

**Scenario:**
- Login
- Add product to cart
- Verify cart badge shows 1
- Verify cart contains correct product

**Reasoning:**
- Core e-commerce functionality
- Verifies product selection logic
- Validates cart state update

---

## ✅ 3. Full Checkout Flow (E2E)

**Scenario:**
- Login
- Add product to cart
- Proceed to checkout
- Enter customer details
- Complete order
- Validate confirmation message

**Reasoning:**
- Validates complete purchase lifecycle
- High-value business flow
- Realistic E2E scenario
- Ensures integration across multiple pages

This ensures the application works from entry to business completion.

---

# 4️⃣ Framework Architecture

## 🔹 Page Object Model (POM)

Each page contains:
- Selectors
- Page-specific actions
- Encapsulated logic

Benefits:
- Separation of concerns
- Reusability
- Easier maintenance
- Cleaner step definitions

## 🔹 Step Definitions

Contain:
- Business logic
- Page Object method calls
- Assertions

## 🔹 Hooks

Located in:
````test/support/hooks.js````

Features:
- Screenshot capture on failure
- Allure attachment integration
- Improves debugging and reporting quality.

# 5️⃣ Environment Configuration

I use dotenv-based environment management.

````
In .env.qa
BASE_URL=https://www.saucedemo.com
````

````
In .env.staging
BASE_URL=https://staging.saucedemo.com
(just an example to show environment configuration management)
````

This allows running tests against multiple environments without modifying test code.

# 6️⃣ Installation & Setup
## ✅ Prerequisites

- Node.js (v18+ recommended)
- npm
- Google Chrome installed

## ✅ Install Dependencies
````npm install````

# 7️⃣ Running Tests
## 🔹 Headful Mode against QA Environment (Visible Browser)
````npm run test:qa:headful````

## 🔹 Headless Mode against QA Environment
````npm run test:qa:headless````

# 8️⃣ Allure Reporting
## 🔹 Generate Report
````npm run allure:generate````

## 🔹 Open Report
````npm run allure:open````


Allure provides:
- Step-by-step breakdown
- Screenshot attachments
- Failure stack traces
- Execution duration
- Scenario history

# 9️⃣ Additional Features Implemented

- Environment-based configuration
- Headless configurable via environment variable
- Screenshot on failure
- Allure integration
- Clean separation of test logic and framework logic
- Cross-platform script support (Windows/Mac/Linux)

# 🔟 Possible Enhancements

- Parallel execution
- CI/CD pipeline integration
- Retry logic for flaky tests
- API test layer integration
- Docker container execution
- Test data factory pattern
