# OrangeHRM UI Automation Framework

A comprehensive UI automation framework for OrangeHRM using Cypress (JavaScript) with Page Object Model (POM) design pattern.

![Cypress](https://img.shields.io/badge/Cypress-13.17.0-brightgreen)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow)
![Node.js](https://img.shields.io/badge/Node.js-18+-green)
![License](https://img.shields.io/badge/License-MIT-blue)

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running Tests](#running-tests)
- [Test Scenarios](#test-scenarios)
- [Page Objects](#page-objects)
- [Custom Commands](#custom-commands)
- [CI/CD Integration](#cicd-integration)
- [Troubleshooting](#troubleshooting)
- [License](#license)

## Overview

This automation framework demonstrates professional UI testing capabilities for the OrangeHRM demo application. It implements industry-standard practices including Page Object Model, custom commands, dynamic waits, and comprehensive test coverage across multiple modules.

### Target Application
- **URL**: https://opensource-demo.orangehrmlive.com
- **Type**: Human Resource Management System
- **Purpose**: E2E Testing Portfolio Project

## Features

- **Page Object Model (POM)** - Separation of locators and test logic
- **Custom Commands** - Reusable Cypress commands for common actions
- **Dynamic Waits** - Intelligent waiting mechanisms for element availability
- **Modular Architecture** - Easy to maintain and extend
- **Detailed Logging** - Comprehensive test execution logs
- **Screenshot Capture** - Automatic failure screenshots
- **Cross-browser Testing** - Chrome, Firefox, Edge support

## Project Structure

```
qa-ui-automation-cypress/
├── cypress/
│   ├── e2e/
│   │   └── orange-hr-system/
│   │       ├── login.cy.js        # Login module tests
│   │       ├── dashboard.cy.js   # Dashboard module tests
│   │       ├── admin.cy.js       # Admin module tests
│   │       └── leave.cy.js       # Leave module tests
│   ├── pages/
│   │   ├── loginPage.js           # Login page object
│   │   ├── dashboardPage.js       # Dashboard page object
│   │   ├── adminPage.js           # Admin page object
│   │   └── leavePage.js           # Leave page object
│   ├── support/
│   │   ├── commands.js            # Custom Cypress commands
│   │   └── e2e.js                 # Cypress configuration
│   ├── fixtures/
│   ├── downloads/
│   ├── screenshots/
│   └── videos/
├── cypress.config.js              # Cypress configuration
├── Dockerfile                     # Docker configuration
├── Jenkinsfile                    # Jenkins CI/CD pipeline
├── package.json                   # NPM dependencies
├── .env.example                   # Environment variables template
└── README.md                      # Documentation
```

## Prerequisites

- **Node.js** v18 or higher
- **npm** or **yarn**
- **Chrome**, **Firefox**, or **Edge** browser

## Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd qa-ui-automation-cypress
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Verify installation**
   ```bash
   npm list cypress
   ```

## Configuration

### cypress.config.js

The main configuration file includes:
- Base URL for the target application
- Environment variables for credentials
- Timeouts and retry settings
- Screenshot and video settings
- Viewport configuration

### Environment Variables

Configure credentials in `cypress.config.js`:

```javascript
env: {
  validUsername: 'Admin',
  validPassword: 'admin123',
  invalidPassword: 'invalid123',
  invalidUsername: 'nonexistent',
  employeeName: 'John Smith'
}
```

## Running Tests

### Run all tests
```bash
npm test
```

### Run tests in headed mode
```bash
npm run test:headed
```

### Run tests in specific browser
```bash
npm run test:chrome
npm run test:headed:chrome
```

### Open Cypress Test Runner
```bash
npm run open
```

### Run specific test file
```bash
npx cypress run --spec "cypress/e2e/orange-hr-system/login.cy.js"
```

## Test Scenarios

### 1. Login Module (5 Test Cases)

| Test ID | Test Name | Description | Expected Result |
|---------|-----------|-------------|-----------------|
| TC-01 | Success Login | Authenticate with valid credentials | Dashboard redirects successfully |
| TC-02 | Invalid Password | Login with wrong password | Error message displayed |
| TC-03 | Invalid Username | Login with non-existent username | Error message displayed |
| TC-04 | Empty Credentials | Verify login form elements | Form elements visible |
| TC-05 | Logout Functionality | Logout after successful login | Session terminated |

### 2. Dashboard Module (4 Test Cases)

| Test ID | Test Name | Description | Expected Result |
|---------|-----------|-------------|-----------------|
| TC-01 | Widget Presence | Verify core widgets visibility | All widgets visible |
| TC-02 | Leave Today Display | Check "Employees on Leave Today" | Section loads properly |
| TC-03 | Quick Launch Links | Click "Assign Leave" link | Correct page redirect |
| TC-04 | Pending Self Review | Check "My Actions" section | Section exists |

### 3. Admin Module (5 Test Cases)

| Test ID | Test Name | Description | Expected Result |
|---------|-----------|-------------|-----------------|
| TC-01 | Add User | Create new ESS user | User saved successfully |
| TC-02 | Duplicate Username | Create user with existing name | Error message shown |
| TC-03 | Organization Info | Verify org fields visible | Fields exist |
| TC-04 | Add Employment Status | Create new status | Status saved successfully |
| TC-05 | Search by Role | Filter users by role | Filtered list displayed |

### 4. Leave Module (4 Test Cases)

| Test ID | Test Name | Description | Expected Result |
|---------|-----------|-------------|-----------------|
| TC-01 | View Leave List | Search with date range | Records displayed |
| TC-02 | Assign Leave | Navigate to assign leave page | Page loads correctly |
| TC-03 | Leave Comments | Navigate to assign leave | Page loads correctly |
| TC-04 | Invalid Date Range | Navigate to leave list | Page loads correctly |

**Total: 18 Test Cases**

## Page Objects

### LoginPage

**Locators:**
- `usernameInput` - Username input field
- `passwordInput` - Password input field
- `loginButton` - Submit login button
- `errorMessage` - Error message element
- `logo` - Application logo

**Methods:**
- `visit()` - Navigate to login page
- `enterUsername(username)` - Type username
- `enterPassword(password)` - Type password
- `clickLogin()` - Click login button
- `login(username, password)` - Perform complete login
- `verifyErrorMessage(message)` - Verify error message

### DashboardPage

**Locators:**
- `dashboardHeader` - Dashboard header
- `sidebar` - Side navigation bar
- `sidebarToggle` - Toggle button
- `myActionsWidget` - My Actions widget
- `quickLaunchWidget` - Quick Launch widget
- `employeesOnLeaveToday` - Leave section
- `userDropdown` - User dropdown menu

**Methods:**
- `visit()` - Navigate to dashboard
- `waitForDashboardLoad()` - Wait for load
- `verifyAllCoreWidgets()` - Verify widgets
- `verifyEmployeesOnLeaveSection()` - Verify leave section
- `verifyPendingSelfReviewSection()` - Verify review section
- `logout()` - Perform logout

### AdminPage

**Locators:**
- `adminMenuItem` - Admin menu item
- `addButton` - Add button
- `searchInput` - Search input
- `userRoleDropdown` - User role dropdown
- `userStatusDropdown` - User status dropdown
- `successToast` - Success toast
- `errorToast` - Error toast

**Methods:**
- `visit()` - Navigate to admin page
- `clickAdd()` - Click add button
- `selectUserRole(role)` - Select role
- `selectUserStatus(status)` - Select status
- `enterUsername(username)` - Enter username
- `enterPassword(password)` - Enter password
- `enterConfirmPassword(password)` - Confirm password
- `enterEmployeeName(name)` - Enter employee name
- `searchByRole(role)` - Search by role
- `save()` - Save form
- `waitForLoading()` - Wait for loading

### LeavePage

**Locators:**
- `leaveMenuItem` - Leave menu
- `assignLeaveOption` - Assign leave option
- `leaveListOption` - Leave list option
- `myLeaveOption` - My leave option
- `fromDateInput` - From date input
- `toDateInput` - To date input
- `leaveTypeDropdown` - Leave type dropdown
- `searchButton` - Search button
- `successToast` - Success toast

**Methods:**
- `visit()` - Navigate to leave page
- `navigateToAssignLeave()` - Navigate to assign
- `navigateToLeaveList()` - Navigate to list
- `navigateToMyLeave()` - Navigate to my leave
- `enterFromDate(date)` - Enter from date
- `enterToDate(date)` - Enter to date
- `selectLeaveType(type)` - Select leave type
- `searchLeaveRecords()` - Search records
- `waitForLoading()` - Wait for loading

## Custom Commands

```javascript
// Login/Logout
cy.login(username, password)
cy.logout()

// Element Interaction
cy.waitForElement(element)
cy.clickElement(element)
cy.selectOption(dropdown, text)

// Assertions
cy.verifyElementVisible(selector)
cy.verifyToastMessage(message)

// Utility
cy.waitForPageLoad()
cy.takeScreenshot(name)
```

## CI/CD Integration

### Docker Compose

```bash
# Build and run with Docker Compose
docker compose up -d
```

### Dockerfile

The Dockerfile sets up a Jenkins image with:
- **Docker** - Docker-in-Docker support
- **Xvfb** - Virtual framebuffer for headless browser
- **Cypress dependencies** - Required system libraries

### Jenkins Pipeline

The `Jenkinsfile` includes:

| Stage | Description |
|-------|-------------|
| Checkout | Clone repository from Git |
| Cache Dependencies | Reuse node_modules & Cypress binary |
| Check NodeJS | Verify Node.js, npm, Cypress versions |
| Run Cypress E2E | Execute Cypress tests |

**Features:**
- Cached dependencies for faster builds
- Node.js tool configuration
- Configurable test scripts


## Troubleshooting

### Common Issues

**Tests fail with "element not found"**
- Solution: Increase timeout or use better locators
- Check if element requires authentication

**Flaky tests in CI**
- Solution: Add retries in config
- Use more specific waits

**Slow test execution**
- Solution: Reduce wait times
- Parallelize tests

### Debug Mode

```bash
npm run open -- --headed
```

## Resources

- [Cypress Documentation](https://docs.cypress.io/)
- [OrangeHRM Demo](https://opensource-demo.orangehrmlive.com)
- [Page Object Model](https://www.selenium.dev/documentation/testpractices/page-objects/)

## License

This project is licensed under the MIT License.

---

**Happy Testing!**
