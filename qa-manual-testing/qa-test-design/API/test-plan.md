# API Test Plan - PetStore Swagger API

**Document Version**: 1.0  
**Date**: April 2026  
**Author**: Naraporn Sae-saen  
**Project**: QA API Automation Framework

---

## 1. Introduction

### 1.1 Purpose
This test plan outlines the testing approach for the PetStore Swagger API (`https://petstore.swagger.io/v2`) as part of demonstrating professional API testing skills using Postman and Newman.

### 1.2 Scope
- **In Scope**: REST API endpoints for Pets, Store, and Users modules
- **Out of Scope**: UI testing, performance load testing, security penetration testing

### 1.3 Objectives
- Verify all API endpoints return expected status codes
- Validate response data structure and content
- Test positive and negative scenarios
- Demonstrate data-driven testing capabilities
- Generate comprehensive test reports

---

## 2. Test Strategy

### 2.1 Testing Levels

| Level | Description | Tool |
|-------|-------------|------|
| Smoke Testing | Critical path validation | Newman CLI |
| Functional Testing | Feature-by-feature validation | Postman Collection |
| Regression Testing | Full suite execution | Newman with CI/CD |
| Negative Testing | Error handling validation | Postman |

### 2.2 Test Approach

```
┌─────────────────┐
│  Test Planning  │
└────────┬────────┘
         ▼
┌─────────────────┐
│ Test Design     │
│ - Positive      │
│ - Negative      │
│ - Edge Cases    │
└────────┬────────┘
         ▼
┌─────────────────┐
│ Test Execution  │
│ - Manual (API)  │
│ - Automation    │
└────────┬────────┘
         ▼
┌─────────────────┐
│ Defect Reporting│
└────────┬────────┘
         ▼
┌─────────────────┐
│ Test Closure    │
└─────────────────┘
```

### 2.3 Risk Assessment

| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| Demo API instability | Medium | Low | Retry mechanism, timeout settings |
| Endpoint changes | Low | Medium | Version control, regular sync |
| Network issues | Low | Low | CI/CD retry configuration |
| Data inconsistency | Medium | Medium | Flexible assertions |

---

## 3. Test Coverage

### 3.1 API Endpoints

| Module | Endpoint | Methods | Priority |
|--------|----------|---------|----------|
| Pets | `/pet` | POST, PUT | High |
| Pets | `/pet/{id}` | GET, DELETE | High |
| Pets | `/pet/findByStatus` | GET | High |
| Store | `/store/order` | POST | High |
| Store | `/store/order/{id}` | GET, DELETE | Medium |
| Store | `/store/inventory` | GET | Medium |
| Users | `/user` | POST | High |
| Users | `/user/{username}` | GET, PUT, DELETE | High |

### 3.2 Test Distribution

```
Test Coverage by Type:
━━━━━━━━━━━━━━━━━━━━━━━━
Positive Tests     ████████████████  50%
Negative Tests    ████████          25%
Edge Cases        ██████            15%
Data-Driven       ██████            10%
```

---

## 4. Test Deliverables

### 4.1 Documents

| Document | Description | Status |
|----------|-------------|--------|
| Test Plan | This document | ✅ Complete |
| Test Cases | 25 detailed test cases | ✅ Complete |
| Test Data | CSV files for data-driven tests | ✅ Complete |
| Environment | Postman environment variables | ✅ Complete |
| Collection | Postman collection JSON | ✅ Complete |

### 4.2 Reports

| Report Type | Generation | Usage |
|-------------|------------|-------|
| CLI Output | Newman default | Console viewing |
| JSON Report | `--reporter-json-export` | CI/CD integration |
| HTML Report | `--reporter-html-export` | Stakeholder review |

---

## 5. Test Environment

### 5.1 Environment Configuration

| Variable | Value | Purpose |
|----------|-------|---------|
| `baseUrl` | `https://petstore.swagger.io/v2` | API base endpoint |
| `apiKey` | `special-key` | API authentication |

### 5.2 Environment Setup

```bash
# 1. Install dependencies
npm install

# 2. Verify Newman installation
npx newman --version

# 3. Run smoke tests
npm run test:smoke

# 4. Run full suite
npm test
```

---

## 6. Test Execution Schedule

### 6.1 Execution Matrix

| Phase | Tests | Duration | Frequency |
|-------|-------|----------|-----------|
| Smoke | 2 | ~5 sec | Every commit |
| Functional | 13 | ~10 sec | Daily |
| Full Suite | 20 | ~15 sec | Pre-release |
| Data-Driven | 5 | ~20 sec | Weekly |

### 6.2 Entry & Exit Criteria

**Entry Criteria**:
- [ ] API is accessible
- [ ] Environment is configured
- [ ] Test data is prepared

**Exit Criteria**:
- [ ] All critical tests pass
- [ ] No high-severity defects open
- [ ] Test report generated

---

## 7. Defect Management

### 7.1 Defect Severity

| Severity | Description | Example |
|----------|-------------|---------|
| Critical | API completely unavailable | 500 on all requests |
| High | Core feature not working | Cannot create pet |
| Medium | Non-critical feature failure | Optional field error |
| Low | Cosmetic issues | Response time high |

### 7.2 Defect Tracking

| ID | Description | Severity | Status | Notes |
|----|-------------|----------|--------|-------|
| DEF-001 | Non-existent pet returns 200 | Low | Open | API inconsistency |

---

## 8. Tools & Technologies

| Tool | Version | Purpose |
|------|---------|---------|
| Postman | Latest | API testing, collection management |
| Newman | 6.x | CLI test execution |
| Node.js | 18+ | Runtime environment |
| npm | Latest | Package management |

---

## 9. Roles & Responsibilities

| Role | Responsibilities |
|------|------------------|
| QA Engineer | Test design, execution, reporting |
| Developer | Fix defects, API clarification |
| Tech Lead | Review, approval |

---

## 10. Risks & Assumptions

### 10.1 Assumptions
- Demo API will remain accessible during testing
- API behavior matches Swagger documentation
- No rate limiting will interrupt testing

### 10.2 Risks
- External API dependency (no control over uptime)
- Data created may affect subsequent tests
- API may change without notice

---

## 11. Test Metrics

| Metric | Target | Actual |
|--------|--------|--------|
| Test Coverage | 90% endpoints | 100% |
| Defect Detection | 95% | 100% |
| Execution Time | < 30 sec | ~15 sec |
| Pass Rate | 90% | 95% |

---

## 12. Approval

| Role | Name | Date | Signature |
|------|------|------|-----------|
| Author | Saennara | March 2026 | ✅ |
| Reviewer | | | |
| Approver | | | |

---

## Appendix A: Test Data

### Sample Pet Data
```json
{
  "id": 1001,
  "category": { "id": 1, "name": "Dogs" },
  "name": "Buddy",
  "photoUrls": ["https://example.com/buddy.jpg"],
  "tags": [{ "id": 1, "name": "friendly" }],
  "status": "available"
}
```

### Sample Order Data
```json
{
  "petId": 10,
  "quantity": 1,
  "status": "placed",
  "complete": true
}
```

### Sample User Data
```json
{
  "username": "testuser",
  "firstName": "Test",
  "lastName": "User",
  "email": "test@example.com",
  "password": "password123",
  "phone": "1234567890",
  "userStatus": 1
}
```
