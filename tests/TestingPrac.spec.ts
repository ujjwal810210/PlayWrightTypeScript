import {test,expect,Browser,Page} from '@playwright/test';
import {webkit,firefox,chromium} from 'playwright';

test('verify syntax', async({page:Page})=>{

    
const browser = await chromium.launch({headless:false});
    const context = await browser.newContext();
    const page: Page = await context.newPage();
   await page.goto('https://booking.com/');
   await page.waitForLoadState('load');
   
   await page.locator("//button[@aria-label='Dismiss sign-in info.']").click();
   const checkinDate =await page.getByText('Check-in date').first().click();
    const noOfcoulmn =await page.locator('//table/tbody/tr/td').count();
   console.log(`Number of rows: ${noOfcoulmn}`);
   await page.getByText('Check-in date').first().click();
   await page.locator("//input[contains(@name,'sb_travel_purpose')]/../descendant::span").nth(2).check();
   await page.screenshot({ path: 'checked_page.png' });
 //  await expect(page).toHaveTitle('Booking.com | Official site | The best hotels, flights, car rentals & accommodations');
  // await expect(page).toHaveURL('https://www.booking.com/?chal_t=1784374078361&force_referer=');
   
  // console.log(`Number of rows: ${rowCount}`);
   //console.log(checkinDate);
   
   //console.log(noOfcoulmn);
   
   


    
    

});

test('verify all the headings', async({page})=>{
  
    await page.goto('https://www.amazon.com/');
    await page.locator("//i[@class='hm-icon nav-sprite']").click();
    const heading = page.locator("//div[@class='hmenu hmenu-visible']/descendant::section/div");
    const allHeading = await page.locator("//div[@class='hmenu hmenu-visible']/descendant::section/div").all()
    for(const  heading of allHeading){
        const text = await heading.textContent();

        console.log(`Product: ${text}`);

    }

});

test('verify columns and row', async({page})=>{
    page.goto('www.facebook.com')
    
    const [newtab] = await Promise.all ([
         
        
           page.waitForEvent('popup'),
           await page.locator("button").click()
]);

    await newtab.waitForLoadState('load');
    const column =await page.locator('table/tbodt/td/tr5');
    await column.click();
    const row = await page.locator("").count();
    await expect(row).toHaveCount(5);
    await row.nth(3).click();
    await newtab.screenshot({path:'screenshort.png'});



});