const { test, expect } = require('@playwright/test')

test('Drag Drop', async ({ page }) => {

    await page.goto('https://vinothqaacademy.com/mouse-event/');

    const dragitem = await page.locator("//div[@id='dragItem']");

    const dropitem = await page.locator(" //div[@id='dropZone']");

    //Appraoch 1
   await dragitem.hover()
   await page.mouse.down()

   await dropitem.hover()
   await page.mouse.up()

      //Approach 2
    //  await dragitem.dragTo(dropitem);

      await page.waitForTimeout(7000);

      

})