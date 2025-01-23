import { expect,test,envFileName } from "../fixture/Fixture";
require("dotenv").config({ path: envFileName });

test.describe("ManualPageTests", () => {

    test("TC003", async ({
        page,signUp,manualPage
        
      }) => {
        await signUp.register(process.env.fname!,process.env.lname!,process.env.email!,process.env.password!);

        await manualPage.createUsecase();
       
         });



});