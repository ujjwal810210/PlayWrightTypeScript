import {test,expect,Browser,chromium, Page} from '@playwright/test';
import{webkit,ChromiumBrowser} from 'playwright';


test('verify syntax', async({}) => {
    const browser = await chromium.launch({headless:false});
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://booking.com/');
     await Promise.all([
       
        page.locator('//button[@aria-label="Dismiss sign-in info."]/descendant::span').click()
    ]);





});


test('verify dialog', async({}) => {
    const browser =  await chromium.launch({headless:false});
    const context = await browser.newContext();
  //  const context1 = await browser.newContext();
    const page = context.newPage();
    await (await page).goto("www.facebook.com")

   // const page2 = context1.newPage();
    const [newTab] = await Promise.all([
      context.waitForEvent('page'), 
     //  page.locator("//input[@text='linktext']" ).click(),
    ]);
    //download.saveas()
    await newTab.waitforLoadState();

});

test
  


    



    


   
