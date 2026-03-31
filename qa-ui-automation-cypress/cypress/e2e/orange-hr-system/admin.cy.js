import AdminPage from '../../pages/adminPage';
import DashboardPage from '../../pages/dashboardPage';
import LoginPage from '../../pages/loginPage';

describe('Admin Module - UI Automation', () => {
  const timestamp = Date.now();
  const testEssUsername = `ess.user.${timestamp}`;

  beforeEach(() => {
    LoginPage.visit();
    LoginPage.login(Cypress.env('validUsername'), Cypress.env('validPassword'));
  });

  it('TC-01-Add User: Create a new ESS user', () => {
    cy.visit('/web/index.php/admin/saveSystemUser');
    cy.wait(2000);
    AdminPage.selectUserRole('ESS');
    AdminPage.selectUserStatus('Enabled');
    AdminPage.enterEmployeeName('John Smith');
    AdminPage.enterUsername(testEssUsername);
    AdminPage.enterPassword('Test@1234');
    AdminPage.enterConfirmPassword('Test@1234');
    AdminPage.save();
    AdminPage.waitForLoading();
  });

  it('TC-02-Duplicate Username: Negative test for duplicate', () => {
    cy.visit('/web/index.php/admin/saveSystemUser');
    cy.wait(2000);
    AdminPage.selectUserRole('ESS');
    AdminPage.enterUsername(Cypress.env('validUsername'));
    AdminPage.enterPassword('Test@1234');
    AdminPage.enterConfirmPassword('Test@1234');
    AdminPage.save();
    AdminPage.waitForLoading();
    cy.get('.oxd-input-field-error-message, .oxd-alert, .oxd-form-error').should('exist');
  });

  it('TC-03-Organization General Info: Verify fields visible', () => {
    cy.visit('/web/index.php/admin/viewOrganizationGeneralInformation');
    cy.wait(2000);
    cy.get('input').should('exist');
  });

  it('TC-04-Add Employment Status: Create new status', () => {
    const freelanceStatus = `Freelance ${timestamp}`;
    cy.visit('/web/index.php/admin/employmentStatus');
    cy.wait(2000);
    AdminPage.clickAdd();
    cy.wait(1000);
    AdminPage.enterEmploymentStatus(freelanceStatus);
    AdminPage.save();
    AdminPage.waitForLoading();
  });

  it('TC-05-Search User by Role: Filter by Admin role', () => {
    AdminPage.visit();
    AdminPage.searchByRole('Admin');
    AdminPage.waitForLoading();
  });
});
