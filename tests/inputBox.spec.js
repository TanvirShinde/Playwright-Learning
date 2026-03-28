const { test, expect } = require('@playwright/test');

test('handle input box', async ({ page }) => {

     await page.goto('https://inputtypes.com/');

     await expect (page.locator('.input-item__display-input')).toBeVisible();
     await expect (page.locator('.input-item__display-input')).toBeEmpty();
     await expect (page.locator('.input-item__display-input')).toBeEditable();
     await expect (page.locator('.input-item__display-input')).toBeEnabled();



     await page.locator('.input-item__display-input').fill('Demo response added');

     await page.waitForTimeout(5000);

   //  await page.locator ("//select[name='inputType']").click();

})