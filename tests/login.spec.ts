import {test, expect} from '@playwright/test';

test('validating new window tile', async ({ page, context }) => {
    await page.goto('https://seleniumpractise.blogspot.com/2017/07/multiple-window-examples.html');
    
    const [newPage] = await Promise.all([
        context.waitForEvent('page'),
        
        page.locator('//a[@href="//www.google.com"]').first().click()

    ]);
    
    await newPage.waitForLoadState('load');

    //await expect(newPage.locator('//input[@type="submit"]').nth(4)).toHaveText('Feeling Lucky');


});

test('verify search filed', async ({page}) => {
    await page.goto('www.google.com'),
    await page.getByRole('textbox', { name: 'Search' }).fill('Playwright');

});