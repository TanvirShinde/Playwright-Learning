const { test, expect } = require('@playwright/test')

test('Mouse Over', async ({ page }) => {

    await page.goto('https://vinothqaacademy.com/mouse-event/')

   await page.locator("//div[@class='collapse navbar-collapse pull-right']//a[contains(text(),'Free Complete QA Video Courses')]").hover();

    await page.waitForTimeout(9000);
})