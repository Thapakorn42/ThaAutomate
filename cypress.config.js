const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

    env :{
      DEV : {
        baseUrl: 'https://dev-x.cortexcloud.co/ipd/welcome',
      },
  
      SIT : {
        baseUrl: 'https://sit-x.cortexcloud.co/ipd/welcome',
      }
    },
  },



  
});
