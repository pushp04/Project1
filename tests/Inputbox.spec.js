
const { test, expect } = require('@playwright/test');

test.describe('Login page tests',() =>  {

//Hooks

test.beforeEach(async({page}) =>{

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

})

test('username feild test', async ({ page }) => {

    
    await expect(await page.getByPlaceholder('Username')).toBeVisible();
    await expect(await page.getByPlaceholder('Username')).toBeEmpty();
    await expect(await page.getByPlaceholder('Username')).toBeEnabled();
    await expect(await page.getByPlaceholder('Username')).toBeEditable();

    await page.fill('//input[@name="username"]','Admin');
    // await page.fill('//input[@type="password"]','admin123')
    // await page.getByPlaceholder('Username').fill('Admin');
    // await page.getByPlaceholder('Password').fill('admin123');
    // await page.getByRole('button', { name: 'Login' }).click();
    // await page.pause();
});

test('password feild test', async ({ page }) => {
    
    await expect(await page.getByPlaceholder('Password')).toBeVisible();
    await expect(await page.getByPlaceholder('Password')).toBeEmpty();
    await expect(await page.getByPlaceholder('Password')).toBeEnabled();
    await expect(await page.getByPlaceholder('Password')).toBeEditable();

    await page.fill('//input[@type="password"]','admin123');
    
    // await page.pause();


});

test.afterEach(async({page}) => {
    await page.close();
})

})

test('Random test',async({page})=>{
    console.log("No page.goto()")
})
