const { test, expect } = require('@playwright/test');
test('handle ', async ({ page }) => {
    await page.goto('https://demoqa.com/radio-button');
    await page.locator('#yesRadio').check();
    await expect(page.locator('#yesRadio')).toBeChecked();
    await expect(page.locator('#yesRadio').isChecked()).toBeTruthy();
    await expect(page.locator('#impressiveRadio').isChecked()).toBeFalsy();
    await page.waitForTimeout(5000);
})
