// @ts-check
const { test, expect } = require('@playwright/test');

test('browser test', async ({ page }) => {

    await page.goto("https://admin-demo.nopcommerce.com/");

    await expect(page.getByLabel('Email:')).toHaveCount(1);
    await page.getByLabel('Email:').fill('admin@yourstore.com');


    await page.getByLabel('Password:').fill('admin');
    await page.getByRole('button', { name: 'Log in' }).click();
    
    //checking the visibility of warning
    await expect.soft(page.locator('//a[text()="Warnings"]')).not.toBeVisible();

    await expect(page.locator('(//button[text()="Year"])[1]')).toBeDisabled();

    await page.locator('//*[@id="latest-orders-card"]//button').click();

    // await page.pause();

    await expect.soft(page.locator('(//a[@href="/Admin/Order/List"])[3]')).not.toHaveText('View All Orders');

    await expect.soft(page.locator('(//h3[@class="card-title"])[2]')).toHaveAttribute('class','card-title' )
    //class="card-title"
    const element= page.locator('(//div[@class="card-body"]/a)[1]');
    expect(element).not.toContainText('Microsoft Dynamics 365 plugin');

    await expect (page).toHaveURL('https://admin-demo.nopcommerce.com/admin/');

});

test('Screenshot validation',async({page}) =>{

    await page.goto("https://admin-demo.nopcommerce.com/");

    await page.getByLabel('Email:').fill('admin@yourstore.com');

    await page.getByLabel('Password:').fill('admin');

    await expect (page).toHaveScreenshot();
})