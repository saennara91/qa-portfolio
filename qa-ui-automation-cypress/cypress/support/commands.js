Cypress.Commands.add('login', (username, password) => {
  cy.visit('/web/index.php/auth/login');
  cy.get('input[name="username"]').should('be.visible').type(username, { log: false });
  cy.get('input[name="password"]').should('be.visible').type(password, { log: false });
  cy.get('button[type="submit"]').should('be.visible').click();
  cy.url({ timeout: 30000 }).should('include', '/dashboard/index', { log: false });
  cy.get('.oxd-topbar-header', { timeout: 15000 }).should('be.visible');
});

Cypress.Commands.add('logout', () => {
  cy.get('html').then(() => {
    cy.document().then((doc) => {
      if (doc.querySelector('.oxd-userdropdown-tab')) {
        cy.get('.oxd-userdropdown-tab').should('exist').click({ force: true });
        cy.get('.oxd-dropdown-menu').contains('Logout').should('exist').click({ force: true });
        cy.url({ timeout: 10000 }).should('include', '/auth/login');
      }
    });
  });
});

Cypress.Commands.add('waitForElement', { prevSubject: 'element' }, (subject, options = {}) => {
  const { timeout = 10000, state = 'exist' } = options;
  cy.wrap(subject, { timeout }).should(state === 'visible' ? 'be.visible' : 'exist');
});

Cypress.Commands.add('clickElement', { prevSubject: 'element' }, (subject) => {
  cy.wrap(subject).should('be.visible').click();
});

Cypress.Commands.add('clearAndType', { prevSubject: 'element' }, (subject, text) => {
  cy.wrap(subject).should('be.visible').clear().type(text);
});

Cypress.Commands.add('verifyElementVisible', { prevSubject: 'element' }, (subject, timeout = 10000) => {
  cy.wrap(subject, { timeout }).should('be.visible');
});

Cypress.Commands.add('verifyElementContain', { prevSubject: 'element' }, (subject, text) => {
  cy.wrap(subject).should('contain.text', text);
});

Cypress.Commands.add('verifyUrlContains', (text) => {
  cy.url().should('include', text);
});

Cypress.Commands.add('waitForUrl', (urlPart, timeout = 10000) => {
  cy.url({ timeout }).should('include', urlPart);
});

Cypress.Commands.add('getElement', (selector, options = {}) => {
  const { timeout = 10000, state = 'attached' } = options;
  return cy.get(selector, { timeout }).should(state === 'visible' ? 'be.visible' : state);
});

Cypress.Commands.add('verifyTextInElement', (selector, text) => {
  cy.get(selector).should('contain.text', text);
});

Cypress.Commands.add('selectOption', (dropdownSelector, optionText) => {
  cy.get(dropdownSelector).should('be.visible').click();
  cy.get('.oxd-select-option').contains(optionText).should('be.visible').click();
});

Cypress.Commands.add('selectAutocompleteOption', (inputSelector, optionText) => {
  cy.get(inputSelector).should('be.visible').clear().type(optionText);
  cy.get('.oxd-autocomplete-option').contains(optionText).should('be.visible').click();
});

Cypress.Commands.add('verifyToastMessage', (message) => {
  cy.get('.oxd-toast--success').should('be.visible');
  cy.get('.oxd-toast-content-text').should('contain.text', message);
});

Cypress.Commands.add('verifyErrorToastMessage', (message) => {
  cy.get('.oxd-toast--error').should('be.visible');
  cy.get('.oxd-toast-content-text').should('contain.text', message);
});

Cypress.Commands.add('waitForPageLoad', () => {
  cy.get('body').then(($body) => {
    if ($body.find('.oxd-loading-spinner').length > 0) {
      cy.get('.oxd-loading-spinner').should('not.exist');
    }
  });
  cy.document().should('have.property', 'readyState', 'complete');
});

Cypress.Commands.add('takeScreenshot', (name) => {
  cy.screenshot(name || `screenshot-${Date.now()}`);
});
