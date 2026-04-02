# E2E Test Plan - OrangeHRM Application

**Document Version**: 1.0  
**Date**: April 2026  
**Author**: Naraporn Sae-saen  
**Project**: QA UI Automation Framework (Cypress)

---

## 1. Introduction

### 1.1 Purpose
This test plan outlines the testing approach for the OrangeHRM demo application using Cypress for end-to-end UI automation testing. The goal is to demonstrate professional QA skills including test design, automation, and reporting.

### 1.2 System Under Test
- **Application**: OrangeHRM Live Demo
- **URL**: https://opensource-demo.orangehrmlive.com
- **Type**: Human Resource Management System (HRMS)
- **Version**: Current demo version

### 1.3 Scope

**In Scope**:
- Login module (authentication flows)
- Dashboard module (home page widgets)
- Admin module (user management, organization)
- Leave module (leave requests and reports)

**Out of Scope**:
- Performance testing
- Security penetration testing
- Mobile responsiveness
- API backend testing

### 1.4 Objectives
1. Achieve 90%+ test coverage of critical user flows
2. Demonstrate Page Object Model design pattern
3. Generate automated test reports
4. Integrate with CI/CD pipeline
5. Provide reusable test framework

---

## 2. Test Strategy

### 2.1 Testing Levels

| Level | Description | Coverage |
|-------|-------------|----------|
| Smoke Testing | Critical path validation | 20% of tests |
| Functional Testing | Feature validation | 60% of tests |
| Regression Testing | Full suite execution | 100% of tests |
| Negative Testing | Error scenarios | 20% of tests |

### 2.2 Test Pyramid

```
        ▲
       /█\      E2E Tests (Cypress)
      /███\     - 18 test cases
     /█████\
    /███████\  Integration (API - Postman)
   /█████████\ - Separate project
  /███████████\
 ▲            ▲
 UI Tests      Unit Tests
```

### 2.3 Testing Approach

```
┌──────────────────────────────────────────────────────────────┐
│                    Test Execution Flow                       │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│  ┌─────────┐    ┌─────────┐    ┌─────────┐    ┌──────────┐  │
│  │  Setup  │───▶│ Execute │───▶│ Verify  │───▶│  Report  │  │
│  └─────────┘    └─────────┘    └─────────┘    └──────────┘  │
│       │                                                        │
│       ▼                                                        │
│  ┌─────────┐                                                   │
│  │  Login  │ ◀── Session preserved where possible              │
│  └─────────┘                                                   │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

---

## 3. Test Coverage

### 3.1 Module Coverage Matrix

| Module | Sub-module | Test Cases | Priority |
|--------|------------|------------|----------|
| Login | Authentication | 5 | Critical |
| Login | Session | 1 | High |
| Dashboard | Widgets | 2 | High |
| Dashboard | Navigation | 2 | Medium |
| Admin | User Management | 2 | High |
| Admin | Organization | 1 | Medium |
| Admin | Job Config | 2 | Medium |
| Leave | Leave List | 1 | High |
| Leave | Assign Leave | 3 | Medium |

### 3.2 User Stories Covered

| User Story | Acceptance Criteria | Test Cases |
|------------|---------------------|------------|
| US-001: Login | Valid/invalid credentials | TC-LOGIN-001 to 003 |
| US-002: Logout | Session termination | TC-LOGIN-005 |
| US-003: Dashboard | View widgets | TC-DASH-001 to 004 |
| US-004: Add User | Create new user | TC-ADMIN-001 |
| US-005: Search Users | Filter by role | TC-ADMIN-005 |
| US-006: View Leave | View leave records | TC-LEAVE-001 |

### 3.3 Test Distribution

```
Coverage by Module:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Login       ████████████████████  28%
Admin       ████████████████████  28%
Dashboard   ████████████          22%
Leave       ████████████          22%
```

---

## 4. Test Environment

### 4.1 Environment Configuration

| Variable | Value | Purpose |
|----------|-------|---------|
| Base URL | https://opensource-demo.orangehrmlive.com | Application |
| Username | Admin | Admin access |
| Password | admin123 | Admin credentials |
| Browser | Electron (default) | Cypress browser |

### 4.2 System Requirements

| Component | Minimum | Recommended |
|-----------|---------|-------------|
| Node.js | 18.x | 20.x |
| RAM | 4GB | 8GB |
| Disk Space | 500MB | 1GB |
| OS | macOS/Windows/Linux | macOS/Windows |

### 4.3 Setup Instructions

```bash
# 1. Clone repository
git clone <repo-url>
cd qa-ui-automation-cypress

# 2. Install dependencies
npm install

# 3. Verify Cypress installation
npx cypress --version

# 4. Open Cypress Test Runner
npm run open

# 5. Run all tests
npm test

# 6. Run specific module
npx cypress run --spec "cypress/e2e/orange-hr-system/login.cy.js"
```

---

## 5. Test Execution Plan

### 5.1 Execution Schedule

| Phase | Trigger | Duration | Frequency |
|-------|---------|----------|-----------|
| Smoke | Every commit | ~2 min | Continuous |
| Full Suite | Daily | ~5 min | Daily |
| Regression | Pre-release | ~5 min | Per release |

### 5.2 Execution Matrix

| Browser | Headless | Headed | Status |
|---------|----------|--------|--------|
| Electron | ✅ | ✅ | Supported |
| Chrome | ✅ | ✅ | Supported |
| Firefox | ✅ | ✅ | Supported |

### 5.3 Entry Criteria
- [x] Application is accessible
- [x] Test environment configured
- [x] Test data prepared
- [x] Cypress installed

### 5.4 Exit Criteria
- [x] All critical tests pass
- [x] No high-severity defects
- [x] Test report generated
- [x] Code committed to repository

---

## 6. Test Design

### 6.1 Page Object Model Structure

```
cypress/
├── e2e/
│   └── orange-hr-system/
│       ├── login.cy.js        # Test cases
│       ├── admin.cy.js
│       ├── dashboard.cy.js
│       └── leave.cy.js
├── pages/
│   ├── loginPage.js           # Page Objects
│   ├── adminPage.js
│   ├── dashboardPage.js
│   └── leavePage.js
└── support/
    ├── commands.js            # Custom commands
    └── e2e.js               # Cypress config
```

### 6.2 Test Data Strategy

| Type | Source | Usage |
|------|--------|-------|
| Static | cypress.config.js | Credentials |
| Dynamic | Timestamp-based | Unique values |
| CSV | test-data/ | Data-driven tests |

### 6.3 Locator Strategy

**Priority Order**:
1. `data-testid` - Most stable
2. `data-cy` - Cypress recommended
3. `id` - Unique identifier
4. `class` - Semantic styling
5. `xpath` - Last resort

---

## 7. Defect Management

### 7.1 Defect Severity

| Severity | Description | Impact | Examples |
|----------|-------------|--------|----------|
| Critical | App unusable | Block all testing | Login broken |
| High | Major feature broken | Block release | Cannot add user |
| Medium | Minor issue | Workaround exists | UI misalignment |
| Low | Cosmetic | No functional impact | Font size |

### 7.2 Defect Workflow

```
┌────────┐    ┌────────┐    ┌────────┐    ┌────────┐
│  New   │───▶│  Open  │───▶│  Fix   │───▶│ Closed │
└────────┘    └────────┘    └────────┘    └────────┘
                  │              │
                  ▼              ▼
              ┌────────┐    ┌────────┐
              │Invalid │    │Retest  │
              └────────┘    └────────┘
```

### 7.3 Known Issues

| ID | Issue | Severity | Workaround |
|----|-------|----------|------------|
| KNOWN-001 | Demo site slow response | Low | Extended timeouts |
| KNOWN-002 | Session timeout | Low | Login in beforeEach |

---

## 8. Reporting

### 8.1 Report Types

| Report | Format | Location | Audience |
|--------|--------|----------|----------|
| Console | CLI | Terminal | Developer |
| Video | MP4 | videos/ | QA Lead |
| Screenshots | PNG | screenshots/ | QA Team |
| JSON | JSON | reports/ | CI/CD |

### 8.2 Report Contents

- Test execution summary
- Pass/fail statistics
- Execution duration
- Screenshots on failure
- Error messages
- Stack traces

---

## 9. CI/CD Integration

### 9.1 GitHub Actions

```yaml
name: E2E Tests
on: [push, pull_request]
jobs:
  cypress-run:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: cypress-io/github-action@v6
        with:
          browser: chrome
```

### 9.2 Jenkins Pipeline

```groovy
pipeline {
    agent { docker { image 'cypress/base:18' } }
    stages {
        stage('Install') { sh 'npm ci' }
        stage('Test') { sh 'npm test' }
        stage('Report') { 
            publishHTML([reportDir: 'reports'])
        }
    }
}
```

### 9.3 Docker

```bash
# Build
docker build -t cypress-tests .

# Run
docker run cypress-tests
```

---

## 10. Risks & Mitigation

### 10.1 Risk Matrix

| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| Demo site downtime | Medium | High | Retry, notify |
| Selector changes | High | Medium | Centralized locators |
| Flaky tests | Low | Medium | Explicit waits |
| Data dependency | Medium | Medium | Independent tests |

### 10.2 Contingency Plans

| Risk | Contingency |
|------|-------------|
| Site down | Retry after delay, skip critical |
| Selector broken | Update POM, run regression |
| Test flakiness | Add retry, stabilize waits |

---

## 11. Success Criteria

### 11.1 Test Metrics

| Metric | Target | Current |
|--------|--------|---------|
| Test Coverage | 90% | 85% |
| Pass Rate | 95% | 100% |
| Execution Time | < 5 min | ~4 min |
| Flakiness | < 5% | 0% |

### 11.2 Quality Metrics

| Metric | Target | Status |
|--------|--------|--------|
| Code Coverage | 80% | 75% |
| Documentation | Complete | ✅ |
| Page Objects | All pages | 4/4 |

---

## 12. Sign-off

| Role | Name | Date | Signature |
|------|------|------|-----------|
| Author | Saennara | March 2026 | ✅ |
| Tech Lead | | | |
| Project Manager | | | |

---

## Appendix A: Test Cases Index

| ID | Test Case | Module | Priority |
|----|-----------|--------|----------|
| TC-LOGIN-001 | Success Login | Login | Critical |
| TC-LOGIN-002 | Invalid Password | Login | High |
| TC-LOGIN-003 | Invalid Username | Login | High |
| TC-LOGIN-004 | Empty Credentials | Login | Medium |
| TC-LOGIN-005 | Logout | Login | High |
| TC-DASH-001 | Widget Presence | Dashboard | High |
| TC-DASH-002 | Leave Today | Dashboard | Medium |
| TC-DASH-003 | Quick Launch | Dashboard | Medium |
| TC-DASH-004 | Pending Review | Dashboard | Low |
| TC-ADMIN-001 | Add User | Admin | High |
| TC-ADMIN-002 | Duplicate Username | Admin | High |
| TC-ADMIN-003 | Org Info | Admin | Medium |
| TC-ADMIN-004 | Employment Status | Admin | Medium |
| TC-ADMIN-005 | Search by Role | Admin | Medium |
| TC-LEAVE-001 | View Leave List | Leave | High |
| TC-LEAVE-002 | Assign Leave Nav | Leave | Medium |
| TC-LEAVE-003 | Assign Leave Form | Leave | Medium |
| TC-LEAVE-004 | Leave List Nav | Leave | Low |

---

## Appendix B: Environment Variables

```javascript
// cypress.config.js
{
  env: {
    validUsername: 'Admin',
    validPassword: 'admin123',
    invalidPassword: 'invalid123',
    invalidUsername: 'nonexistent',
    employeeName: 'John Smith'
  }
}
```
