import { defineConfig } from "cypress";

export default defineConfig({
  // defaultCommandTimeout: 5000,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      defaultCommandTimeout: 5000
    },
  },
  component: {
    devServer: {
      framework: 'next',
      bundler: 'webpack',
    }
  }
});
