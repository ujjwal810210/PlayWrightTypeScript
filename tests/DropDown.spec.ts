import { test, expect } from '@playwright/test';

 
test('Handle Dropdown Options', async ({ page }) => {
    await page.goto('https://amazon.com');
    const dropDown =await page.locator("//button[@aria-label='Expand to Change Language or Country']").first().click();
    const allOptions =await page.locator("//ul[@role='list']/descendant::i/following-sibling::span").allInnerTexts();
    console.log('dropdown option', allOptions);
   
    const targetOption  = 'Deutsch';
     await page.locator("//ul[@role='list']/descendant::span[contains(text(), '${targetOption}')]").first().click();
    

});