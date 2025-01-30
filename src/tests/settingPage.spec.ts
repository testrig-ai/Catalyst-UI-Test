import { expect, test, envFileName } from "../fixture/Fixture";
require("dotenv").config({ path: envFileName });

test.describe("ManualPageTests", () => {

    test("TC009-verify audit log page", async ({  page,settingPage}) => {
      await page.goto("https://octopus-app-d459t.ondigitalocean.app/projects/f134124d-a175-46ad-99d0-63a49de74193"); 
        await settingPage.verifyAuditlog();
      });

      test("TC010-verify team page ", async ({ page,  settingPage}) => {
        await page.goto("https://octopus-app-d459t.ondigitalocean.app/projects/f134124d-a175-46ad-99d0-63a49de74193"); 
        await settingPage.verifyTeamPage();
      });




});
