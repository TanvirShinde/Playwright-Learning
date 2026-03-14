const { test, expect } = require('@playwright/test')

test('Home Page', async ({ page }) => {
    await page.goto('https://www.demoblaze.com/index.html');
    const pagetitle = await page.title();
    console.log('Page title is :', pagetitle);
    await expect(page).toHaveTitle('STORE');
       console.log('Page title is :', pagetitle);
    await expect(page).toHaveURL('https://www.demoblaze.com/index.html')
    page.close();
})