class DashboardPage {
  get dashboardHeader() {
    return cy.get('.oxd-topbar-header-title');
  }

  get dashboardSubtitle() {
    return cy.get('.oxd-topbar-header-breadcrumb-module');
  }

  get sidebar() {
    return cy.get('.oxd-sidepanel');
  }

  get sidebarToggle() {
    return cy.get('.oxd-sidebar-toggle');
  }

  get sidebarMenuItems() {
    return cy.get('.oxd-main-menu-item');
  }

  get timeAtWorkWidget() {
    return cy.contains('Time at Work');
  }

  get myActionsWidget() {
    return cy.contains('My Actions');
  }

  get quickLaunchWidget() {
    return cy.contains('Quick Launch');
  }

  get assignLeaveLink() {
    return cy.get('.oxd-grid-item').contains('Assign Leave');
  }

  get leaveListLink() {
    return cy.get('.oxd-grid-item').contains('Leave List');
  }

  get timesheetsLink() {
    return cy.get('.oxd-grid-item').contains('Timesheets');
  }

  get employeesOnLeaveToday() {
    return cy.contains('Employees on Leave Today');
  }

  get pendingSelfReview() {
    return cy.contains('Pending Self Review');
  }

  get welcomeText() {
    return cy.get('.oxd-userdropdown-name');
  }

  get userDropdown() {
    return cy.get('.oxd-userdropdown-tab');
  }

  get logoutOption() {
    return cy.contains('Logout');
  }

  get profileImage() {
    return cy.get('.oxd-userdropdown-img');
  }

  get loadingSpinner() {
    return cy.get('.oxd-loading-spinner');
  }

  visit() {
    cy.visit('/web/index.php/dashboard/index');
    this.waitForDashboardLoad();
  }

  waitForDashboardLoad() {
    cy.get('.oxd-topbar-header', { timeout: 10000 }).should('be.visible');
    this.dashboardHeader.should('be.visible');
  }

  waitForLoading() {
    cy.get('body').then(($body) => {
      if ($body.find('.oxd-loading-spinner').length > 0) {
        this.loadingSpinner.should('not.exist');
      }
    });
  }

  clickSidebarToggle() {
    this.sidebarToggle.should('be.visible').click();
    return this;
  }

  verifySidebarExpanded() {
    this.sidebar.should('have.class', 'expanded');
    this.sidebarMenuItems.first().should('be.visible');
    return this;
  }

  verifySidebarCollapsed() {
    this.sidebar.should('have.class', 'collapsed');
    return this;
  }

  verifyWidgetVisible(widgetName) {
    cy.contains(widgetName).should('be.visible');
    return this;
  }

  verifyAllCoreWidgets() {
    this.timeAtWorkWidget.should('be.visible');
    this.myActionsWidget.should('be.visible');
    this.quickLaunchWidget.should('be.visible');
    return this;
  }

  verifyEmployeesOnLeaveSection() {
    this.employeesOnLeaveToday.should('be.visible');
    return this;
  }

  verifyPendingSelfReviewSection() {
    this.pendingSelfReview.should('be.visible');
    return this;
  }

  clickAssignLeave() {
    this.assignLeaveLink.should('be.visible').click();
    cy.url().should('include', '/leave/assignLeave');
    return this;
  }

  clickLeaveList() {
    this.leaveListLink.should('be.visible').click();
    cy.url().should('include', '/leave/viewLeaveList');
    return this;
  }

  logout() {
    this.userDropdown.should('be.visible').click();
    this.logoutOption.should('be.visible').click();
    cy.url().should('include', '/auth/login');
  }

  verifyWelcomeMessage() {
    this.welcomeText.should('be.visible');
    return this;
  }

  getMenuItem(menuText) {
    return cy.contains('.oxd-main-menu-item', menuText);
  }

  clickMenuItem(menuText) {
    this.getMenuItem(menuText).should('be.visible').click();
    return this;
  }

  verifyMenuItemVisible(menuText) {
    this.getMenuItem(menuText).should('be.visible');
    return this;
  }
}

export default new DashboardPage();
