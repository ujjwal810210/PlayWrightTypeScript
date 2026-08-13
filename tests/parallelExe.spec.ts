import {test} from "@playwright/test";



test("verify home page", async ({ page }) => {

    await page.goto("https://google.com");

});

test("verify test page", async ({ page }) => {

    await page.goto("https://facebook.com");

});

test("verify text box", async ({ page }) => {

    await page.goto("https://myntra.com");

});

test("verify Windows path handling", async ({ page }) => {

    await page.goto("https://example.com");

});

test("verify booking page", async ({ page ,chr 
    
}) => {
    await page.goto("https://booking.com");
    await page.locator('//button[@aria-label="Dismiss sign-in info."]/descendant::span').click

});


