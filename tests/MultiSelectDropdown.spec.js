const { test, expect } = require('@playwright/test');

test('Multi Select Dropdown Handling', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    //Select Multiple values from multi select dropdown.
    // await page.selectOption('#colors' , ['Blue','Green','Yellow']);

    //Assertions
    // 1) Check number of options in dropdown
    //  const  options = await page.locator('#colors option');
    // await expect(options).toHaveCount(7);

    //Assertions
    // 2) Check number of options in dropdown using JS Array
    // const options = await page.$$('#colors option');
    // console.log("Number of options : " , options.length);
    // await expect(options.length).toBe(7);

    //Assertions
    // 2) Check presence of value in the  dropdown 
    const content = await page.locator('#colors').textContent();
    await expect(content.includes('Blue')).toBeTruthy();




    await page.waitForTimeout(5000);



})