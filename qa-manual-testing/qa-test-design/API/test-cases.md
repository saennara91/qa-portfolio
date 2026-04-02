# API Test Cases - PetStore Swagger API

**Project**: QA API Automation - Postman & Newman  
**Module**: PetStore API  
**Date**: April 2026  
**Tester**: Naraporn Sae-saen

---

## Test Summary

| Total | Passed | Failed | Blocked |
|-------|--------|--------|---------|
| 25 | 23 | 2 | 0 |

---

## Smoke Test Cases

### TC-API-001: Health Check Endpoint
**Priority**: High  
**Pre-condition**: API server is running

| Step | Action | Expected Result | Status |
|------|--------|-----------------|--------|
| 1 | Send GET request to `/pet/1` | Response status 200 OK | ✅ PASS |
| 2 | Verify response time < 2 seconds | Response time acceptable | ✅ PASS |
| 3 | Verify response contains JSON structure | Valid JSON with id, name, category | ✅ PASS |

---

### TC-API-002: Find Available Pets
**Priority**: High  
**Pre-condition**: Pets exist with "available" status

| Step | Action | Expected Result | Status |
|------|--------|-----------------|--------|
| 1 | Send GET to `/pet/findByStatus?status=available` | Response status 200 OK | ✅ PASS |
| 2 | Verify Content-Type is application/json | Header correct | ✅ PASS |
| 3 | Verify response is an array | Array of pet objects | ✅ PASS |
| 4 | Verify all pets have status "available" | All items match criteria | ✅ PASS |

---

## Functional Test Cases

### TC-API-003: Create New Pet
**Priority**: High  
**Pre-condition**: None

| Step | Action | Expected Result | Status |
|------|--------|-----------------|--------|
| 1 | Send POST request to `/pet` with valid data | Response status 200 OK | ✅ PASS |
| 2 | Verify response contains `id` | ID is returned | ✅ PASS |
| 3 | Verify pet name matches request | Name correct | ✅ PASS |
| 4 | Verify status is "available" | Status correct | ✅ PASS |

**Test Data**:
```json
{
  "name": "TestDog",
  "category": { "id": 1, "name": "Dogs" },
  "status": "available"
}
```

---

### TC-API-004: Get Pet by ID
**Priority**: High  
**Pre-condition**: Pet with ID 10 exists

| Step | Action | Expected Result | Status |
|------|--------|-----------------|--------|
| 1 | Send GET request to `/pet/10` | Response status 200 OK | ✅ PASS |
| 2 | Verify response contains `id`, `name`, `category` | All fields present | ✅ PASS |
| 3 | Verify name is a string | Data type correct | ✅ PASS |

---

### TC-API-005: Update Pet
**Priority**: High  
**Pre-condition**: Pet with ID 10 exists

| Step | Action | Expected Result | Status |
|------|--------|-----------------|--------|
| 1 | Send PUT request to `/pet` with updated data | Response status 200 OK | ✅ PASS |
| 2 | Verify pet name is "UpdatedDog" | Name updated | ✅ PASS |
| 3 | Verify status is "available" | Status unchanged | ✅ PASS |

---

### TC-API-006: Delete Pet
**Priority**: High  
**Pre-condition**: Pet with ID 10 exists

| Step | Action | Expected Result | Status |
|------|--------|-----------------|--------|
| 1 | Send DELETE request to `/pet/10` | Response status 200 OK | ✅ PASS |
| 2 | Verify response contains `code: 200` | Deletion confirmed | ✅ PASS |
| 3 | Verify message contains pet ID | Confirmation message | ✅ PASS |

---

### TC-API-007: Place Order
**Priority**: Medium  
**Pre-condition**: Pet exists in store

| Step | Action | Expected Result | Status |
|------|--------|-----------------|--------|
| 1 | Send POST request to `/store/order` | Response status 200 OK | ✅ PASS |
| 2 | Verify response contains `id` | Order ID generated | ✅ PASS |
| 3 | Verify `status: "placed"` | Order placed | ✅ PASS |
| 4 | Store order ID for subsequent tests | Variable saved | ✅ PASS |

---

### TC-API-008: Get Store Inventory
**Priority**: Medium  
**Pre-condition**: Store has inventory

| Step | Action | Expected Result | Status |
|------|--------|-----------------|--------|
| 1 | Send GET request to `/store/inventory` | Response status 200 OK | ✅ PASS |
| 2 | Verify response is an object | Object returned | ✅ PASS |
| 3 | Verify object contains status counts | Keys like "available", "pending" | ✅ PASS |

---

### TC-API-009: Create User
**Priority**: High  
**Pre-condition**: None

| Step | Action | Expected Result | Status |
|------|--------|-----------------|--------|
| 1 | Send POST request to `/user` with valid data | Response status 200 OK | ✅ PASS |
| 2 | Verify response contains `code` | API response code | ✅ PASS |
| 3 | Verify response contains `message` | Confirmation message | ✅ PASS |

---

### TC-API-010: Get User by Username
**Priority**: High  
**Pre-condition**: User "testuser" exists

| Step | Action | Expected Result | Status |
|------|--------|-----------------|--------|
| 1 | Send GET request to `/user/testuser` | Response status 200 OK | ✅ PASS |
| 2 | Verify response contains `username`, `email`, `firstName` | User data returned | ✅ PASS |

---

### TC-API-011: Update User
**Priority**: High  
**Pre-condition**: User "testuser" exists

| Step | Action | Expected Result | Status |
|------|--------|-----------------|--------|
| 1 | Send PUT request to `/user/testuser` | Response status 200 OK | ✅ PASS |
| 2 | Verify response `code: 200` | Update confirmed | ✅ PASS |

---

### TC-API-012: Delete User
**Priority**: High  
**Pre-condition**: User "testuser" exists

| Step | Action | Expected Result | Status |
|------|--------|-----------------|--------|
| 1 | Send DELETE request to `/user/testuser` | Response status 200 OK | ✅ PASS |
| 2 | Verify response `code: 200` | Deletion confirmed | ✅ PASS |

---

## Negative Test Cases

### TC-API-013: Get Non-existent Pet
**Priority**: Medium  
**Pre-condition**: None

| Step | Action | Expected Result | Status |
|------|--------|-----------------|--------|
| 1 | Send GET request to `/pet/999999999` | API responds (200 or 404) | ✅ PASS |
| 2 | Verify response has valid structure | JSON object returned | ✅ PASS |

**Actual Result**: API returns 200 with pet object (potential data inconsistency)

---

### TC-API-014: Invalid Pet ID Format
**Priority**: Medium  
**Pre-condition**: None

| Step | Action | Expected Result | Status |
|------|--------|-----------------|--------|
| 1 | Send GET request to `/pet/invalid` | Error response (4xx/5xx) | ✅ PASS |
| 2 | Verify status code is not 200 | Error handled | ✅ PASS |

**Actual Result**: API returns 404 Not Found ✅

---

### TC-API-015: Create User - Missing Required Fields
**Priority**: Medium  
**Pre-condition**: None

| Step | Action | Expected Result | Status |
|------|--------|-----------------|--------|
| 1 | Send POST with only `id` field | API responds | ✅ PASS |
| 2 | Verify API handles gracefully | No server error | ✅ PASS |

**Actual Result**: API returns 200 (may need validation improvement)

---

### TC-API-016: Get Non-existent Order
**Priority**: Medium  
**Pre-condition**: None

| Step | Action | Expected Result | Status |
|------|--------|-----------------|--------|
| 1 | Send GET to `/store/order/999999999` | 404 Not Found | ✅ PASS |

**Actual Result**: 404 returned as expected ✅

---

### TC-API-017: Delete Non-existent User
**Priority**: Low  
**Pre-condition**: None

| Step | Action | Expected Result | Status |
|------|--------|-----------------|--------|
| 1 | Send DELETE to `/user/nonexistent123` | Error response | ✅ PASS |

**Actual Result**: 404 returned ✅

---

## Edge Case Test Cases

### TC-API-018: Concurrent Pet Creation
**Priority**: Low  
**Pre-condition**: None

| Step | Action | Expected Result | Status |
|------|--------|-----------------|--------|
| 1 | Send 5 concurrent POST requests | All succeed or proper error | ⚠️ MANUAL |

---

### TC-API-019: Special Characters in Pet Name
**Priority**: Low  
**Pre-condition**: None

| Step | Action | Expected Result | Status |
|------|--------|-----------------|--------|
| 1 | Create pet with name "Dog <script>" | Proper handling | ⚠️ MANUAL |

---

## Data-Driven Test Cases

### TC-API-020: Create Multiple Pets from CSV
**Priority**: Medium  
**Pre-condition**: CSV file with pet data

| Iteration | Pet Name | Category | Status | Result |
|-----------|----------|----------|--------|--------|
| 1 | Buddy | Dogs | available | ✅ PASS |
| 2 | Max | Cats | available | ✅ PASS |
| 3 | Bella | Dogs | pending | ✅ PASS |
| 4 | Luna | Cats | available | ✅ PASS |
| 5 | Charlie | Dogs | sold | ✅ PASS |

---

## Summary

| Category | Count | Passed | Failed |
|----------|-------|--------|--------|
| Smoke Tests | 2 | 2 | 0 |
| Functional Tests | 10 | 10 | 0 |
| Negative Tests | 5 | 5 | 0 |
| Edge Cases | 2 | 0 | 2 (manual) |
| Data-Driven | 1 | 5 | 0 |
| **Total** | **20** | **22** | **2** |

---

## Notes & Observations

1. **API Consistency**: The `/pet/{id}` endpoint for non-existent pets returns 200 instead of 404 - may need clarification with API team
2. **Response Time**: Some endpoints exceed 1 second response time - acceptable for demo API
3. **Data Persistence**: Created data does not persist between test runs (demo API behavior)
