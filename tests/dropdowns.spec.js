const { test, expect } = require('@playwright/test');

test('Dropdowns ', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    // await page.locator('#country').selectOption({label:'United Kingdom'});

    // await page.locator('#country').selectOption('United Kingdom');
    
    // await page.locator('#country').selectOption({value:'uk'});
    
    // await page.locator('#country').selectOption({index:3})

    // await page.selectOption('#country','United Kingdom');

    // page.waitForSelector('#country')
    const opt = await page.$$('#country option');


    for(let option of opt){
        let val=await option.textContent()
        if(val.includes('Germany')){   
        break;
        }
    }

    await expect(opt).toHaveCount(10);

    await page.waitForTimeout(3000);

});