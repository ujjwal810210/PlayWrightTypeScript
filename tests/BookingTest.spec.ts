import {test,expect,Browser,Page} from '@playwright/test';
import {webkit,firefox,chromium} from 'playwright';

test('login to ', async ({}) => {
    const browser = await chromium.launch({headless:false});
    const context = await browser.newContext();
    const page: Page = await context.newPage();
    await page.goto('https://booking.com/');
   // await page.locator('//svg[@xmlns="http://www.w3.org/2000/svg"]').click();


});
test('verify page title', async({}) => {
    const browser = await chromium.launch({headless:false});
    const context = await browser.newContext();
    const page: Page = await context.newPage();
    await page.goto('https://booking.com/');
    await expect(page).toHaveTitle(/Booking/);
    await page.screenshot({path: 'screenshot.png'});
    await page.localStorage



});

