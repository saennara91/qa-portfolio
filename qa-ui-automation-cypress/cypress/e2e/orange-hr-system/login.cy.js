import LoginPage from '../../pages/loginPage';
import DashboardPage from '../../pages/dashboardPage';

describe('Login Module - UI Automation', () => {
  beforeEach(() => {
    cy.visit('/web/index.php/auth/login');
    LoginPage.logo.should('be.visible');
  });

  it('TC-01-Success Login: Authenticate with valid credentials and verify dashboard redirection', () => {
    const username = Cypress.env('validUsername');
    const password = Cypress.env('validPassword');

    LoginPage.enterUsername(username);
    LoginPage.enterPassword(password);
    LoginPage.clickLogin();

    DashboardPage.waitForDashboardLoad();
    DashboardPage.dashboardHeader.should('contain.text', 'Dashboard');
    cy.url().should('include', '/dashboard/index');
    DashboardPage.verifyWelcomeMessage();
  });

  it('TC-02-Invalid Password: Attempt login with correct username but wrong password', () => {
    const username = Cypress.env('validUsername');
    const password = Cypress.env('invalidPassword');

    LoginPage.enterUsername(username);
    LoginPage.enterPassword(password);
    LoginPage.clickLogin();

    LoginPage.verifyErrorMessage('Invalid credentials');
    cy.url().should('include', '/auth/login');
  });

  it('TC-03-Invalid Username: Attempt login with non-existent username', () => {
    const username = Cypress.env('invalidUsername');
    const password = Cypress.env('validPassword');

    LoginPage.enterUsername(username);
    LoginPage.enterPassword(password);
    LoginPage.clickLogin();

    LoginPage.verifyErrorMessage('Invalid credentials');
    cy.url().should('include', '/auth/login');
  });

  it('TC-04-Empty Credentials: Verify login form elements', () => {
    LoginPage.usernameInput.should('be.visible');
    LoginPage.passwordInput.should('be.visible');
    LoginPage.loginButton.should('be.visible');
  });

  it('TC-05-Logout Functionality: Log in successfully and then log out to verify session termination', () => {
    const username = Cypress.env('validUsername');
    const password = Cypress.env('validPassword');

    LoginPage.login(username, password);
    DashboardPage.waitForDashboardLoad();

    DashboardPage.logout();

    cy.url().should('include', '/auth/login');
    LoginPage.logo.should('be.visible');
    LoginPage.usernameInput.should('be.visible');
    LoginPage.passwordInput.should('be.visible');
  });
});
