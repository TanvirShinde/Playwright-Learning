const { test, expect } = require('@playwright/test');

test('Dropdown Handling', async ({ page }) => {

  await page.goto('https://testautomationpractice.blogspot.com/');

  //Multiple ways to select option from the dropdown
  // await page.locator('#country').selectOption({label:'India'});   //Label Visible text
  // await page.locator('#country').selectOption('India');    // Visible Text
  //  await page.locator('#country').selectOption({ value: 'uk' });   // Based on value 
  // await page.locator('#country').selectOption({ index : 1 });   // Based on index 
  // await page.selectOption('#country' , 'India');     // By Text


  //Assertions
  // 1) Check number of options in dropdown - Approach 1
  // const   options = await page.locator('#country option')
  //await expect(options).toHaveCount(50);

  // 2) Check number of options in dropdown - Approach 2
  // const options = await page.$$('#country option')
  //  console.log("Number of options : " , options.length)
  // await expect(options.length).toBe(10);

  // 3) Check presence of value in the dropdown. - Approach 1
  //  const content =  await page.locator('#country').textContent();
  //  await expect(content.includes('India')).toBeTruthy();

  // 4) Check presence of value in the dropdown - Approach 2
  const options = await page.$$('#country option');
  /*
  let status = false;
  for (const option of options) {
    // console.log(await option.textContent())   /--------print all option
    let value = await option.textContent();
    if (value.includes('France')) {
      status = true;
      break;
    }
  }
  expect(status).toBeTruthy();

  */

   for (const option of options) {
    let value = await option.textContent();
    if (value.includes('France')) {
      await page.selectOption('#country' , 'India')
      break;
    }
  }
  
  await page.waitForTimeout(5000);
})