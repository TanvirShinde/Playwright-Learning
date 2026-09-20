const { test, expect } = require('@playwright/test');

test.skip('UploadFiles Single File', async ({ page }) => {

    await page.goto('https://demoqa.com/upload-download');

    await page.waitForSelector("//input[@id='uploadFile']");

    await page.locator("//input[@id='uploadFile']").setInputFiles('tests/upload files/Selenium.docx');

    await page.waitForTimeout(10000);
})


test('UploadFiles Multiple File', async ({ page }) => {

    await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php');

    await page.waitForSelector("//input[@id='filesToUpload']");

    await page.locator("//input[@id='filesToUpload']").setInputFiles(['tests/upload files/Selenium.docx', 'tests/upload files/Manual - QA .docx']);

    await page.waitForTimeout(3000)
    expect(await page.locator('#fileList li:nth-child(1)')).toHaveText('testfile1.pdf')
    expect(await page.locator('#fileList li:nth-child(2)')).toHaveText('testfile2.pdf')

    await page.waitForTimeout(3000)

    //Removing files
    await page.locator('#filesToUpload').setInputFiles([])
    await page.waitForTimeout(3000)

    expect(await page.locator('#fileList li:nth-child(1)')).toHaveText('No Files Selected')



    await page.waitForTimeout(10000);
})