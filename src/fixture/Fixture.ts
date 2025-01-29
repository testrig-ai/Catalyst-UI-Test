import { test as base } from "@playwright/test";
import SignUp from "../pageObject/signup.page";
import DefaultPage from "../pageObject/default.page";
import ManualPage from "../pageObject/manual.page";
import SettingPage from "../pageObject/setting.page";
type pages  =  {
   signUp: SignUp;
   defaultPage : DefaultPage;
   manualPage : ManualPage;
   settingPage : SettingPage
};
const pageObjects = base.extend<pages>({
    signUp: async ({ page }, use) => {
      await use(new SignUp(page));
    }, 
    defaultPage: async ({ page }, use) => {
      await use(new DefaultPage(page));
    }, 
    manualPage: async ({ page }, use) => {
      await use(new ManualPage(page));
    }, 
    settingPage: async ({ page }, use) => {
      await use(new SettingPage(page));
    }, 

});

export const test = pageObjects;
const envFileName = `.env.${process.env.ENV || "test"}`;
export * from "@playwright/test";
export {envFileName};