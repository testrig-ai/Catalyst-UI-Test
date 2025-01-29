import { expect, test, envFileName } from "../fixture/Fixture";
require("dotenv").config({ path: envFileName });

test.describe("ManualPageTests", () => {

    test("TC009", async ({  signUp, settingPage}) => {
        await signUp.register(
          process.env.fname!,
          process.env.lname!,
          process.env.email!,
          process.env.password!
        );
        await settingPage.verifyAuditlog();
      });

      test("TC010", async ({  signUp, settingPage}) => {
        await signUp.register(
          process.env.fname!,
          process.env.lname!,
          process.env.email!,
          process.env.password!
        );
        await settingPage.verifyTeamPage();
      });




});
