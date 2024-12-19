// @ts-check
const { test, expect } = require('@playwright/test');

// test('get started link', async ({ page }) => {
//     await page.goto('https://playwright.dev/');

//     // Click the get started link.
//     await page.getByRole('link', { name: 'Get started' }).click();

//     // Expects page to have a heading with the name of Installation.
//     await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });

test('browser test', async ({page}) => {
    await page.pause();
    await page.goto("https://www.saucedemo.com/");
    await page.locator("[placeholder='Username']").click();
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator("//input[@type='password']").click();-
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();
    // await page.mouse.click(100,100);
});

