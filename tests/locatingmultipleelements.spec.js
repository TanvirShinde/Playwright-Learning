import { test, expect } from '@playwright/test';

test('Multiple locator test', async ({ page }) => {
    await page.goto('https://www.demoblaze.com/index.html');

    //----> Click on login button
    //  await page.locator('id=login2').click();
    await page.click('id=login2');

    //--->Provide an input for the field
    //  await page.locator('#loginusername').fill('abc');
    await page.fill('#loginusername', 'pavanol');

    //----> Provider an input for the pssword field
    //  await page.locator("input[id='loginpassword']").fill ('test@123');
    await page.fill("input[id='loginpassword']", 'test@123');

    //Then click on login tab
    await page.click("//button[normalize-space()='Log in']");


    //locator multiple elements 

    const links = await page.$$("//div[@id='tbodyid']/div/div/div/h4");

    for (const link of links) {
        const linktext = await link.textContent();
        console.log(linktext);
    }

    //Verify logout link presence 
    const logoutlink = await page.locator("//a[@id='logout2']")
    await expect(logoutlink).toBeVisible();
    await page.close();
})