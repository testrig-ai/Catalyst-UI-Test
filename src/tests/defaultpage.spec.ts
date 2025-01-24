
import { expect,test,envFileName } from "../fixture/Fixture";
require("dotenv").config({ path: envFileName });
test.describe("DefaultPageTests", () => {

    

  test("TC001", async ({
    page,signUp,defaultPage
    
  }) => {
    await signUp.register(process.env.fname!,process.env.lname!,process.env.email!,process.env.password!);
   // await  page.waitForTimeout(5000);
    await defaultPage.createNewProject();
   
     });

   test("TC002", async ({
      signUp,defaultPage,page
        
      }) => {
        await signUp.register(process.env.fname!,process.env.lname!,process.env.email!,process.env.password!);
        await defaultPage.fillEnvironment();
        
       
      });

      

});