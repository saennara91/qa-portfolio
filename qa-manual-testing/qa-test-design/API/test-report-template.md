# API Test Report Template

**Project**: [Project Name]  
**Test Cycle**: [Cycle Name]  
**Date**: [Date]  
**Tester**: [Name]  
**Report Version**: 1.0

---

## Executive Summary

### Overview
[Brief description of test execution scope and results]

### Key Highlights
- **Total Tests Executed**: [X]
- **Passed**: [X] ([X%])
- **Failed**: [X] ([X%])
- **Blocked**: [X] ([X%])
- **Execution Time**: [X] minutes

### Overall Status
| Status | Indicator |
|--------|-----------|
| ✅ PASS | All critical tests passed |
| ⚠️ WARNING | Minor issues found |
| ❌ FAIL | Critical failures detected |

---

## 1. Test Execution Summary

### 1.1 Test Results by Module

| Module | Total | Passed | Failed | Blocked | Pass Rate |
|--------|-------|--------|--------|---------|-----------|
| Pets API | [X] | [X] | [X] | [X] | [X%] |
| Store API | [X] | [X] | [X] | [X] | [X%] |
| Users API | [X] | [X] | [X] | [X] | [X%] |
| **Total** | **[X]** | **[X]** | **[X]** | **[X]** | **[X%]** |

### 1.2 Test Results by Type

| Test Type | Total | Passed | Failed |
|-----------|-------|--------|--------|
| Smoke Tests | [X] | [X] | [X] |
| Functional Tests | [X] | [X] | [X] |
| Negative Tests | [X] | [X] | [X] |
| Data-Driven Tests | [X] | [X] | [X] |

### 1.3 Execution Timeline

| Phase | Start Time | End Time | Duration |
|-------|------------|----------|----------|
| Setup | [HH:MM] | [HH:MM] | [X] min |
| Execution | [HH:MM] | [HH:MM] | [X] min |
| Reporting | [HH:MM] | [HH:MM] | [X] min |
| **Total** | | | **[X] min** |

---

## 2. Defect Summary

### 2.1 Defects by Severity

| Severity | Open | Closed | Total |
|----------|------|--------|-------|
| Critical | [X] | [X] | [X] |
| High | [X] | [X] | [X] |
| Medium | [X] | [X] | [X] |
| Low | [X] | [X] | [X] |
| **Total** | **[X]** | **[X]** | **[X]** |

### 2.2 Defect List

| ID | Test Case | Severity | Status | Description | Found Date |
|----|-----------|----------|--------|-------------|------------|
| DEF-001 | [TC-ID] | Medium | Open | [Description] | [Date] |
| DEF-002 | [TC-ID] | Low | Closed | [Description] | [Date] |

### 2.3 Defect Details

#### DEF-001: [Title]
- **Severity**: Medium
- **Status**: Open
- **Test Case**: [TC-ID]
- **Endpoint**: [Endpoint]
- **Expected**: [Expected behavior]
- **Actual**: [Actual behavior]
- **Evidence**: [Screenshots/logs]
- **Steps to Reproduce**:
  1. [Step 1]
  2. [Step 2]
  3. [Step 3]
- **Impact**: [Business impact]
- **Workaround**: [If any]

---

## 3. Test Coverage

### 3.1 API Coverage

| Endpoint | Methods | Covered | Not Covered |
|----------|---------|---------|------------|
| `/pet` | POST, PUT | ✅ | - |
| `/pet/{id}` | GET, DELETE | ✅ | - |
| `/pet/findByStatus` | GET | ✅ | - |
| `/store/order` | POST | ✅ | - |
| `/store/order/{id}` | GET, DELETE | ✅ | - |
| `/store/inventory` | GET | ✅ | - |
| `/user` | POST | ✅ | - |
| `/user/{username}` | GET, PUT, DELETE | ✅ | - |

**Coverage**: [X]/[X] endpoints = **100%**

### 3.2 Test Type Coverage

| Type | Count | Coverage |
|------|-------|----------|
| Positive Tests | [X] | [X%] |
| Negative Tests | [X] | [X%] |
| Boundary Tests | [X] | [X%] |
| Data Validation | [X] | [X%] |

---

## 4. Test Environment

| Component | Version | Status |
|-----------|---------|--------|
| API Base URL | [URL] | ✅ Online |
| Newman | 6.x | ✅ Configured |
| Node.js | 18+ | ✅ Installed |
| Postman | Latest | ✅ Available |

---

## 5. Risks & Issues

### 5.1 Identified Risks

| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|-----------|
| API instability | Low | Medium | Retry mechanism |
| Network issues | Low | Low | CI/CD retries |

### 5.2 Open Issues

| Issue | Owner | Target Date | Status |
|-------|-------|-------------|--------|
| [Issue] | [Name] | [Date] | In Progress |

---

## 6. Recommendations

### 6.1 Immediate Actions
1. [Action item 1]
2. [Action item 2]

### 6.2 Process Improvements
1. [Improvement 1]
2. [Improvement 2]

### 6.3 Future Testing
1. Add performance testing
2. Add security testing

---

## 7. Sign-off

| Role | Name | Date | Comments |
|------|------|------|----------|
| Tester | [Name] | [Date] | |
| Tech Lead | [Name] | [Date] | |
| Project Manager | [Name] | [Date] | |

---

## Appendix A: Test Execution Logs

```
[Test execution log output from Newman]
```

## Appendix B: Screenshots

[Screenshots of test results, defects, etc.]

## Appendix C: References

- Test Plan: [Link]
- Test Cases: [Link]
- API Documentation: [Link]
