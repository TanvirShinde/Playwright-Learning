const { test, expect } = require('@playwright/test');

test('Date Picker', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/')
    //  await page.fill('#datepicker', '08/03/2026')

    // Date picker
    const year = '2026';
    const month = 'November'
    const date = '15'

    await page.locator('#datepicker').click();

    while (true) {
        const currentYear = await page.locator('.ui-datepicker-year').textContent();
        const currentMonth = await page.locator('.ui-datepicker-month').textContent();
        if (currentYear == year && currentMonth == month) {
            break;
        }
        await page.locator('[title="Next"]').click();
        // await page.locator('[title="Prev"]').click() //Previous
    }

    const dates = await page.$$("//a[@class='ui-state-default']")

    // date selection using loop
    /*
    for (const dt of dates) {
        if (await dt.textContent() == date) {
            await dt.click();
            break;
        }
    }
   */

    // Date selection without loop

    await page.locator(`//a[@class='ui-state-default'][text()='${date}']`).click();


    await page.waitForTimeout(8000);

})
