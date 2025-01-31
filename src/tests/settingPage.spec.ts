import { expect, test, envFileName } from "../fixture/Fixture";
require("dotenv").config({ path: envFileName });

test.describe("ManualPageTests", () => {

    test("TC009-verify audit log page", async ({  page,settingPage}) => {
      await page.goto(process.env.page!); 
        await settingPage.verifyAuditlog();
      });

      test("TC010-verify team page ", async ({ page,  settingPage}) => {
        await page.goto(process.env.page!); 
        await settingPage.verifyTeamPage();
      });




});
