const { test, expect } = require('@playwright/test');

test('Handle Checkboxes', async ({ page }) => {

    await page.goto('https://qa-automation-practice.netlify.app/checkboxes');
    await page.locator("//input[@id='checkbox1']").check();
    expect(await page.locator("//input[@id='checkbox1']")).toBeChecked();

    //---> To confirm whether the checkbox is selected
    expect(await page.locator("//input[@id='checkbox1']").isChecked()).toBeTruthy();

    //---> To confirm whether the checkbox is unselected
    expect(await page.locator("//input[@id='checkbox2']").isChecked()).toBeFalsy();

    //Click on reset tab
    await page.click("//button[normalize-space()='Reset']");

    await page.waitForTimeout(5000);

    const checkboxLocators = [
        "//input[@id='checkbox1']",
        "//input[@id='checkbox2']",
        "//input[@id='checkbox3']"
    ]

    // Check Multiple Checkbox
    for (const locator of checkboxLocators) {
        await page.locator(locator).check();
    }

    await page.waitForTimeout(5000);

    // UnCheck Multiple Checkbox
    for (const locator of checkboxLocators) {
        if (await page.locator(locator).isChecked()) {
            await page.locator(locator).uncheck();
        }

    }
    await page.waitForTimeout(5000);
})

