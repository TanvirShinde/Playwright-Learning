const { test, expect } = require('@playwright/test');

const now = new Date();

const dateTime =
    now.getFullYear() + '-' +
    String(now.getMonth() + 1).padStart(2, '0') + '-' +
    String(now.getDate()).padStart(2, '0') + '_' +
    String(now.getHours()).padStart(2, '0') + '-' +
    String(now.getMinutes()).padStart(2, '0') + '-' +
    String(now.getSeconds()).padStart(2, '0');

test.skip('Screenshot Test', async ({ page }) => {
    await page.goto('https://saucelabs.com/');
    await page.waitForTimeout(3000);
    await page.screenshot({ path: 'tests/screenshots/' + dateTime + 'HomePage.png' })
})

test.skip('Full page screenshot', async ({ page }) => {
    await page.goto('https://www.facebook.com/login');
    await page.waitForTimeout(3000);
    await page.screenshot({ path: 'tests/screenshots/' + dateTime + 'FullPage.png', fullPage: true })
}); 

test.only('Element screenshot', async ({ page }) => {
    await page.goto('https://www.demoblaze.com/index.html');
    await page.locator("(//div[@id='tbodyid']/child::div)[1]").screenshot({ path:'tests/screenshots/'+dateTime+'Windows.png'})
});