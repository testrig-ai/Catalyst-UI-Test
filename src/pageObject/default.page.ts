import { Page, envFileName, Locator, test } from "../fixture/Fixture";

export default class DefaultPage {

  constructor(public page: Page) {
    this.page = page;
  }

  private readonly environment: Locator = this.page.locator(
    "//button[text()='Environment']"
  );

   async fillEnvironment() {
   await test.step("ENter  environment details ", async () => {
   //   await this.page.waitForTimeout(5000);;
      await this.page.locator('li').filter({ hasText: 'Projects' }).locator('svg').nth(1).click();
      await this.page.locator('li').filter({ hasText: /^catalyst12$/ }).getByRole('link').click();
      await this.page.waitForTimeout(50000);
      await this.page.getByRole('button', { name: 'Environment' }).click();
      await this.page.getByPlaceholder('Enter Environment Name').click();
      await this.page.waitForTimeout(5000);
      await this.page.getByPlaceholder('Enter Environment Name').fill('DEV');
      await this.page.locator('div').filter({ hasText: /^Application Type\*NoneWebAPI$/ }).getByRole('combobox').selectOption('WEB');
      await this.page.getByPlaceholder('example.com', { exact: true }).click();
      await this.page.waitForTimeout(5000);
      await this.page.getByPlaceholder('example.com', { exact: true }).fill('example.com');
      await this.page.getByRole('button', { name: 'Save' }).click();
      await this.page.waitForTimeout(10000);
      });
  }

  async createNewProject(){
    await this.page.locator('li').filter({ hasText: 'Projects' }).locator('path').nth(1).click();
    await this.page.locator('li').filter({ hasText: /^New Project$/ }).getByRole('link').click();
    await this.page.getByPlaceholder('Enter Name').click();
    await this.page.getByPlaceholder('Enter Name').fill('Catalyst ');
    await this.page.getByTestId('Project-description-box').click();
    await this.page.getByTestId('Project-description-box').fill('Testing ');
    await this.page.getByTestId('empty-submit').click();
  }
}
//v