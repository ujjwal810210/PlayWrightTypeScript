import { test, expect } from '@playwright/test';

const AMAZON_URL = 'https://www.amazon.com/';

// NOTE: Replace the placeholder values below with your real Amazon credentials,
// or set them as environment variables before running the test.
const AMAZON_EMAIL = process.env.AMAZON_EMAIL || 'your-email@example.com';
const AMAZON_PASSWORD = process.env.AMAZON_PASSWORD || 'your-password';

test('login to Amazon application', async ({ page }) => {
  await page.goto(AMAZON_URL);

  // Open the sign-in page.
  await page.click('a#nav-link-accountList');

  // Enter email / phone and continue.
  await page.fill('input#ap_email', AMAZON_EMAIL);
  await page.click('input#continue');

  // Enter password and sign in.
  await page.fill('input#ap_password', AMAZON_PASSWORD);
  await page.click('input#signInSubmit');

  // Verify that we landed on a logged-in page by checking account greeting.
  await expect(page.locator('#nav-link-accountList-nav-line-1')).toContainText('Hello', {
    timeout: 15000,
  });
});
