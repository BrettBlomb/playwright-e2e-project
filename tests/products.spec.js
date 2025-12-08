const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
  await page.goto('https://www.saucedemo.com');
  await page.fill('[data-test="username"]', 'standard_user');
  await page.fill('[data-test="password"]', 'secret_sauce');
  await page.click('[data-test="login-button"]');
});

test('user sees a list of products', async ({ page }) => {
  const items = page.locator('.inventory_item');
  await expect(items).toHaveCount(6);
});

test('user can view a product details page', async ({ page }) => {
  await page.click('.inventory_item:first-child a');
  await expect(page.locator('.inventory_details_name')).toBeVisible();
});
