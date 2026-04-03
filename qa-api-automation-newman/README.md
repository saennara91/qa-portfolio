# 🐾 PetStore API Automation Framework

> API Test Automation using Postman & Newman for [PetStore Swagger API](https://petstore.swagger.io/)

![Postman](https://img.shields.io/badge/Postman-Automation-orange?style=for-the-badge&logo=postman)
![Newman](https://img.shields.io/badge/Newman-CLI-green?style=for-the-badge&logo=npm)
![API](https://img.shields.io/badge/API-RESTful-blue?style=for-the-badge)
![Tests](https://img.shields.io/badge/20-Test%20Cases-brightgreen?style=for-the-badge)

---

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running Tests](#running-tests)
- [Test Scenarios](#test-scenarios)
- [Reports](#reports)
- [CI/CD Integration](#cicd-integration)
- [License](#license)

---

## 🎯 Overview

This project demonstrates comprehensive API test automation skills using Postman collections and Newman CLI runner. It covers end-to-end testing of a Pet Store management API with positive, negative, smoke, and regression test scenarios.

### Target API
- **Base URL**: `https://petstore.swagger.io/v2`
- **Documentation**: [PetStore Swagger](https://petstore.swagger.io/)
- **Resources**: Pets, Store Orders, Users

---

## ✨ Features

- **20+ Test Cases** covering all API endpoints
- **Smoke Tests** - Quick validation of critical endpoints
- **Regression Tests** - Full CRUD operations coverage
- **Negative Tests** - Error handling validation
- **Data-Driven Testing** - CSV test data support
- **HTML/JSON Reports** - Detailed test execution reports
- **CI/CD Ready** - Jenkins, GitHub Actions support
- **Environment Variables** - Easy config management

---

## 📁 Project Structure

```
qa-api-automation-newman/
├── collections/
│   └── PetStoreAPI.postman_collection.json   # Test collection
├── environments/
│   └── qa.postman_environment.json           # Environment config
├── test-data/
│   └── pet-data.csv                           # Data-driven test data
├── reports/
│   └── json-report.json                       # JSON test report
├── package.json                               # NPM dependencies
├── README.md                                  # Documentation
└── NewmanConfiguration.md                    # Newman config options
```

---

## 🔧 Prerequisites

- **Node.js** v18 or higher
- **npm** or **yarn**
- **Postman** (optional, for local collection editing)

---

## 📦 Installation

```bash
# Navigate to project directory
cd qa-api-automation-newman

# Install dependencies
npm install

# Verify Newman installation
npx newman --version
```

---

## 🚀 Running Tests

### Run All Tests with Default Report
```bash
npm test
```

### Run Specific Test Folders

```bash
# Smoke tests only
npm run test:smoke

# Regression tests only
npm run test:regression
```

### Run with HTML Report
```bash
npm run test:report
```

### Run with JSON Report
```bash
npm run test:json
```

### Data-Driven Testing
```bash
npm run test:data-driven
```

### View Help
```bash
npx newman run collections/PetStoreAPI.postman_collection.json --help
```

---

## 📝 Test Scenarios

### Smoke Tests (2 Tests)
| Test ID | Description | Method | Expected Result |
|---------|-------------|--------|-----------------|
| TC-API-001 | Health Check | GET | 200 OK, response time < 1s |
| TC-API-002 | Find Pet by Status | GET | 200 OK, array of available pets |

### Regression Tests (13 Tests)
| Test ID | Description | Method | Expected Result |
|---------|-------------|--------|-----------------|
| TC-API-003 | Add New Pet | POST | 200 OK, pet created |
| TC-API-004 | Get Pet by ID | GET | 200 OK, pet details |
| TC-API-005 | Update Pet | PUT | 200 OK, pet updated |
| TC-API-006 | Delete Pet | DELETE | 200 OK, pet deleted |
| TC-API-007 | Find Pets by Status | GET | 200 OK, pending pets |
| TC-API-008 | Place Order | POST | 200 OK, order placed |
| TC-API-009 | Get Order by ID | GET | 200 OK, order details |
| TC-API-010 | Delete Order | DELETE | 200 OK, order deleted |
| TC-API-011 | Get Store Inventory | GET | 200 OK, inventory object |
| TC-API-012 | Create User | POST | 200 OK, user created |
| TC-API-013 | Get User | GET | 200 OK, user details |
| TC-API-014 | Update User | PUT | 200 OK, user updated |
| TC-API-015 | Delete User | DELETE | 200 OK, user deleted |

### Negative Tests (5 Tests)
| Test ID | Description | Method | Expected Result |
|---------|-------------|--------|-----------------|
| TC-API-016 | Get Non-existent Pet | GET | 404 Not Found |
| TC-API-017 | Invalid Pet ID Format | GET | 4xx/5xx Error |
| TC-API-018 | Create User - Missing Fields | POST | 4xx/5xx Error |
| TC-API-019 | Get Non-existent Order | GET | 404 Not Found |
| TC-API-020 | Delete Non-existent User | DELETE | 404/5xx Error |

---

## 📊 Reports

After test execution, reports are generated in the `reports/` directory:

### HTML Report
```bash
# View in browser
open reports/html-report.html
```

### JSON Report
```bash
# View JSON output
cat reports/json-report.json
```

### CLI Output
```
newman

PetStore API Test Collection

→ TC-01: Health Check
  GET https://petstore.swagger.io/v2/pet/1
  ✓  Status code is 200
  ✓  Response time is acceptable
  ✓  Response has valid structure
  172ms

→ TC-02: Find Pet By Status - Available
  GET https://petstore.swagger.io/v2/pet/findByStatus?status=available
  ✓  Status code is 200
  ...

Test run complete...
```

---

## 🔄 CI/CD Integration

### Docker Compose

```bash
# Start Jenkins with Newman
docker compose up -d

# Access Jenkins at http://localhost:8080
```

### Dockerfile

The Dockerfile sets up a Jenkins image with:
- **Node.js 20** - JavaScript runtime
- **Newman** - CLI test runner
- **newman-reporter-htmlextra** - Enhanced HTML reports
- **newman-reporter-junitfull** - JUnit XML reports
- **Docker** - For Docker-in-Docker support

### Jenkins Pipeline

The `Jenkinsfile` includes:

| Stage | Description |
|-------|-------------|
| Checkout | Clone repository from Git |
| Install Dependencies | Run `npm install` |
| Run Newman Tests | Execute API tests with reporters |
| Publish Reports | Publish HTML & JUnit reports |

**Reports Generated:**
- `newman-reports/results.xml` - JUnit XML report
- `newman-reports/results.json` - JSON report
- `newman-reports/html/report.html` - HTML report

### Running Locally

```bash
# Install dependencies
npm install

# Run all tests
npm test

# Run with reports
npm run test:report
```

---

## 🛠️ Newman Options

Key Newman CLI options used in this project:

| Option | Description |
|--------|-------------|
| `-e, --environment` | Environment file path |
| `-g, --globals` | Global variables file |
| `-d, --iteration-data` | Data file for data-driven tests |
| `-r, --reporters` | Reporters to use (cli, html, json) |
| `--folder` | Run specific folder from collection |
| `--iteration-count` | Number of iterations |
| `--timeout` | Request timeout in ms |
| `--delay-request` | Delay between requests |

---

## 📚 API Endpoints Covered

### Pet Endpoints
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/pet` | Add new pet |
| GET | `/pet/{petId}` | Get pet by ID |
| PUT | `/pet` | Update pet |
| DELETE | `/pet/{petId}` | Delete pet |
| GET | `/pet/findByStatus` | Find pets by status |

### Store Endpoints
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/store/order` | Place order |
| GET | `/store/order/{orderId}` | Get order |
| DELETE | `/store/order/{orderId}` | Delete order |
| GET | `/store/inventory` | Get inventory |

### User Endpoints
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/user` | Create user |
| GET | `/user/{username}` | Get user |
| PUT | `/user/{username}` | Update user |
| DELETE | `/user/{username}` | Delete user |

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Add/Update tests
4. Ensure all tests pass
5. Submit a pull request

---

## 📄 License

This project is licensed under the MIT License.

---

<div align="center">

**Built with ❤️ for Quality Assurance**

</div>
