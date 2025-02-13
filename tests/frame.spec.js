const { test, expect } = require('@playwright/test');

test('frame', async ({ page }) => {

    await page.goto('https://ui.vision/demo/webtest/frames/');

    const tframe = await page.frames()
    console.log(tframe.length)
    for(let fr of tframe){
        console.log(await fr.title())
    }
    
    await page.frame({ url : 'https://ui.vision/demo/webtest/frames/frame_4.html'}).locator('name="mytext1"').fill('Test Frame 1 Input')

    // const frame1 = await page.frame({ url : 'https://ui.vision/demo/webtest/frames/frame_1.html'})
    // frame1.fill('name="mytext1"','Test Frame 1 Input')

    await page.waitForTimeout(2000);

});

test('frame locator', async ({ page }) => {

    await page.goto('https://ui.vision/demo/webtest/frames/');

    const frame4 = await page.frameLocator('//frame[@src="frame_4.html"]')

    await frame4.fill('input[name="mytext1"]','testting frame 1 textbox');
    
    // locator('input[name="mytext1"]').fill('testting frame 1 textbox')

    await page.waitForTimeout(2000);

});

test('child frame', async ({ page }) => {

    await page.goto('https://ui.vision/demo/webtest/frames/');


    const frame3 =await page.frame('frame[src="frame_3.html"]');
    const childframes = await frame3.childFrames()


    console.log(childframes.length)
    await childframes[0].locator('element').click()
    await childframes[0].parentFrame();
     frame3.locator('elemet').fill();

    await page.waitForTimeout(2000);

});