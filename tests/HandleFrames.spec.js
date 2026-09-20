const { test, expect } = require('@playwright/test');

test('frames', async ({ page }) => {

    await page.goto('https://demo.automationtesting.in/Frames.html');

    //total frames
    const allframes = await page.frames()
    console.log("Number of frames:", allframes.length)

    //approach 1: using  name or url
    //const var=await page.frame('name'); // if name is present 
    //  const frame1 = await page.frame({ url: 'https://demo.automationtesting.in/SingleFrame.html' })
    // await frame1.fill("[type='text']", 'Smita HR');
    //  await frame1.fill("//input[@type='text']", 'Smita');


    //appraoch 2- using frame locator
    const inputbox = await page.frameLocator("//iframe[@id='singleframe']").locator("//input[@type='text']")
    inputbox.fill("Hello")


    await page.waitForTimeout(5000);

});