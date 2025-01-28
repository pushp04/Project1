// @ts-check
const { test, expect } = require('@playwright/test');

test('Login Test', async ({ page }) => {
    await page.pause();
    await page.goto('https://www.saucedemo.com/');
    // await page.getByPlaceholder('Username').fill('standard_user');
    // await page.getByPlaceholder('Password').fill('secret_sauce');

    // await page.locator('[id="user-name"]').fill('standard_user');
    // await page.locator('[name="password"]').fill('secret_sauce');

    await page.locator('[placeholder="Username"]').fill('standard_user');
    await page.locator('//input[@placeholder="Password"]').fill('secret_sauce');


    await page.locator('#login-button').click();
    await expect(page.locator('[placeholder="Username"]')).toBeVisible();

});