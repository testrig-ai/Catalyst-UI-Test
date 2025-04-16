import { Page, envFileName, Locator, test } from "../fixture/Fixture";
import * as path from 'path';
export default class UserDetailsPage {
 
    constructor(public page: Page) {
        this.page = page;
      }
 
      async addProfilePhoto(){
        await test.step("add a new profile photo ", async () => {
           
            await this.page.locator('nav').filter({ hasText: 'Support NotificationsDefault_OrgFree TrialUser Details' }).getByRole('button').nth(3).click();
            await this.page.getByRole('menuitem', { name: 'Profile' }).click();
            await  this.page.waitForTimeout(5000);
            await this.page.locator('input[type="file"]').click();
            await this.page.waitForTimeout(5000)
            const filePath = path.resolve(__dirname, '../../src/resources/image.jpg');
           
            await this.page.locator('input[type="file"]').setInputFiles(filePath);
            await this.page.waitForTimeout(5000);
            await this.page.getByRole('button', { name: 'Save' }).click();
            await  this.page.waitForTimeout(5000);
            await this.page.getByText('Profile updated successfully').isVisible();  
            await this.page.screenshot({
                path: "./src/resources/snapShots/userDetailsPage.png",
                fullPage: true,
              });
 
        });
 
      }
     
      async  Verifylogout(){
        await test.step("verify logout", async () => {
            await this.page.locator('nav').filter({ hasText: 'Support NotificationsDefault_OrgFree TrialUser Details' }).getByRole('button').nth(3).click();
            await this.page.getByRole('menuitem', { name: 'Logout' }).click();  
            await this.page.waitForTimeout(5000);
            await this.page.screenshot({
                path: "./src/resources/snapShots/verifyLogout.png",
                fullPage: true,
              });
        });
      }
 
}