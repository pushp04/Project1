const { test, expect } = require('@playwright/test');

test('alets with Confirm/OK ', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');
    //Enable alert handle
    // page.on('Dialog with OK', dialog => dialog.accept());    
    page.on('Dialog with OK', async dialog =>{
        expect(dialog.message()).toContain('I am an alert box!')
        await dialog.accept();
    })

    await page.click('#alertBtn');

    await page.waitForTimeout(2000);

});

test('alets OK and Cancel ', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');
    //Enable alert handle
    // page.on('Dialog with OK', dialog => dialog.accept());    
    page.on('Dialog with ok/cancel', async dialog =>{
        expect(dialog.message()).toContain('Press a button!')
        await dialog.accept();
    })

    await page.click('#confirmBtn');

    await expect(page.locator('#demo')).toHaveText('You pressed OK!')

    // await page.waitForTimeout(2000);

});

test.only('alets OK and Cancel ', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');
    //Enable alert handle
    // page.on('Dialog with OK', dialog => dialog.accept());    
    page.on('Dialog with ok/cancel', async dialog =>{
        expect(dialog.defaultVale()).toContain('Harry Potter')
        await dialog.accept('prompt handle');
    })

    await page.click('#promptBtn');

    await expect(page.locator('#demo')).toHaveText('Hello hello! How are you today?')

    // await page.waitForTimeout(2000);

});