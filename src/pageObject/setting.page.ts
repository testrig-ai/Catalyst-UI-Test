import { Page, envFileName, Locator, test } from "../fixture/Fixture";
 
export default class SettingPage {
  constructor(public page: Page) {
    this.page = page;
  }
 
  async verifyAuditlog() {
    await test.step("Verigy  Audit  page", async () => {
      await this.page
        .locator("li")
        .filter({ hasText: "Projects" })
        .locator("svg")
        .nth(1)
        .click();
     await this.page.getByRole('link', { name: 'catalyst12' }).click();
      await this.page
        .locator("ul")
        .filter({ hasText: "ProjectsNew" })
        .locator("div")
        .nth(2)
        .click();
        await this.page.getByRole('link', { name: 'Organization' }).click();
      await this.page.getByRole("button", { name: "Audit Logs" }).click();
      await this.page.waitForTimeout(5000);
      await this.page.screenshot({
        path: "./src/resources/snapShots/auditPage.png",
        fullPage: true,
      });
      await this.page
        .locator(
          "(//div[contains(@class,'hover:bg-neutral-100 dark:hover:bg-neutral-800')])[1]"
        )
        .click();
      await this.page.locator("body").press("Space");
      await this.page.waitForTimeout(2000);
      await this.page.locator("body").press("Space");
      await this.page.waitForTimeout(2000);
      await this.page.locator("body").press("Space");
      await this.page.waitForTimeout(2000);
      await this.page.locator("body").press("Space");
 
      await this.page.getByTestId("search_logs").click();
      await this.page.getByPlaceholder("Search Logs...").fill("update");
    });
  }
 
  async verifyTeamPage() {
    await test.step("Verify  Team page ", async () => {
      await this.page
        .locator("li")
        .filter({ hasText: "Projects" })
        .locator("svg")
        .nth(1)
        .click();
     await this.page.getByRole('link', { name: 'catalyst12' }).click();
      await this.page
        .locator("ul")
        .filter({ hasText: "ProjectsNew" })
        .locator("div")
        .nth(2)
        .click();
        await this.page.getByRole('link', { name: 'Organization' }).click();
      await this.page.getByRole("button", { name: "Team Members" }).click();
      await this.page.getByPlaceholder("Enter Email").click();
      await this.page
        .getByPlaceholder("Enter Email")
        .fill("jayjoshi@gmail.com");
      await this.page.getByRole("combobox").selectOption("member");
      await this.page.getByRole("button", { name: "Invite User" }).click();
      await this.page.waitForTimeout(5000);
      await this.page.getByText("Invitation sent successfully!").isVisible();
      await this.page.screenshot({
        path: "./src/resources/snapShots/teamPage.png",
        fullPage: true,
      });
    });
  }
}
 