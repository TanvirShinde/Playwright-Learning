const { test, expect } = require('@playwright/test');

test('Built in locators', async ({ page }) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    //--> page.getByAltText() - to locate an element, usually image, by its text alternative. <-----------
    const logo = await page.getByAltText('company-branding');
    await expect(logo).toBeVisible();

    //--->page.getByPlaceholder() - to locate an input by placeholder.  <-----
    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').fill('admin123');

    //-------> page.getByRole() to locate by explicit and implicit accessibility attributes.
    await page.getByRole('button', { type: 'submit' }).click();

   const profilename = await page.locator('//p[@class="oxd-userdropdown-name"]').textContent();

    await expect ( await page.getByText(profilename)).toBeVisible();

})