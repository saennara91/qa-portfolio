import './commands';

Cypress.on('uncaught:exception', (err, runnable) => {
  if (err.message.includes('ResizeObserver')) {
    return false;
  }
  if (err.message.includes('uncaught exception')) {
    return false;
  }
  if (err.message.includes('Cannot read properties of undefined')) {
    return false;
  }
  if (err.message.includes('response')) {
    return false;
  }
});

before(() => {
  Cypress.env('validUsername', 'Admin');
  Cypress.env('validPassword', 'admin123');
  Cypress.env('invalidPassword', 'invalid123');
  Cypress.env('invalidUsername', 'nonexistentuser123');
});
