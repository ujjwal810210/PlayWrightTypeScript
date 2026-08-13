import {test as base } from '@playwright/test';


type MyFixtures = {
    AuthenticatedPage:import('@playwright/test').Page;
};
    export const test = base.extend<MyFixtures>({
        AuthenticatedPage: async ({ page }, use) => {
            await page.goto('https://www.booking.com/');}
});