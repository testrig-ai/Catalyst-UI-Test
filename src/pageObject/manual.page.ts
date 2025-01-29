import { Page, envFileName, Locator, test } from "../fixture/Fixture";

export default class ManualPage {

    constructor(public page: Page) {
        this.page = page;
      }
   
      async createUsecase(){
        await test.step("Create a new use case ", async () => {
        await this.page.locator('li').filter({ hasText: 'Projects' }).locator('svg').nth(1).click();
        await this.page.locator('li').filter({ hasText: /^catalyst12$/ }).getByRole('link').click();
        await this.page.getByText('Total Use Cases').click();
        await this.page.getByRole('button', { name: 'Create Use Case' }).click();
        await this.page.waitForTimeout(5000);
        await this.page.screenshot({ path: './src/resources/snapShots/useCase.png', fullPage: true });
        await this.page.locator('div').filter({ hasText: /^StateDraft$/ }).nth(3).click();
        await this.page.getByText('Ready').click();
        await this.page.waitForTimeout(2000);
        await this.page.locator('div').filter({ hasText: /^PriorityLow$/ }).nth(3).click();
        await this.page.getByText('Medium').click();
        await this.page.getByTestId('UseCasetittle-inputbox').click();
        await this.page.getByTestId('UseCasetittle-inputbox').fill('Email');
        await this.page.locator('div').filter({ hasText: /^Use Case Description \*$/ }).getByRole('paragraph').click();
        await this.page.locator('.tiptap').fill('Email login');
        await this.page.getByTestId('UseCasePreconditon-TextBox').click();
        await this.page.getByTestId('UseCasePreconditon-TextBox').fill('login page visibility');
        await this.page.locator('div').filter({ hasText: /^Email login$/ }).nth(2).click();
        await this.page.locator('div').filter({ hasText: /^Save$/ }).getByRole('button').click();
        await this.page.waitForTimeout(10000);
        await this.page.screenshot({ path: './src/resources/snapShots/useCase.png', fullPage: true });
      });
      }

      async createTestCase(){
        await test.step("Create a new test_case", async () => {
        await this.page.getByRole('button', { name: 'Add Test Case' }).click();
        await this.page.locator('div').filter({ hasText: /^StateActive$/ }).nth(1).click();
        await this.page.getByText('Active').nth(1).click();
        await this.page.waitForTimeout(2000);
        await this.page.getByText('Medium').click();
        await this.page.getByText('Low').click();
        await this.page.getByTestId('TestCasetittle-inputbox').click();
        await this.page.getByTestId('TestCasetittle-inputbox').fill('Resgistration');
        await this.page.getByTestId('TestcaseDescription-TextBox').click();
        await this.page.getByTestId('TestcaseDescription-TextBox').fill('add details');
        await this.page.getByTestId('TestcasePreconditon-TextBox').click();
        await this.page.getByTestId('TestcasePreconditon-TextBox').fill('go to  registration  page');
        await this.page.locator('#skip').getByRole('button').first().click();
        await  this.page.waitForTimeout(5000);
        await this.page.getByRole('link', { name: 'Manual Test', exact: true }).click();
        await this.page.getByRole('button', { name: 'Test Cases' }).click();
        await this.page.waitForTimeout(10000);
        await this.page.screenshot({ path: './src/resources/snapShots/testCase.png', fullPage: true });
      });
      }

      async  createPerformance(){
        await test.step("Create a performance ", async () => {
        await this.page.locator('li').filter({ hasText: 'Projects' }).locator('svg').nth(1).click();
        await this.page.locator('li').filter({ hasText: /^catalyst12$/ }).getByRole('link').click();
        await this.page.locator('li').filter({ hasText: 'Manage' }).locator('div').click();
        await this.page.locator('li').filter({ hasText: /^Performance Testing$/ }).getByRole('link').click();
        await this.page.getByRole('combobox').selectOption('0');
        await this.page.locator('div').filter({ hasText: /^Duration \(minute\) \*$/ }).locator('#duration').click();
        await this.page.locator('#concurrent_user').click();
        await this.page.getByRole('button', { name: 'Start Scan' }).click();
        await this.page.waitForTimeout(10000);
        await this.page.screenshot({ path: './src/resources/snapShots/performanceScan.png', fullPage: true });
      });

      }

      async securitytesting(){
        await test.step("scan a security testing ", async () => {
        await this.page.locator('li').filter({ hasText: 'Projects' }).locator('svg').nth(1).click();
        await this.page.locator('li').filter({ hasText: /^catalyst12$/ }).getByRole('link').click();
        await this.page.locator('li').filter({ hasText: 'Manage' }).locator('div').click();
        await this.page.locator('li').filter({ hasText: /^Security Testing$/ }).getByRole('link').click();
        await this.page.getByTestId('selectEnvironment-Security').selectOption('0');
        await this.page.getByTestId('ScanLevel-Security').selectOption('LIGHT');
        await this.page.getByTestId('ScanFrequency-Security').getByRole('combobox').selectOption('one-time');
        await this.page.getByTestId('ScanFrequency-Security').getByRole('combobox').selectOption('now');
        await this.page.getByRole('button', { name: 'Start Scan' }).click();
        await this.page.waitForTimeout(20000);
        await this.page.screenshot({ path: './src/resources/snapShots/securityTesting.png', fullPage: true });

      });

      }

      async verifyJobpage(){
        await test.step("Verify job page", async () => {
        await this.page.locator('li').filter({ hasText: 'Projects' }).locator('svg').nth(1).click();
        await this.page.locator('li').filter({ hasText: /^catalyst12$/ }).getByRole('link').click();
        await this.page.locator('li').filter({ hasText: 'Manage' }).locator('div').click();
        await this.page.locator('li').filter({ hasText: /^Jobs$/ }).getByRole('link').click();
        await this.page.screenshot({ path: './src/resources/snapShots/jobpage.png', fullPage: true });
        // await this.page.getByTestId('search-input').click();
        // await this.page.getByTestId('search-input').fill('006');
    //    await this.page.getByText('JOB0006').click();
        // await this.page.getByTestId('job-type-select').selectOption('zap');
        // await this.page.getByTestId('job-type-select').selectOption('k6');
        await this.page.getByTestId('status-select').selectOption('Completed');
        await this.page.getByTestId('status-select').selectOption('InProgress');
        await this.page.getByTestId('job-type-select').selectOption('zap');
        await this.page.getByTestId('status-select').selectOption('Completed');
        // const downloadPromise = this.page.waitForEvent('download');
        // await this.page.getByTestId('job-row-0').locator('path').first().click();
        // const download = await downloadPromise;
      //  await this.page.getByTestId('job-row-0').getByRole('img').nth(1).click();
    });
      }

      async createRelease(){
        await test.step("Create a  new release", async () => {
        await this.page.locator('li').filter({ hasText: 'Projects' }).locator('svg').nth(1).click();
        await this.page.locator('li').filter({ hasText: /^catalyst12$/ }).getByRole('link').click();
        await this.page.locator('li').filter({ hasText: 'Manage' }).locator('div').click();
        await this.page.locator('li').filter({ hasText: /^Releases$/ }).getByRole('link').click();
        await this.page.getByRole('button', { name: 'Create Release' }).click();
        await this.page.getByPlaceholder('Enter release title').fill('AI-Testcase generation ');
        await this.page.getByTestId('release-description').getByRole('paragraph').click();
        await this.page.locator('.tiptap').fill('Test case generation ');
        await this.page.locator('div').filter({ hasText: /^EnvironmentNone$/ }).nth(3).click();
        await this.page.getByText('DEV - WEB').click();
        await this.page.locator('div').filter({ hasText: /^Save$/ }).getByRole('button').click();
        await this.page.waitForTimeout(5000);
     //   await this.page.screenshot({ path: './src/resources/snapShots/releasePage.png', fullPage: true });
        await this.page.getByText('Release Created Successfully').isVisible();
        await this.page.waitForTimeout(5000);
        await this.page.screenshot({ path: './src/resources/snapShots/releaseCreatedpage.png', fullPage: true });
        
        
      });

      }

      async  runReleaseTestCase(){
        // await this.page.locator('li').filter({ hasText: 'Projects' }).locator('svg').nth(1).click();
        // await this.page.locator('li').filter({ hasText: /^catalyst12$/ }).getByRole('link').click();
        // await this.page.locator('li').filter({ hasText: 'Manage' }).locator('div').click();
        await this.page.locator('.text-sm > div > div > .text-teal-700').first().click();
        await this.page.getByRole('button', { name: 'Defects 0/' }).click();
        await  this.page.waitForTimeout(5000);
        await this.page.locator('div').filter({ hasText: /^Save$/ }).getByRole('button').click();
        await this.page.getByText('Your Data has beed saved').isVisible();
        await this.page.waitForTimeout(5000);
        await this.page.screenshot({ path: './src/resources/snapShots/releaseData.png', fullPage: true });
        await this.page.locator('#skip').getByRole('link', { name: 'Releases' }).click();
        await  this.page.waitForTimeout(5000);
        await this.page.getByText('Support NotificationsDefault_OrgFree TrialUser Detailscatalyst12Releases Create').click();
         await  this.page.waitForTimeout(5000);
         await this.page.locator('.col-span-1 > button').first().click();
         await this.page.waitForTimeout(5000);
         await this.page.goto('https://octopus-app-d459t.ondigitalocean.app/releases/test-execute/81c9d652-7351-437f-9848-1da35b250723');
         await this.page.waitForTimeout(10000);
        // await this.page.getByTestId('testcase-row-TC0013').locator('path').first().click();
        // await this.page.getByTestId('testcase-row-TC0013').getByText('Jaydeep').click();
        // await this.page.getByRole('button', { name: 'Test Run' }).click();
        // await  this.page.waitForTimeout(3000);
        // await this.page.locator('div').filter({ hasText: /^1$/ }).getByRole('img').click();
        // await this.page.locator('div').filter({ hasText: /^Not ExecutedPassedFailedSkippedBlocked$/ }).getByRole('combobox').selectOption('Passed');
        // await  this.page.waitForTimeout(5000);
        // await this.page.getByTestId('loading').getByRole('button').nth(2).click();
        // await this.page.getByText('Status Updated Successfully !').isVisible();
      }


}