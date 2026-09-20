const { test, expect } = require('@playwright/test')

test('Mouse Over', async ({ page }) => {

    await page.goto('https://vinothqaacademy.com/mouse-event/')

  const  button  = await page.locator("//button[@id='rightBtn']")

  // Right Click action 

      await button.click({button : 'right'});

    await page.waitForTimeout(7000);
})