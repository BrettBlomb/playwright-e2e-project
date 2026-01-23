const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');

test('user can log in successfully (better locators + POM)', async ({ page }) => {
  const login = new LoginPage(page);

  await login.goto();
  await login.login('standard_user', 'secret_sauce');

  await expect(page).toHaveURL(/inventory\.html$/);

  // Stronger than just URL: assert an inventory page signal
  await expect(page.locator('[data-test="inventory-list"]')).toBeVisible();
});
