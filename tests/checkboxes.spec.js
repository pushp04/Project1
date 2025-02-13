const { test, expect } = require('@playwright/test');

test('radio buttons', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    // await page.pause();

    //label[contains(text(),'Days:')]/../div//input
    // await page.locator('#sunday').check();
    // await page.locator('#sunday').click();
    //  await expect(await page.locator('#sunday')).toBeChecked();
    // await expect(await page.locator('#friday').isChecked()).toBeFalsy();

    //multi Select checkboxes
    // const days=['#sunday','#monday','#friday','#saturday']
    // for(const day of days){
    //     await page.locator(day).check();
    // }

    // for(const day of days){
    //     await page.locator(day).uncheck();
    // }

    const week = await page.$$("//label[contains(text(),'Days:')]/../div//input")

    for (let ele of week) {
        await ele.check();
    }

    for (let ele of week) {
        await ele.uncheck();
    }
    await page.waitForTimeout(5000);

});