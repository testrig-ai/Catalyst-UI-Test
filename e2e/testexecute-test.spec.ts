import { test, expect } from "@playwright/test";

test.describe("Catalyst UI tests", () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to the page where the CreateRelease component is rendered.
    // Adjust the URL as necessary.
    await page.goto("https://testrig-development.uk.kinde.com/auth/cx/_:nav&m:login&psid:01925cab80322a459c7915e1796e22d5");
  });

  test("Check all elements on Login Page", async ({ page }) => {
    // check login page

    await expect(page.getByText("Email")).toBeVisible();
    await expect(page.getByTestId("auth-email-field")).toBeVisible();
    await expect(page.getByTestId("auth-submit-button")).toBeEnabled();
    await expect(page.locator('//*[@id="id_microsoft_social_sign_in"]/button')).toBeVisible()
    await expect(page.locator('//*[@id="id_google_social_sign_in"]/button')).toBeVisible()
    await expect(page.locator('//*[@id="id_github_social_sign_in"]/button')).toBeVisible()
    await expect(page.getByTestId("create-account-link")).toBeEnabled();

  });
  test("Check all elements on Login Page", async ({ page }) => {
    // check login page

    await expect(page.getByText("Email")).toBeVisible();
    await expect(page.getByTestId("auth-email-field")).toBeVisible();
    await expect(page.getByTestId("auth-submit-button")).toBeEnabled();
    await expect(page.locator('//*[@id="id_microsoft_social_sign_in"]/button')).toBeVisible()
    await expect(page.locator('//*[@id="id_google_social_sign_in"]/button')).toBeVisible()
    await expect(page.locator('//*[@id="id_github_social_sign_in"]/button')).toBeVisible()
    await expect(page.getByTestId("create-account-link")).toBeEnabled();

  });

});
