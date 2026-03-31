class LoginPage {
  get usernameInput() {
    return cy.get('input[name="username"]');
  }

  get passwordInput() {
    return cy.get('input[name="password"]');
  }

  get loginButton() {
    return cy.get('button[type="submit"]');
  }

  get errorMessage() {
    return cy.get('.oxd-alert-content-text');
  }

  get forgotPasswordLink() {
    return cy.contains('Forgot your password?');
  }

  get logo() {
    return cy.get('.orangehrm-login-branding');
  }

  get loginPanelTitle() {
    return cy.get('.oxd-text--h5');
  }

  visit() {
    cy.visit('/web/index.php/auth/login');
    this.logo.should('be.visible');
    this.loginPanelTitle.should('contain.text', 'Login');
  }

  enterUsername(username) {
    this.usernameInput.should('be.visible').clear().type(username, { delay: 50 });
    return this;
  }

  enterPassword(password) {
    this.passwordInput.should('be.visible').clear().type(password, { delay: 50 });
    return this;
  }

  clickLogin() {
    this.loginButton.should('be.visible').click();
    return this;
  }

  login(username, password) {
    this.enterUsername(username);
    this.enterPassword(password);
    this.clickLogin();
  }

  clearCredentials() {
    this.usernameInput.clear();
    this.passwordInput.clear();
    return this;
  }

  verifyErrorMessage(message) {
    this.errorMessage.should('contain.text', message);
    return this;
  }

  verifyUsernameFieldRequired() {
    this.usernameInput.then(($input) => {
      expect($input).to.have.attr('required');
    });
    return this;
  }

  verifyPasswordFieldRequired() {
    this.passwordInput.then(($input) => {
      expect($input).to.have.attr('required');
    });
    return this;
  }
}

export default new LoginPage();
