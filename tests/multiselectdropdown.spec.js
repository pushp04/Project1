const { test, expect } = require('@playwright/test');

test('Multi select dropdown Dropdowns ', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    // await page.selectOption('#colors',['Red','Green','White']);

    const option = await page.$$('#colors option');

    for(let ele of option){
        if(ele.innerText()=='Blue' || ele.innerText()=='Yellow'){
        await ele.click();
        }
    }
    // await expect(option).toContain('Blue');


    await page.waitForTimeout(2000);

});

test.skip('test', async ({ page }) => {
  await page.goto('https://www.redbus.in/');
  await page.getByLabel('From').click();
  await page.getByLabel('From').fill('delhi');
  await page.getByRole('button', { name: ' delhi From  Delhi  ISBT' }).click();
  await page.getByLabel('To').click();
  await page.getByLabel('To').fill('dehra');
  await page.getByRole('button', { name: ' dehra To  Dehra  Dehradun' }).click();
});