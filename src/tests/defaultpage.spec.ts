import { expect, test, envFileName } from "../fixture/Fixture";
require("dotenv").config({ path: envFileName });
test.describe("DefaultPageTests", () => {
  test("TC001-Create a new project", async ({ page, signUp, defaultPage }) => {
    await page.goto(
      "https://octopus-app-d459t.ondigitalocean.app/projects/f134124d-a175-46ad-99d0-63a49de74193"
    );
    await defaultPage.createNewProject();
  });

  test("TC002-fill  new  environment", async ({
    signUp,
    defaultPage,
    page,
  }) => {
    await page.goto(
      "https://octopus-app-d459t.ondigitalocean.app/projects/f134124d-a175-46ad-99d0-63a49de74193"
    );
    await defaultPage.fillEnvironment();
  });
});
