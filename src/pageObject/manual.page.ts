import { Page, envFileName, Locator, test } from "../fixture/Fixture";

export default class ManualPage {

    constructor(public page: Page) {
        this.page = page;
      }
   
      async createUsecase(){
        await this.page.locator('li').filter({ hasText: 'Projects' }).locator('svg').nth(1).click();
        await this.page.locator('li').filter({ hasText: /^catalyst12$/ }).getByRole('link').click();
        await this.page.getByText('Total Use Cases').click();
        await this.page.getByRole('button', { name: 'Create Use Case' }).click();
        await this.page.waitForTimeout(5000);
        await this.page.getByTestId('UseCasetittle-inputbox').click();
        await this.page.getByTestId('UseCasetittle-inputbox').fill('Email');
        await this.page.locator('div').filter({ hasText: /^Use Case Description \*$/ }).getByRole('paragraph').click();
        await this.page.locator('.tiptap').fill('Email login');
        await this.page.getByTestId('UseCasePreconditon-TextBox').click();
        await this.page.getByTestId('UseCasePreconditon-TextBox').fill('login page visibility');
        await this.page.locator('div').filter({ hasText: /^Email login$/ }).nth(2).click();
        await this.page.locator('div').filter({ hasText: /^Save$/ }).getByRole('button').click();
        await this.page.waitForTimeout(5000);

      }
}