import { BrowserContext,chromium,Page,Browser,test } from "@playwright/test";

test('verify context', async ({page})=>{

    const bowser = await chromium.launch({headless:false});
    const context = await bowser.newContext();
    const context2 = await bowser.newContext();
    //const page = context.newPage();
   // const page2 = context2.pages();

    await page.goto("naukri.com")
    await page.locator("//input[@type='File']").setInputFiles('c:/desktop/screen.pdf')
   
      const fileChooserPromise = page.waitForEvent('filechooser');
       await page.locator('#upload-btn').click();
        const fileChooser = await fileChooserPromise;
       await fileChooser.setFiles('file.pdf');

       const [download] = await Promise.all([
        page.waitForEvent('download'),
        page.locator("").click()


       ])
       await download.saveAs((''));

       

       




});