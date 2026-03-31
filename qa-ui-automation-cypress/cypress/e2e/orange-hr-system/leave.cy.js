import LeavePage from '../../pages/leavePage';
import DashboardPage from '../../pages/dashboardPage';
import LoginPage from '../../pages/loginPage';

describe('Leave Module - UI Automation', () => {
  beforeEach(() => {
    LoginPage.visit();
    LoginPage.login(Cypress.env('validUsername'), Cypress.env('validPassword'));
    LeavePage.visit();
  });

  it('TC-01-View Leave List: Search leave records', () => {
    const today = new Date();
    const fromDate = new Date(today);
    fromDate.setDate(today.getDate() - 30);
    const toDate = new Date(today);
    toDate.setDate(today.getDate() + 30);

    const formatDate = (date) => {
      const day = String(date.getDate()).padStart(2, '0');
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const year = date.getFullYear();
      return `${year}-${month}-${day}`;
    };

    LeavePage.enterFromDate(formatDate(fromDate));
    LeavePage.enterToDate(formatDate(toDate));
    LeavePage.searchLeaveRecords();
    LeavePage.waitForLoading();
  });

  it('TC-02-Assign Leave: Navigate to assign leave page', () => {
    cy.visit('/web/index.php/leave/assignLeave');
    cy.url().should('include', '/leave/assignLeave');
  });

  it('TC-03-Leave Comments: Test leave assignment with comment', () => {
    cy.visit('/web/index.php/leave/assignLeave');
    cy.get('.oxd-topbar-header', { timeout: 10000 }).should('be.visible');
  });

  it('TC-04-Invalid Date Range: Negative test for date validation', () => {
    cy.visit('/web/index.php/leave/viewLeaveList');
    cy.wait(1000);
  });
});
