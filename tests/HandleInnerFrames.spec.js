const { test, expect } = require('@playwright/test');


test.skip('Handle Nested iframe', async ({ page }) => {

    await page.goto('https://demo.automationtesting.in/Frames.html');

    // Click on Nested iframe tab
    await page.getByText('Iframe with in an Iframe').click();

    // Parent iframe
    const parentFrame = page.frameLocator('iframe[src="MultipleFrames.html"]');

    // Child iframe inside parent iframe
    const childFrame = parentFrame.frameLocator('iframe');

    // Enter text in input box
    await childFrame.locator('input[type="text"]').fill('Qa Automation');

    await page.waitForTimeout(5000);
});


test('Another Approach Handle Nested iframe', async ({ page }) => {

    await page.goto('https://demo.automationtesting.in/Frames.html');

    await page.getByText('Iframe with in an Iframe').click();

    // Parent iframe
    const parentFrame = await page.frame({ url: 'https://demo.automationtesting.in/MultipleFrames.html' })

    const childFrames = await parentFrame.childFrames();

   await childFrames[0].locator('input[type="text"]').fill('Qa 123');

    await page.waitForTimeout(5000);

});