const { test, expect } = require('@playwright/test');

test('Dropdown Handling', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    //Multiple ways to select option from the dropdown
    // await page.locator('#country').selectOption({label:'India'});   //Label Visible text
    // await page.locator('#country').selectOption('India');    // Visible Text
    //  await page.locator('#country').selectOption({ value: 'uk' });   // Based on value 
    // await page.locator('#country').selectOption({ index : 1 });   // Based on index 

    await page.selectOption('#country' , 'India');

    await page.waitForTimeout(5000);
})