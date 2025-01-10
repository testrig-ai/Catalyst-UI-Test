import { test, expect } from '@playwright/test';

test('homepage has Playwright in title', async ({ page }) => {
  // Go to the Playwright website
  await page.goto('https://playwright.dev/');

  // Check if the title contains "Playwright"
  const title = await page.title();
  expect(title).toContain('Playwright');
});
