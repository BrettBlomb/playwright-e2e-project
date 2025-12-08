// playwright.config.js
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  timeout: 30000,
  retries: 1,
  use: {
    headless: true,
    screenshot: 'on',
    video: 'on'
  },
  reporter: [["html", { outputFolder: "playwright-report" }]],
});
