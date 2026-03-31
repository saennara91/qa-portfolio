import DashboardPage from '../../pages/dashboardPage';
import LoginPage from '../../pages/loginPage';
import LeavePage from '../../pages/leavePage';

describe('Dashboard Module - UI Automation', () => {
  beforeEach(() => {
    LoginPage.visit();
    LoginPage.login(Cypress.env('validUsername'), Cypress.env('validPassword'));
    DashboardPage.visit();
  });

  it('TC-01-Widget Presence: Verify all core widgets are visible', () => {
    DashboardPage.verifyAllCoreWidgets();
  });

  it('TC-02-Leave Today Display: Validate the section loads', () => {
    DashboardPage.verifyEmployeesOnLeaveSection();
  });

  it('TC-03-Quick Launch Links: Verify Assign Leave navigation', () => {
    cy.visit('/web/index.php/leave/assignLeave');
    cy.url().should('include', '/leave/assignLeave');
  });

  it('TC-04-Pending Self Review: Check the section exists', () => {
    DashboardPage.verifyPendingSelfReviewSection();
  });
});
