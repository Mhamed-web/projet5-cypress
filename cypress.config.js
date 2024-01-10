const { defineConfig } = require("cypress");
const createBundler = require ("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin = require ("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin ;

module.exports = defineConfig({
  projectId : "atejmu" ,
  e2e: {
    async setupNodeEvents(on, config) {
      const bundler = createBundler({
        plugins: [createEsbuildPlugin(config)],
      }) 
      on("file:preprocessor",bundler);
      await addCucumberPreprocessorPlugin(on,config);

      return config ;
      // implement node event listeners here
    },
    specPattern :["cypress/e2e/**/*.{js,jsx,ts,tsx,feature}", "cypress/e2e/**/*.cy.{js,jsx,ts,tsx,feature}"],    
  }
});
