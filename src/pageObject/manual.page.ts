import { Page, envFileName, Locator, test } from "../fixture/Fixture";
 
export default class ManualPage {
  constructor(public page: Page) {
    this.page = page;
  }
 
  async createUsecase() {
    await test.step("Create a new use case ", async () => {
      await this.page
        .locator("li")
        .filter({ hasText: "Projects" })
        .locator("svg")
        .nth(1)
        .click();
      await this.page.getByRole('link', { name: 'catalyst12' }).click();
      await this.page.getByText("Total Use Cases").click();
      await this.page.getByRole("button", { name: "Create Use Case" }).click();
      await this.page.waitForTimeout(5000);
      await this.page.screenshot({
        path: "./src/resources/snapShots/useCase.png",
        fullPage: true,
      });
      await this.page
        .locator("div")
        .filter({ hasText: /^StateDraft$/ })
        .nth(3)
        .click();
      await this.page.getByText("Ready").click();
      await this.page.waitForTimeout(2000);
      await this.page
        .locator("div")
        .filter({ hasText: /^PriorityLow$/ })
        .nth(3)
        .click();
      await this.page.getByText("Medium").click();
      await this.page.getByTestId("UseCasetittle-inputbox").click();
      await this.page.getByTestId("UseCasetittle-inputbox").fill("User Login");
      await this.page
        .locator("div")
        .filter({ hasText: /^Use Case Description \*$/ })
        .getByRole("paragraph")
        .click();
      await this.page.locator(".tiptap").fill("Allows a valid username and password.");
      await this.page.getByTestId("UseCasePreconditon-TextBox").click();
      await this.page
        .getByTestId("UseCasePreconditon-TextBox")
        .fill("login page visibility");
       
      await this.page
        .locator("div")
        .filter({ hasText: /^Save$/ })
        .getByRole("button")
        .click({force:true});
      await this.page.waitForTimeout(10000);
      await this.page.screenshot({
        path: "./src/resources/snapShots/useCase.png",
        fullPage: true,
      });
    });
  }
 
   
 
  async createTestCase() {
    await test.step("Create a new test_case", async () => {
      await this.page.getByRole("button", { name: "Add Test Case" }).click();
     
      await this.page
        .locator("div")
        .filter({ hasText: /^StateActive$/ })
        .nth(1)
        .click();
      await this.page.getByText("Active").nth(1).click();
     
      await this.page.waitForTimeout(2000);
     
      await this.page.getByText("Medium").click();
      await this.page.getByText("Low").click();
     
      await this.page.getByTestId("TestCasetittle-inputbox").click();
      await this.page
        .getByTestId("TestCasetittle-inputbox")
        .fill("Verify User Login Functionality");
     
      await this.page.getByTestId("TestcaseDescription-TextBox").click();
      await this.page
        .getByTestId("TestcaseDescription-TextBox")
        .fill("Test to ensure the user can successfully log into the application with valid credentials.");
     
      await this.page.getByTestId("TestcasePreconditon-TextBox").click();
      await this.page
        .getByTestId("TestcasePreconditon-TextBox")
        .fill("User must be registered with valid login credentials.");
     
      await this.page.locator("#skip").getByRole("button").first().click();
     
      await this.page.waitForTimeout(5000);
     
      await this.page
        .getByRole("link", { name: "Manual Test", exact: true })
        .click();
      await this.page.getByRole("button", { name: "Test Cases" }).click();
     
      await this.page.waitForTimeout(10000);
     
      await this.page.screenshot({
        path: "./src/resources/snapShots/testCase.png",
        fullPage: true,
      });
    });
  }
 
  async createPerformance() {
    await test.step("Create a performance ", async () => {
      await this.page
        .locator("li")
        .filter({ hasText: "Projects" })
        .locator("svg")
        .nth(1)
        .click();
      await this.page.getByRole('link', { name: 'catalyst12' }).click();
      await this.page
        .locator("li")
        .filter({ hasText: "Manage" })
        .locator("div")
        .click();
      await this.page.getByRole('link', { name: 'Performance Testing' }).click();
      await this.page.getByRole("combobox").selectOption("0");
      await this.page
        .locator("div")
        .filter({ hasText: /^Duration \(minute\) \*$/ })
        .locator("#duration")
        .click();
      await this.page.locator("#concurrent_user").click();
      await this.page.getByRole("button", { name: "Start Scan" }).click();
      await this.page.waitForTimeout(10000);
      await this.page.screenshot({
        path: "./src/resources/snapShots/performanceScan.png",
        fullPage: true,
      });
    });
  }
 
  async securitytesting() {
    await test.step("scan a security testing ", async () => {
      await this.page
        .locator("li")
        .filter({ hasText: "Projects" })
        .locator("svg")
        .nth(1)
        .click();
      await this.page.getByRole('link', { name: 'catalyst12' }).click();
      await this.page
        .locator("li")
        .filter({ hasText: "Manage" })
        .locator("div")
        .click();
      await this.page.getByRole('link', { name: 'Security Testing' }).click();
      await this.page
        .getByTestId("selectEnvironment-Security")
        .selectOption("0");
      await this.page.getByTestId("ScanLevel-Security").selectOption("LIGHT");
      await this.page
        .getByTestId("ScanFrequency-Security")
        .getByRole("combobox")
        .selectOption("one-time");
      await this.page
        .getByTestId("ScanFrequency-Security")
        .getByRole("combobox")
        .selectOption("now");
      await this.page.getByRole("button", { name: "Start Scan" }).click();
      await this.page.waitForTimeout(20000);
      await this.page.screenshot({
        path: "./src/resources/snapShots/securityTesting.png",
        fullPage: true,
      });
    });
  }
 
  async verifyJobpage() {
    await test.step("Verify job page", async () => {
      await this.page
        .locator("li")
        .filter({ hasText: "Projects" })
        .locator("svg")
        .nth(1)
        .click();
      await this.page.getByRole('link', { name: 'catalyst12' }).click();
 
      await  this.page.waitForTimeout(5000);
      await this.page
        .locator("li")
        .filter({ hasText: "Manage" })
        .locator("div")
        .click();
 
        await this.page.getByRole('link', { name: 'Jobs' }).click();
        await this.page.waitForTimeout(20000);
      await this.page.screenshot({
        path: "./src/resources/snapShots/jobpage.png",
        fullPage: true,
      });
      await this.page.getByTestId('job-row-0').getByRole('img').nth(1).click();
      await this.page.waitForTimeout(5000);
      await this.page.screenshot({
        path: "./src/resources/snapShots/jobpageData.png",
        fullPage: true,
      });
 
 
    });
  }
 
  async createRelease() {
    await test.step("Create a  new release", async () => {
      await this.page
        .locator("li")
        .filter({ hasText: "Projects" })
        .locator("svg")
        .nth(1)
        .click();
      await this.page.getByRole('link', { name: 'catalyst12' }).click();
      await this.page
        .locator("li")
        .filter({ hasText: "Manage" })
        .locator("div")
        .click();
      await this.page.getByRole('link', { name: 'Releases' }).click();
      await this.page.getByRole("button", { name: "Create Release" }).click();
      await this.page
        .getByPlaceholder("Enter release title")
        .fill("Security Enhancements and Performance Optimization");
      await this.page
        .getByTestId("release-description")
        .getByRole("paragraph")
        .click();
      await this.page.locator(".tiptap").fill("This release strengthens the platforms security with enhanced vulnerability scanning and implements performance improvements for faster, more efficient system operation");
      await this.page
        .locator("div")
        .filter({ hasText: /^EnvironmentNone$/ })
        .nth(3)
        .click();
      await this.page.getByText("DEV - WEB").click();
      await this.page
        .locator("div")
        .filter({ hasText: /^Save$/ })
        .getByRole("button")
        .click();
      await this.page.waitForTimeout(5000);
      //   await this.page.screenshot({ path: './src/resources/snapShots/releasePage.png', fullPage: true });
      await this.page.getByText("Release Created Successfully").isVisible();
      await this.page.waitForTimeout(5000);
      await this.page.screenshot({
        path: "./src/resources/snapShots/releaseCreatedpage.png",
        fullPage: true,
      });
    });
  }
 
  async runReleaseTestCase() {
    await test.step("verify  release test case run ", async () => {
    await this.page
      .locator(".text-sm > div > div > .text-teal-700")
      .first()
      .click();
    await this.page.getByRole("button", { name: "Defects 0/" }).click();
    await this.page
      .locator("(//div[@class='col-span-1 cursor-pointer'])[2]")
      .click();
    await this.page.waitForTimeout(5000);
    await this.page
      .locator("div")
      .filter({ hasText: /^Save$/ })
      .getByRole("button")
      .click();
    await this.page.getByText("Your Data has beed saved").isVisible();
    await this.page.waitForTimeout(5000);
    await this.page.screenshot({
      path: "./src/resources/snapShots/releaseData.png",
      fullPage: true,
    });
    await this.page
      .locator("#skip")
      .getByRole("link", { name: "Releases" })
      .click();
    await this.page.waitForTimeout(5000);
    await this.page
      .locator("(//button[contains(@class,'p-2 rounded')])[2]")
      .click();
    await this.page.waitForTimeout(5000);
    await this.page.locator("//button[text()=' Test Run']").click();
    await this.page.waitForTimeout(5000);
    await this.page
      .locator("//div[contains(@class,'col-span-1 flex')]")
      .click();
    await this.page.waitForTimeout(5000);
    await this.page
      .locator("div")
      .filter({ hasText: /^Not ExecutedPassedFailedSkippedBlocked$/ })
      .getByRole("combobox")
      .selectOption("Passed");
    await this.page.getByTestId("loading").getByRole("button").nth(2).click();
    await this.page.waitForTimeout(5000);
    await this.page.getByText("Status Updated Successfully !").isVisible();
    await this.page.waitForTimeout(5000);
    await this.page.getByRole("link", { name: "Test Execute" }).click();
    await this.page.waitForTimeout(5000);
    await this.page.screenshot({
      path: "./src/resources/snapShots/releasepassed.png",
      fullPage: true,
    });
    await this.page.locator('[data-test-id="notification-bell"]').click();
    await this.page.waitForTimeout(5000);
    await this.page.screenshot({
      path: "./src/resources/snapShots/notification.png",
      fullPage: true,
    });
    await this.page.locator('[data-test-id="notification-bell"]').click();
 
  });
  }
 
  async createNewDefectpage() {
    await test.step("Verify job page", async () => {
      await this.page.locator('li').filter({ hasText: 'Projects' }).locator('div').click();
      await this.page.locator('li').filter({ hasText: 'catalyst12' }).getByRole('link').click();
      await this.page.locator('li').filter({ hasText: 'Manage' }).locator('path').nth(1).click();
      await this.page.getByRole('link', { name: 'Defects' }).click();
      await this.page.getByRole('button', { name: 'New Defect' }).click();
      await this.page.getByPlaceholder('Enter Defect Title').click();
      await this.page.getByPlaceholder('Enter Defect Title').fill('Header not visible on the homepage');
      await this.page.locator('div').filter({ hasText: /^Defect Description \*$/ }).getByRole('paragraph').click();
      await this.page.locator('.tiptap').fill('This name and title are logical for a defect related to UI visibility, particularly an issue with the header on the homepage. You can adjust them based on the specific context of the defect in your application. ');
      await this.page.locator('.relative > .rounded-md > div > div > svg > path').first().click();
      await this.page.getByText('Medium').click();
      await this.page.locator('div').filter({ hasText: /^AssigneesNo one$/ }).nth(3).click();
      await this.page.locator('div:nth-child(3) > .rounded-md > div > div > svg').click();
      await this.page.getByText('Medium').nth(1).click();
      await this.page.locator('div').filter({ hasText: /^Jaydeep$/ }).nth(2).click();
      await this.page.getByText('None').first().click();
      await this.page.getByText('DEV - WEB').click();
      await this.page.getByText('None').nth(1).click();
      await this.page.locator('.rounded-t-md > div > div > svg').click();
      await this.page.locator('div:nth-child(8) > div > div > div > svg').click();
      await this.page.locator('div').filter({ hasText: /^Save$/ }).getByRole('button').click();
      await this.page.waitForTimeout(5000);
      await this.page.goto('https://octopus-app-d459t.ondigitalocean.app/defect-tracking/74c565b2-d460-4c9a-87df-5e6b058a12c6');
      await this.page.getByText('Defect created successfully!').isVisible();
      await this.page.locator('#skip').getByRole('link', { name: 'Defects' }).click();
      await  this.page.waitForTimeout(5000);
      await this.page.screenshot({
        path: "./src/resources/snapShots/defectPage.png",
        fullPage: true,
      });
 
    });
  }
 
 
}