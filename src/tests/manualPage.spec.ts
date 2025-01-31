import { expect, test, envFileName } from "../fixture/Fixture";
require("dotenv").config({ path: envFileName });

test.describe("ManualPageTests", () => {
  test("TC003-create a new usecase", async ({ page, signUp, manualPage }) => {
    await page.goto(process.env.page!); 
    await manualPage.createUsecase();
  });

  test("TC004-create a new test case ", async ({
    page,
    signUp,
    manualPage,
  }) => {
    await page.goto(process.env.page!); 
    await manualPage.createUsecase();
    await page.waitForTimeout(10000);
    await manualPage.createTestCase();
  });

  test("TC005-verify performance testing ", async ({
    page,
    signUp,
    manualPage,
  }) => {
    await page.goto(process.env.page!); 
    await manualPage.createPerformance();
  });

  test("TC006-verify security testing ", async ({
    page,
    signUp,
    manualPage,
  }) => {
    await page.goto(process.env.page!); 
    await manualPage.securitytesting();
  });

 

  test("TC007-create release and  run release test cases", async ({
    page,
    signUp,
    manualPage,
  }) => {
    await page.goto(process.env.page!); 
    await manualPage.createRelease();
    await manualPage.runReleaseTestCase();
  });

  test("TC008-creat defect and verify job page", async ({
    page,
    signUp,
    manualPage,
  }) => {
    await page.goto(process.env.page!); 
    await manualPage.createNewDefectpage();
  
  });

  test("TC009-verify job page", async ({ page, signUp, manualPage }) => {
    await page.goto(process.env.page!); 
    await manualPage.verifyJobpage();
  });
});
