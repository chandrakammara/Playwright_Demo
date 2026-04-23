const { defineConfig } = require('@playwright/test');
const { ENV } = require('./config/env');

module.exports = defineConfig({
  testDir: './tests',

  use: {
    baseURL: ENV.baseURL,
    headless: false, // keep false for learning
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'on-first-retry',
  },
});