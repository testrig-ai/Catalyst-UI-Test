import { expect,test,envFileName } from "../fixture/Fixture";
require("dotenv").config({ path: envFileName });
test.describe("FlowAnalysisPageTests", () => {

    

    test("TC001", async ({
        page,signUp
        
      }) => {
        await signUp.register(process.env.fname!,process.env.lname!,process.env.email!,process.env.password!);
        await page.waitForTimeout(5000);
        console.log(process.env.password!);
        await page.screenshot({ path: 'Default_page.png', fullPage: true }); 
       
      });

      test("TC002", async ({
        page,signUp
        
      }) => {
       
       
      });

});