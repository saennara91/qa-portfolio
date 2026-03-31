class AdminPage {
  get adminMenuItem() {
    return cy.get('.oxd-main-menu-item').contains('Admin');
  }

  get userManagementMenu() {
    return cy.get('.oxd-main-menu-item').contains('User Management');
  }

  get usersOption() {
    return cy.get('.oxd-main-menu-item').contains('Users');
  }

  get jobMenu() {
    return cy.get('.oxd-main-menu-item').contains('Job');
  }

  get employmentStatusOption() {
    return cy.get('.oxd-main-menu-item').contains('Employment Status');
  }

  get organizationMenu() {
    return cy.get('.oxd-main-menu-item').contains('Organization');
  }

  get generalInfoOption() {
    return cy.get('.oxd-main-menu-item').contains('General Information');
  }

  get pageHeader() {
    return cy.get('.oxd-topbar-header-title');
  }

  get addButton() {
    return cy.get('.oxd-button').contains('Add');
  }

  get searchInput() {
    return cy.get('input[placeholder="Type for hints..."]').first();
  }

  get searchButton() {
    return cy.get('button[type="submit"]').contains('Search');
  }

  get resetButton() {
    return cy.get('button[type="button"]').contains('Reset');
  }

  get recordCount() {
    return cy.get('.orangehrm-horizontal-padding span');
  }

  get userTable() {
    return cy.get('.oxd-table');
  }

  get tableRows() {
    return cy.get('.oxd-table-body .oxd-table-row');
  }

  get firstTableRow() {
    return cy.get('.oxd-table-body .oxd-table-row').first();
  }

  get usernameColumn() {
    return cy.get('.oxd-table-cell').contains('.oxd-table-cell').eq(2);
  }

  get roleColumn() {
    return cy.get('.oxd-table-cell').contains('.oxd-table-cell').eq(3);
  }

  get statusColumn() {
    return cy.get('.oxd-table-cell').contains('.oxd-table-cell').eq(4);
  }

  get deleteButton() {
    return cy.get('.oxd-icon-button').contains('.bi-trash');
  }

  get confirmDeleteButton() {
    return cy.get('.oxd-button--label-danger');
  }

  get successToast() {
    return cy.get('.oxd-toast--success');
  }

  get errorToast() {
    return cy.get('.oxd-toast--error');
  }

  get toastMessage() {
    return cy.get('.oxd-toast-content-text');
  }

  get userRoleDropdown() {
    return cy.get('.oxd-select-text').first();
  }

  get userStatusDropdown() {
    return cy.get('.oxd-select-text').eq(1);
  }

  get employeeNameInput() {
    return cy.get('input[placeholder="Type for hints..."]');
  }

  get usernameInput() {
    return cy.get('.oxd-form input').eq(0);
  }

  get passwordInput() {
    return cy.get('.oxd-form input[type="password"]').first();
  }

  get confirmPasswordInput() {
    return cy.get('.oxd-form input[type="password"]').last();
  }

  get saveButton() {
    return cy.get('button[type="submit"]').contains('Save');
  }

  get cancelButton() {
    return cy.get('button[type="button"]').contains('Cancel');
  }

  get requiredFieldError() {
    return cy.get('.oxd-input-field-error-message');
  }

  get duplicateUsernameError() {
    return cy.contains('Already exists');
  }

  get organizationNameInput() {
    return cy.get('input[name="organizationName"]', { timeout: 15000 }).should('exist');
  }

  get taxIdInput() {
    return cy.get('input[name="taxId"]', { timeout: 15000 }).should('exist');
  }

  get employmentStatusTable() {
    return cy.get('.oxd-table');
  }

  get newEmploymentStatusInput() {
    return cy.get('.oxd-form input').first();
  }

  visit() {
    cy.visit('/web/index.php/admin/viewSystemUsers');
    this.waitForAdminLoad();
  }

  waitForAdminLoad() {
    cy.get('.oxd-topbar-header', { timeout: 10000 }).should('be.visible');
    this.adminMenuItem.should('be.visible');
  }

  waitForLoading() {
    cy.get('body').then(($body) => {
      if ($body.find('.oxd-loading-spinner').length > 0) {
        cy.get('.oxd-loading-spinner').should('not.exist');
      }
    });
  }

  navigateToUserManagement() {
    this.userManagementMenu.should('be.visible').click();
    this.usersOption.should('be.visible').click();
    cy.url().should('include', '/admin/viewSystemUsers');
    return this;
  }

  navigateToEmploymentStatus() {
    this.jobMenu.should('be.visible').click();
    this.employmentStatusOption.should('be.visible').click();
    cy.url().should('include', '/admin/employmentStatus');
    return this;
  }

  navigateToGeneralInfo() {
    this.organizationMenu.should('be.visible').click();
    this.generalInfoOption.should('be.visible').click();
    cy.url().should('include', '/admin/viewOrganizationGeneralInformation');
    return this;
  }

  clickAdd() {
    this.addButton.should('be.visible').click();
    cy.wait(1000);
    cy.get('.oxd-form, .orangehrm-modal-container, form').should('exist');
    cy.wait(500);
    return this;
  }

  selectUserRole(role) {
    this.userRoleDropdown.should('be.visible').click();
    cy.get('.oxd-select-option').contains(role).should('be.visible').click();
    return this;
  }

  selectUserStatus(status) {
    this.userStatusDropdown.should('be.visible').click();
    cy.get('.oxd-select-option').contains(status).should('be.visible').click();
    return this;
  }

  enterEmployeeName(name) {
    this.employeeNameInput.should('be.visible').clear().type(name);
    cy.get('.oxd-autocomplete-option', { timeout: 10000 }).should('be.visible').first().click();
    return this;
  }

  enterUsername(username) {
    cy.get('.oxd-form').then(($form) => {
      const inputs = $form.find('input');
      cy.wrap(inputs.first()).should('be.visible').clear().type(username);
    });
    return this;
  }

  enterPassword(password) {
    this.passwordInput.should('be.visible').clear().type(password);
    return this;
  }

  enterConfirmPassword(password) {
    this.confirmPasswordInput.should('be.visible').clear().type(password);
    return this;
  }

  searchByUsername(username) {
    this.usernameInput.should('be.visible').clear().type(username);
    this.searchButton.should('be.visible').click();
    return this;
  }

  searchByRole(role) {
    this.userRoleDropdown.should('be.visible').click();
    cy.get('.oxd-select-option').contains(role).should('be.visible').click();
    this.searchButton.should('be.visible').click();
    return this;
  }

  resetSearch() {
    this.resetButton.should('be.visible').click();
    return this;
  }

  verifyUserInTable(username) {
    cy.contains('.oxd-table-cell', username).should('be.visible');
    return this;
  }

  verifyUserNotInTable(username) {
    cy.get('body').then(($body) => {
      if ($body.find('.oxd-table-cell').text().includes(username)) {
        expect($body.find('.oxd-table-cell')).to.not.contain(username);
      }
    });
    return this;
  }

  verifyRecordCountGreaterThanZero() {
    cy.get('.orangehrm-horizontal-padding').should(($span) => {
      const text = $span.text();
      const match = text.match(/\((\d+)\)/);
      if (match) {
        expect(parseInt(match[1])).to.be.greaterThan(0);
      }
    });
    return this;
  }

  verifyToastMessage(message) {
    this.successToast.should('be.visible');
    this.toastMessage.should('contain.text', message);
    return this;
  }

  verifyErrorMessage(message) {
    this.errorToast.should('be.visible');
    this.toastMessage.should('contain.text', message);
    return this;
  }

  getTableRowCount() {
    return this.tableRows.then(($rows) => $rows.length);
  }

  verifyOrganizationInfo(name, taxId) {
    this.organizationNameInput.should('have.value', name);
    this.taxIdInput.should('have.value', taxId);
    return this;
  }

  enterEmploymentStatus(status) {
    this.newEmploymentStatusInput.should('be.visible').clear().type(status);
    return this;
  }

  verifyEmploymentStatusInTable(status) {
    cy.contains('.oxd-table-cell', status).should('be.visible');
    return this;
  }

  save() {
    this.saveButton.should('be.visible').click();
    return this;
  }

  cancel() {
    this.cancelButton.should('be.visible').click();
    return this;
  }
}

export default new AdminPage();
