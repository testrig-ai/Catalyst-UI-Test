import { expect, test, envFileName } from "../fixture/Fixture";
require("dotenv").config({ path: envFileName });
test.describe("DefaultPageTests", () => {
  test("TC001-Create a new project", async ({ page, signUp, defaultPage }) => {
    await page.goto(process.env.page!); 
    await defaultPage.createNewProject();
  });

  test("TC002-fill  new  environment", async ({
    signUp,
    defaultPage,
    page,
  }) => {
    await page.goto(process.env.page!); 
    await defaultPage.fillEnvironment();
  });
});