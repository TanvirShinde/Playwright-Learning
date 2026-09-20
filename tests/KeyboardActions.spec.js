const { test, expect } = require('@playwright/test');

test('Keyboard Actions', async ({ page }) => {

    await page.goto('https://gotranscript.com/text-compare');

    // await page.locator("//textarea[@placeholder='Paste one version of the text here.']").fill('Welcome to Automation');

    await page.type('[name="text1"]', 'Welcome to learning');

    await page.keyboard.press('Control+A')
    await page.keyboard.press('Control+C')
    await page.keyboard.press('Tab')
    await page.keyboard.press('Control+V')

    await page.waitForTimeout(8000);

})