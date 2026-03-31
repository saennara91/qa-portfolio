class LeavePage {
  get leaveMenuItem() {
    return cy.get('.oxd-main-menu-item').contains('Leave');
  }

  get entitlementsMenu() {
    return cy.get('.oxd-main-menu-item').contains('Entitlements');
  }

  get myLeaveOption() {
    return cy.get('.oxd-main-menu-item').contains('My Leave');
  }

  get assignLeaveOption() {
    return cy.get('.oxd-main-menu-item').contains('Assign Leave');
  }

  get leaveListOption() {
    return cy.get('.oxd-main-menu-item').contains('Leave List');
  }

  get pageHeader() {
    return cy.get('.oxd-topbar-header-title');
  }

  get addButton() {
    return cy.get('.oxd-button').contains('Add');
  }

  get fromDateInput() {
    return cy.get('.oxd-date-input').eq(0).find('input');
  }

  get toDateInput() {
    return cy.get('.oxd-date-input').eq(1).find('input');
  }

  get leaveTypeDropdown() {
    return cy.get('.oxd-select-text').first();
  }

  get leaveStatusDropdown() {
    return cy.get('.oxd-select-text').first();
  }

  get searchButton() {
    return cy.get('button[type="submit"]').contains('Search');
  }

  get resetButton() {
    return cy.get('button[type="button"]').contains('Reset');
  }

  get leaveTable() {
    return cy.get('.oxd-table');
  }

  get tableRows() {
    return cy.get('.oxd-table-body .oxd-table-row');
  }

  get employeeNameInput() {
    return cy.get('input[placeholder="Type for hints..."]').first();
  }

  get leaveBalance() {
    return cy.get('.empleave-balance-value').first();
  }

  get leaveDetails() {
    return cy.get('.empleave-widget-details');
  }

  get commentInput() {
    return cy.get('textarea[name="comment"]');
  }

  get durationDays() {
    return cy.get('input[name="leave[0][duration][days]"]');
  }

  get partialDays() {
    return cy.get('.oxd-radio-input').first();
  }

  get fromDatePicker() {
    return cy.get('.oxd-date-input').first();
  }

  get toDatePicker() {
    return cy.get('.oxd-date-input').last();
  }

  get saveButton() {
    return cy.get('button[type="submit"]').contains('Save');
  }

  get cancelButton() {
    return cy.get('button[type="button"]').contains('Cancel');
  }

  get assignButton() {
    return cy.get('button[type="submit"]').contains('Assign');
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

  get errorMessage() {
    return cy.get('.oxd-alert-content-text');
  }

  get dateRangeError() {
    return cy.contains('Should be a valid date');
  }

  get fromDateError() {
    return cy.contains('From date should be before To date');
  }

  get recordCount() {
    return cy.get('.orangehrm-horizontal-padding span');
  }

  get leaveTypeCard() {
    return cy.get('.empleave-widget');
  }

  visit() {
    cy.visit('/web/index.php/leave/viewLeaveList');
    this.waitForLeaveLoad();
  }

  waitForLeaveLoad() {
    cy.get('.oxd-topbar-header', { timeout: 10000 }).should('be.visible');
    this.leaveMenuItem.should('be.visible');
  }

  waitForLoading() {
    cy.get('body').then(($body) => {
      if ($body.find('.oxd-loading-spinner').length > 0) {
        cy.get('.oxd-loading-spinner').should('not.exist');
      }
    });
  }

  navigateToMyLeave() {
    this.leaveMenuItem.should('be.visible').click();
    this.myLeaveOption.should('be.visible').click();
    cy.url().should('include', '/leave/myLeave');
    return this;
  }

  navigateToAssignLeave() {
    cy.visit('/web/index.php/leave/assignLeave');
    cy.get('.oxd-topbar-header').should('be.visible');
    return this;
  }

  navigateToLeaveList() {
    this.leaveMenuItem.should('be.visible').click();
    this.leaveListOption.should('be.visible').click();
    cy.url().should('include', '/leave/viewLeaveList');
    return this;
  }

  selectLeaveType(type) {
    this.leaveTypeDropdown.should('be.visible').click();
    cy.get('.oxd-select-option').contains(type).should('be.visible').click();
    return this;
  }

  selectLeaveStatus(status) {
    this.leaveStatusDropdown.should('be.visible').click();
    cy.get('.oxd-select-option').contains(status).should('be.visible').click();
    return this;
  }

  enterEmployeeName(name) {
    this.employeeNameInput.should('be.visible').clear().type(name);
    cy.get('.oxd-autocomplete-option', { timeout: 10000 }).should('be.visible').first().click();
    return this;
  }

  enterFromDate(date) {
    this.fromDateInput.should('be.visible').clear().type(date);
    return this;
  }

  enterToDate(date) {
    this.toDateInput.should('be.visible').clear().type(date);
    return this;
  }

  enterComment(comment) {
    this.commentInput.should('be.visible').clear().type(comment);
    return this;
  }

  searchLeaveRecords() {
    this.searchButton.should('be.visible').click();
    return this;
  }

  resetSearch() {
    this.resetButton.should('be.visible').click();
    return this;
  }

  assignLeave() {
    this.assignButton.should('be.visible').click();
    return this;
  }

  save() {
    this.saveButton.should('be.visible').click();
    return this;
  }

  verifyLeaveInTable(employeeName) {
    cy.contains('.oxd-table-cell', employeeName).should('be.visible');
    return this;
  }

  verifyLeaveBalanceDisplayed() {
    this.leaveBalance.should('be.visible');
    return this;
  }

  verifyLeaveTypeCard(type) {
    cy.contains('.empleave-widget', type).should('be.visible');
    return this;
  }

  verifySuccessToastMessage(message) {
    this.successToast.should('be.visible');
    this.toastMessage.should('contain.text', message);
    return this;
  }

  verifyErrorToastMessage(message) {
    this.errorToast.should('be.visible');
    this.toastMessage.should('contain.text', message);
    return this;
  }

  verifyDateRangeError() {
    this.dateRangeError.should('be.visible');
    return this;
  }

  verifyFromDateBeforeToDateError() {
    this.fromDateError.should('be.visible');
    return this;
  }

  getTableRowCount() {
    return this.tableRows.then(($rows) => $rows.length);
  }

  verifyRecordsFound(count) {
    if (count === 0) {
      cy.contains('No Records Found').should('be.visible');
    } else {
      this.tableRows.should('have.length.at.least', 1);
    }
    return this;
  }

  verifyCommentInRecord(comment) {
    cy.contains('.oxd-table-cell', comment).should('be.visible');
    return this;
  }

  clickOnLeaveTypeCard(type) {
    cy.contains('.empleave-widget', type).should('be.visible').click();
    return this;
  }
}

export default new LeavePage();
