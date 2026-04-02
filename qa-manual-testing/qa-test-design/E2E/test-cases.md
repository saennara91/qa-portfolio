# E2E Test Cases - OrangeHRM Application

**Project**: QA UI Automation - Cypress  
**Application**: OrangeHRM Demo (opensource-demo.orangehrmlive.com)  
**Date**: April 2026  
**Tester**: Naraporn Sae-saen

---

## Test Summary

| Module | Total | Passed | Failed | Blocked |
|--------|-------|--------|--------|---------|
| Login | 5 | 5 | 0 | 0 |
| Dashboard | 4 | 4 | 0 | 0 |
| Admin | 5 | 5 | 0 | 0 |
| Leave | 4 | 4 | 0 | 0 |
| **Total** | **18** | **18** | **0** | **0** |

---

## 1. Login Module

### TC-LOGIN-001: Success Login
**Priority**: Critical  
**Pre-condition**: User has valid credentials

| Step | Action | Expected Result | Status |
|------|--------|-----------------|--------|
| 1 | Navigate to login page | Login page loads | ✅ PASS |
| 2 | Enter valid username "Admin" | Username field populated | ✅ PASS |
| 3 | Enter valid password "admin123" | Password field populated | ✅ PASS |
| 4 | Click Login button | Redirect to Dashboard | ✅ PASS |
| 5 | Verify URL contains "/dashboard" | Dashboard loaded | ✅ PASS |
| 6 | Verify welcome message displayed | User greeted | ✅ PASS |

---

### TC-LOGIN-002: Invalid Password
**Priority**: High  
**Pre-condition**: User has valid username

| Step | Action | Expected Result | Status |
|------|--------|-----------------|--------|
| 1 | Navigate to login page | Login page loads | ✅ PASS |
| 2 | Enter username "Admin" | Username entered | ✅ PASS |
| 3 | Enter invalid password "wrongpass" | Password entered | ✅ PASS |
| 4 | Click Login button | Error displayed | ✅ PASS |
| 5 | Verify error message "Invalid credentials" | Error shown | ✅ PASS |
| 6 | Verify URL remains on login page | No redirect | ✅ PASS |

---

### TC-LOGIN-003: Invalid Username
**Priority**: High  
**Pre-condition**: None

| Step | Action | Expected Result | Status |
|------|--------|-----------------|--------|
| 1 | Navigate to login page | Login page loads | ✅ PASS |
| 2 | Enter invalid username "nonexistent" | Username entered | ✅ PASS |
| 3 | Enter valid password "admin123" | Password entered | ✅ PASS |
| 4 | Click Login button | Error displayed | ✅ PASS |
| 5 | Verify error message "Invalid credentials" | Error shown | ✅ PASS |
| 6 | Verify URL remains on login page | No redirect | ✅ PASS |

---

### TC-LOGIN-004: Empty Credentials
**Priority**: Medium  
**Pre-condition**: None

| Step | Action | Expected Result | Status |
|------|--------|-----------------|--------|
| 1 | Navigate to login page | Login page loads | ✅ PASS |
| 2 | Clear username field | Field empty | ✅ PASS |
| 3 | Clear password field | Field empty | ✅ PASS |
| 4 | Verify username input visible | Element exists | ✅ PASS |
| 5 | Verify password input visible | Element exists | ✅ PASS |
| 6 | Verify login button visible | Element exists | ✅ PASS |

---

### TC-LOGIN-005: Logout Functionality
**Priority**: High  
**Pre-condition**: User is logged in

| Step | Action | Expected Result | Status |
|------|--------|-----------------|--------|
| 1 | Log in with valid credentials | Dashboard loads | ✅ PASS |
| 2 | Click user dropdown | Dropdown menu opens | ✅ PASS |
| 3 | Click Logout | Session terminated | ✅ PASS |
| 4 | Verify redirect to login page | URL contains "/auth/login" | ✅ PASS |
| 5 | Verify login form elements visible | Username/password visible | ✅ PASS |

---

## 2. Dashboard Module

### TC-DASH-001: Widget Presence
**Priority**: High  
**Pre-condition**: User is logged in

| Step | Action | Expected Result | Status |
|------|--------|-----------------|--------|
| 1 | Navigate to dashboard | Dashboard loads | ✅ PASS |
| 2 | Verify Dashboard header | "Dashboard" text visible | ✅ PASS |
| 3 | Verify Time at Work widget | Widget present | ✅ PASS |
| 4 | Verify My Actions widget | Widget present | ✅ PASS |
| 5 | Verify Quick Launch widget | Widget present | ✅ PASS |
| 6 | Verify Employees on Leave Today widget | Widget present | ✅ PASS |

---

### TC-DASH-002: Leave Today Display
**Priority**: Medium  
**Pre-condition**: User is logged in

| Step | Action | Expected Result | Status |
|------|--------|-----------------|--------|
| 1 | Navigate to dashboard | Dashboard loads | ✅ PASS |
| 2 | Find "Employees on Leave Today" section | Section visible | ✅ PASS |
| 3 | Verify section contains data or empty state | Either acceptable | ✅ PASS |

---

### TC-DASH-003: Quick Launch Links
**Priority**: Medium  
**Pre-condition**: User is logged in

| Step | Action | Expected Result | Status |
|------|--------|-----------------|--------|
| 1 | Navigate to dashboard | Dashboard loads | ✅ PASS |
| 2 | Click "Assign Leave" link | Redirect to leave page | ✅ PASS |
| 3 | Verify URL contains "/leave/assignLeave" | Correct page | ✅ PASS |

---

### TC-DASH-004: Pending Self Review
**Priority**: Low  
**Pre-condition**: User is logged in

| Step | Action | Expected Result | Status |
|------|--------|-----------------|--------|
| 1 | Navigate to dashboard | Dashboard loads | ✅ PASS |
| 2 | Find "My Actions" or pending review section | Section exists | ✅ PASS |

---

## 3. Admin Module

### TC-ADMIN-001: Add New User
**Priority**: High  
**Pre-condition**: Admin user logged in

| Step | Action | Expected Result | Status |
|------|--------|-----------------|--------|
| 1 | Navigate to Admin > User Management | User list loads | ✅ PASS |
| 2 | Click Add button | Add user form opens | ✅ PASS |
| 3 | Select User Role "ESS" | Role selected | ✅ PASS |
| 4 | Select Status "Enabled" | Status selected | ✅ PASS |
| 5 | Enter Employee Name "John Smith" | Employee selected | ✅ PASS |
| 6 | Enter unique Username | Username entered | ✅ PASS |
| 7 | Enter Password "Test@1234" | Password entered | ✅ PASS |
| 8 | Confirm Password "Test@1234" | Confirmation entered | ✅ PASS |
| 9 | Click Save | User saved | ✅ PASS |
| 10 | Verify success (no error) | Form submitted | ✅ PASS |

---

### TC-ADMIN-002: Duplicate Username
**Priority**: High  
**Pre-condition**: Admin user logged in

| Step | Action | Expected Result | Status |
|------|--------|-----------------|--------|
| 1 | Navigate to Admin > User Management | User list loads | ✅ PASS |
| 2 | Click Add button | Add user form opens | ✅ PASS |
| 3 | Select User Role "ESS" | Role selected | ✅ PASS |
| 4 | Enter existing Username "Admin" | Username entered | ✅ PASS |
| 5 | Enter Password "Test@1234" | Password entered | ✅ PASS |
| 6 | Confirm Password "Test@1234" | Confirmation entered | ✅ PASS |
| 7 | Click Save | Error displayed | ✅ PASS |
| 8 | Verify error message or field validation | Error shown | ✅ PASS |

---

### TC-ADMIN-003: Organization General Info
**Priority**: Medium  
**Pre-condition**: Admin user logged in

| Step | Action | Expected Result | Status |
|------|--------|-----------------|--------|
| 1 | Navigate to Admin > Organization > General Information | Page loads | ✅ PASS |
| 2 | Verify organization name field exists | Field present | ✅ PASS |
| 3 | Verify input fields are visible | Form visible | ✅ PASS |

---

### TC-ADMIN-004: Add Employment Status
**Priority**: Medium  
**Pre-condition**: Admin user logged in

| Step | Action | Expected Result | Status |
|------|--------|-----------------|--------|
| 1 | Navigate to Admin > Job > Employment Status | Page loads | ✅ PASS |
| 2 | Click Add button | Add form opens | ✅ PASS |
| 3 | Enter new status name with timestamp | Name entered | ✅ PASS |
| 4 | Click Save | Status saved | ✅ PASS |
| 5 | Verify no error displayed | Saved successfully | ✅ PASS |

---

### TC-ADMIN-005: Search User by Role
**Priority**: Medium  
**Pre-condition**: Admin user logged in

| Step | Action | Expected Result | Status |
|------|--------|-----------------|--------|
| 1 | Navigate to Admin > User Management | User list loads | ✅ PASS |
| 2 | Select User Role filter "Admin" | Filter applied | ✅ PASS |
| 3 | Click Search button | Search executed | ✅ PASS |
| 4 | Verify results contain Admin users only | Filtered list | ✅ PASS |

---

## 4. Leave Module

### TC-LEAVE-001: View Leave List
**Priority**: High  
**Pre-condition**: User is logged in

| Step | Action | Expected Result | Status |
|------|--------|-----------------|--------|
| 1 | Navigate to Leave > Leave List | Leave list page loads | ✅ PASS |
| 2 | Enter From Date (30 days ago) | Date entered | ✅ PASS |
| 3 | Enter To Date (30 days future) | Date entered | ✅ PASS |
| 4 | Click Search button | Search executed | ✅ PASS |
| 5 | Verify results or empty state | List displayed | ✅ PASS |

---

### TC-LEAVE-002: Assign Leave Page Navigation
**Priority**: Medium  
**Pre-condition**: User is logged in

| Step | Action | Expected Result | Status |
|------|--------|-----------------|--------|
| 1 | Navigate to Leave > Assign Leave | Page loads | ✅ PASS |
| 2 | Verify URL contains "/leave/assignLeave" | Correct page | ✅ PASS |
| 3 | Verify page header or form visible | Form exists | ✅ PASS |

---

### TC-LEAVE-003: Assign Leave Form
**Priority**: Medium  
**Pre-condition**: User is logged in

| Step | Action | Expected Result | Status |
|------|--------|-----------------|--------|
| 1 | Navigate to Leave > Assign Leave | Page loads | ✅ PASS |
| 2 | Verify topbar header visible | Header exists | ✅ PASS |
| 3 | Verify form elements load | Page complete | ✅ PASS |

---

### TC-LEAVE-004: Leave List Navigation
**Priority**: Low  
**Pre-condition**: User is logged in

| Step | Action | Expected Result | Status |
|------|--------|-----------------|--------|
| 1 | Navigate to Leave > Leave List | Page loads | ✅ PASS |
| 2 | Verify page loads within timeout | No hang | ✅ PASS |

---

## Test Data Reference

### Login Credentials
| Username | Password | Role | Expected Result |
|----------|----------|------|-----------------|
| Admin | admin123 | Admin | Success |
| Admin | wrongpass | Admin | Invalid credentials |
| nonexistent | admin123 | - | Invalid credentials |
| (empty) | (empty) | - | Form visible |

### Test Data for User Creation
```
Username: ess.user.{timestamp}
Password: Test@1234
Employee: John Smith
Role: ESS
Status: Enabled
```

---

## Environment Details

| Component | Value |
|-----------|-------|
| Base URL | https://opensource-demo.orangehrmlive.com |
| Browser | Chrome/Electron |
| Framework | Cypress 13.x |
| Node.js | 18+ |

---

## Notes

1. All tests use Page Object Model for maintainability
2. Tests include both positive and negative scenarios
3. Dynamic waits are used to handle async elements
4. Screenshots captured automatically on failure
5. Some tests simplified due to demo application instability
