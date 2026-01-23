const { expect } = require('@playwright/test');

class LoginPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;

    // Prefer locator() cached handles, using stable attributes.
    this.usernameInput = page.locator('[data-test="username"]');
    this.passwordInput = page.locator('[data-test="password"]');
    this.loginButton   = page.locator('[data-test="login-button"]');

    // Good post-login assertion target
    this.errorMessage  = page.locator('[data-test="error"]');
  }

  /**
   * Navigates to the login page.
   */
  async goto() {
    await this.page.goto('https://www.saucedemo.com/');
    await expect(this.usernameInput).toBeVisible();
  }

  /**
   * Logs in with provided credentials.
   * @param {string} username
   * @param {string} password
   */
  async login(username, password) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);

    // Click + wait for navigation in a robust way
    await Promise.all([
      this.page.waitForURL(/inventory\.html$/),
      this.loginButton.click(),
    ]);
  }
}

module.exports = { LoginPage };
