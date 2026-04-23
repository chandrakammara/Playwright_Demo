const { defineConfig } = require('@playwright/test');
const { ENV } = require('./config/env');

module.exports = defineConfig({

  testDir: './tests',

  // Reporter setup (HTML report enabled)
  reporter: [
    ['html', { open: 'never' }]
  ],

  use: {
    baseURL: ENV.baseURL,

    // IMPORTANT: CI-safe mode
    headless: true,

    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'on-first-retry',
  },
});