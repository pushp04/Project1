const { test, expect } = require('@playwright/test');

test('radio buttons', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');
    
    await page.pause();

    // await page.locator('#male').click();
    await page.locator('#male').check();
    
    
    // await expect(await page.locator('#male')).toBeChecked();
    // await expect(await page.locator('#male').isChecked).toBeFalsy();
    // await expect(await page.locator('#female').isChecked).toBeFalsy();

    
    // await page.waitForTimeout(5000);


});
