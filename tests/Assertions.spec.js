const { test, expect } = require('@playwright/test');

test('Assertions Test', async ({ page }) => {
    await page.goto('https://demo.nopcommerce.com/register');

    //---> expect(page).toHaveURL()   Page has URL
    await expect(page).toHaveURL('https://demo.nopcommerce.com/register');

    //--->expect(page).toHaveTitle()   Page has title  nopCommerce demo store. Register
    await expect(page).toHaveTitle('nopCommerce demo store. Register');

    //------> expect(locator).toBeVisible()  Element is visible
    const websitelogo = await page.getByAltText('nopCommerce demo store');
    await expect(websitelogo).toBeVisible();

    //---> expect(locator).toBeEnabled()  Control is enabled
    const searchBox = await page.getByPlaceholder('Search store');
    await expect(searchBox).toBeEnabled();

    //---------------> expect(locator).toBeChecked()  Radio/Checkbox is checked

    const maleRadioButton = await page.locator('#gender-male');
    await maleRadioButton.click();
    await expect(maleRadioButton).toBeChecked();

    const newslettercheckbox = await page.locator('.form-check-input');
    // await newslettercheckbox.click();
    await expect(newslettercheckbox).toBeChecked();

    //------------> expect(locator).toHaveAttribute() Element has attribute
    const registerbutton = await page.locator('#register-button');
    await expect(registerbutton).toHaveAttribute('type', 'submit');

    //--------------> expect(locator).toHaveText()  Element matches text
    const RegisterLable = await page.locator("//div[@class='page-title']/h1");
    await expect(RegisterLable).toHaveText('Register');

   //--------> expect(locator).toContainText()  Element contains text
     await expect(RegisterLable).toContainText('Regi');

  //------------> expect(locator).toHaveValue(value) Input has a value
  const emailinput = await page.locator('#Email');
  await emailinput.fill('abc@yopmail.com');
  await expect(emailinput).toHaveValue('abc@yopmail.com');

  //---------------> expect(locator).toHaveCount()  List of elements has given length
  

})

