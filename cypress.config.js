const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    retries: {
      runMode: 1,
      openMode: 1,
    },
    env: {
      password: '',
    },
    defaultCommandTimeout: 50000,
    pageLoadTimeout: 100000,
    viewportHeight: 800,
    viewportWidth: 1500,
    chromeWebSecurity: false,
    video: false,
    experimentalNetworkStubbing: true,
    watchForFileChanges: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
     
    },
    baseUrl: 'https://dashboard.staging.myvendy.com/login',
  

  },
});
