const { test, expect } = require('@playwright/test');

test('Auto Suggest Drodown Handling', async ({ page }) => {

    await page.goto('https://www.redbus.in/');
    await page.locator('#srcinput').fill('Dhule');

})