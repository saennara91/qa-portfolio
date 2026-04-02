# QA Portfolio – Automated Testing Demo

<p align="center">
  <img src="https://img.shields.io/badge/QA%20Engineer-5%2B%20Years%20Experience-brightgreen?style=for-the-badge" alt="Experience">
  <img src="https://img.shields.io/badge/Focus-Test%20Automation-blue?style=for-the-badge" alt="Focus">
  <img src="https://img.shields.io/badge/Looking-For%20Opportunities-yellow?style=for-the-badge" alt="Status">
</p>

---

## Hi, I'm Nil

A **QA Engineer**  with **5+ years** of experience in software testing, specializing in API automation, UI automation, and CI/CD integration.

I design and build maintainable test automation frameworks that help teams improve test coverage, reduce manual effort, and deliver stable software with confidence.


> *"Great software deserves great testing. I help make that happen."*

---

## What I Bring to the Table

| | |
|---|---|
| **Testing Expertise** | Manual Testing, API Testing, Regression, Smoke, E2E |
| **UI Automation** | Cypress, Playwright|
| **API Automation** | Postman, Newman |
| **DevOps & CI/CD** | Jenkins, Docker|
| **Documentation** | Test Plans, Test Cases, Test Reports, Bug Reports |

---

## Featured Projects

### 1. Cypress UI Automation Framework
> End-to-end UI test automation for OrangeHRM demo application

| | |
|---|---|
| **Tech Stack** | Cypress 13.17.0, JavaScript, Page Object Model |
| **Test Coverage** | 18 Test Cases across 4 modules |
| **Modules** | Login (5), Dashboard (4), Admin (5), Leave Management (4) |
| **Status** | All tests passing |
| **CI/CD** | Docker, Jenkinsfile ready |

**Test Modules:**
- **Login**: Valid/invalid credentials, form validation, logout
- **Dashboard**: Widgets, quick launch, employee leave display
- **Admin**: User management, organization settings, search/filter
- **Leave**: Leave list, assign leave, date validation

---

### 2. Postman/Newman API Automation Framework
> Production-style API testing using PetStore Swagger API

| | |
|---|---|
| **Tech Stack** | Postman, Newman, JavaScript |
| **Test Coverage** | 20 Test Cases, 45 Assertions |
| **Test Types** | Smoke (2), Regression (13), Negative (5) |
| **Data Driven** | CSV test data support |
| **Reports** | HTML/JSON reports |
| **CI/CD** | Jenkins, Docker|

**API Endpoints Covered:**
- **Pet**: CRUD operations, find by status
- **Store**: Order placement, inventory check
- **User**: User management operations

---

### 3. Manual QA Documentation
> Structured QA documentation demonstrating testing thinking

| | |
|---|---|
| **API Documentation** | 20 test cases, test plan, report template |
| **E2E Documentation** | 18 test cases, test plan, report template |
| **Format** | Markdown, reusable templates |

**Documentation Includes:**
- **Test Cases**: Detailed scenarios with prerequisites, steps, expected results
- **Test Plans**: Strategy, scope, schedule, resource planning
- **Test Reports**: Metrics, execution summary, defect tracking

```
qa-manual-testing/qa-test-design/
├── API/
│   ├── test-cases.md             # 20 API test cases
│   ├── test-plan.md              # API test strategy
│   └── test-report-template.md    # Reusable report template
└── E2E/
    ├── test-cases.md             # 18 OrangeHRM test cases
    ├── test-plan.md              # E2E test strategy
    └── test-report-template.md    # Reusable report template
```

---

## Project Statistics

```
+------------------------------------------------------------------+
|                                                                  |
|  Cypress UI Tests    ████████████████████  18 Test Cases      |
|  Admin Module        ████████████████████   5 Tests           |
|  Dashboard Module    ████████████████       4 Tests           |
|  Leave Module        ████████████████       4 Tests           |
|  Login Module        ████████████████████   5 Tests           |
|                                                                  |
|  API Tests           ████████████████████  20 Test Cases      |
|  Assertions          ████████████████████  45 Assertions      |
|  Smoke Tests         ██                      2 Tests           |
|  Regression Tests    ████████████████      13 Tests           |
|  Negative Tests      ██████████              5 Tests           |
|                                                                  |
|  Manual QA Docs      ████████████████████   6 Documents        |
|                                                                  |
+------------------------------------------------------------------+
```

---

## Tech Stack

### Testing Tools
| | |
|---|---|
| ![Cypress](https://img.shields.io/badge/-Cypress-brightgreen?style=flat-square&logo=cypress) | End-to-End Testing |
| ![Postman](https://img.shields.io/badge/-Postman-orange?style=flat-square&logo=postman) | API Testing |
| ![Newman](https://img.shields.io/badge/-Newman-green?style=flat-square&logo=npm) | CLI Test Runner |


### DevOps & CI
| | |
|---|---|
| ![Jenkins](https://img.shields.io/badge/-Jenkins-red?style=flat-square&logo=jenkins) | CI/CD Pipeline |
| ![Docker](https://img.shields.io/badge/-Docker-blue?style=flat-square&logo=docker) | Containerization |


### Documentation & APIs
| | |
|---|---|
| ![Swagger](https://img.shields.io/badge/-Swagger-brightgreen?style=flat-square&logo=swagger) | API Documentation |
| ![OpenAPI](https://img.shields.io/badge/-OpenAPI-yellow?style=flat-square&logo=openapiinitiative) | API Specification |

### Languages
| | |
|---|---|
| ![JavaScript](https://img.shields.io/badge/-JavaScript-yellow?style=flat-square&logo=javascript) | 

---

## Why Hire Me?

### I Deliver Quality, Not Just Tests

- **End-to-End Thinking** – I understand how components work together
- **Detail-Oriented** – I catch issues before users do
- **Automation-First** – I build sustainable test frameworks
- **CI/CD Champion** – Testing is integrated, not an afterthought
- **Clear Communication** – Reports and documentation speak business

### I Build Maintainable Solutions

```
Well-structured projects
Clear documentation
Reusable components
Comprehensive reporting
```

### I Stay Current

- Following industry best practices
- Learning new testing tools continuously
- Adapting to project needs

---

## Project Structure


```
qa-portfolio/
|
+-- qa-ui-automation-cypress/           # Cypress E2E Tests
|   +-- cypress/
|   |   +-- e2e/orange-hr-system/       # Test scenarios (18 cases)
|   |   +-- pages/                      # Page Objects
|   |   +-- support/                    # Custom commands
|   |   +-- fixtures/                    # Test data
|   |   +-- screenshots/                 # Failure screenshots
|   +-- cypress.config.js                # Cypress config
|   +-- Dockerfile                       # Docker setup
|   +-- Jenkinsfile                      # CI/CD pipeline
|   +-- README.md                        # Detailed docs
|   +-- package.json
|
+-- qa-api-automation-newman/            # Postman/Newman API Tests
|   +-- collections/
|   |   +-- PetStoreAPI.postman_collection.json  # 20 test cases
|   +-- environments/
|   |   +-- qa.postman_environment.json
|   +-- test-data/
|   |   +-- pet-data.csv                 # Data-driven test data
|   +-- reports/
|   |   +-- json-report.json             # JSON report
|   +-- NewmanConfiguration.md            # Newman options
|   +-- README.md                         # Detailed docs
|   +-- package.json
|
+-- qa-manual-testing/                   # Manual QA Documentation
|   +-- qa-test-design/
|       +-- API/
|       |   +-- test-cases.md            # 20 API test cases
|       |   +-- test-plan.md             # API test plan
|       |   +-- test-report-template.md  # Report template
|       +-- E2E/
|       |   +-- test-cases.md            # 18 E2E test cases
|       |   +-- test-plan.md             # E2E test plan
|       |   +-- test-report-template.md  # Report template
```

---

## Let's Connect

<p align="center">
  <a href="mailto:saennara91@gmail.com">
    <img src="https://img.shields.io/badge/Email-saennara91@gmail.com-red?style=for-the-badge&logo=gmail" alt="Email">
  </a>
  <a href="https://github.com/saennara91">
    <img src="https://img.shields.io/badge/GitHub-Saennara-black?style=for-the-badge&logo=github" alt="GitHub">
  </a>
</p>

---

<div align="center">

**View my projects and let's discuss how I can contribute to your team!**

*Built with passion for quality assurance*

</div>
