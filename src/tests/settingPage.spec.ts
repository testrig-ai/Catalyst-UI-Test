import { expect, test, envFileName } from "../fixture/Fixture";
require("dotenv").config({ path: envFileName });

test.describe("ManualPageTests", () => {

    test("TC010-verify audit log page", async ({  page,settingPage}) => {
      await page.goto(process.env.page!); 
        await settingPage.verifyAuditlog();
      });

      test("TC011-verify team page ", async ({ page,  settingPage}) => {
        await page.goto(process.env.page!); 
        await settingPage.verifyTeamPage();
      });




});
