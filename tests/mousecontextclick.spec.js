const { test, expect } = require('@playwright/test');

test('Mouse Right click', async ({ page }) => {

    await page.goto('url ');

    await page.locator('element').click({
        button:'right',
        clickCount:1
    })

    await page.locator('element').click({
        button: 'right',
        modifiers: ['Shift'],
        position: { x: 23, y: 32 },})

});

test('Mouse Double click', async ({ page }) => {

    await page.goto('url ');

    await page.locator('element').dblclick();

});

test('Mouse ', async ({ page }) => {

    await page.goto('url ');

    await page.locator('element').hover();

    // await page.mouse.

    await page.mouse.down()
});

test('Mouse drag and drop ', async ({ page }) => {

    await page.goto('https://kitchen.applitools.com/ingredients/drag-and-drop');

    const source = await page.locator('#menu-fried-chicken')
    const target = await page.locator('#plate-items li')

    await source.hover()
    await page.mouse.down()

    await target.hover()
    await page.mouse.up()

    await source.dragTo(target);

    // await source.dragTo(target);

});