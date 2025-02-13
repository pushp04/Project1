const { test, expect } = require('@playwright/test');

test('Keyboard actions ', async ({ page }) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    await page.locator('input[name="username"]').fill('Admin');

    await page.keyboard.press('Tab');

    await page.keyboard.fill('admin123');

    await page.keyboard.press('ctrl+shift+delete')

    await page.keyboard.press('Enter');
    

});