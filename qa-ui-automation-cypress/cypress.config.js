const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://opensource-demo.orangehrmlive.com',
    specPattern: 'cypress/e2e/**/*.cy.js',
    supportFile: 'cypress/support/e2e.js',
    
    viewportWidth: 1280,
    viewportHeight: 720,
    
    video: false,
    screenshotOnRunFailure: false,
    screenshotPath: 'cypress/screenshots',
    
    defaultCommandTimeout: 30000,
    pageLoadTimeout: 120000,
    requestTimeout: 30000,
    responseTimeout: 30000,
    
    retries: {
      runMode: 2,
      openMode: 0
    },
    
    env: {
      apiBaseUrl: 'https://opensource-demo.orangehrmlive.com',
      validUsername: 'Admin',
      validPassword: 'admin123',
      invalidPassword: 'invalid123',
      invalidUsername: 'nonexistent',
      employeeName: 'John Smith',
      essUsername: 'ess.user',
      adminUsername: 'Admin'
    },
    
    setupNodeEvents(on, config) {
      on('task', {
        log(message) {
          console.log(message);
          return null;
        }
      });
      return config;
    },
  },
  
  component: {
    devServer: {
      framework: 'react',
      bundler: 'webpack',
    },
  },
});
