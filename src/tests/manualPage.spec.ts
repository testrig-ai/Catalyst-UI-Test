import { expect,test,envFileName } from "../fixture/Fixture";
require("dotenv").config({ path: envFileName });

test.describe("ManualPageTests", () => {

    // test("TC003", async ({
    //     page,signUp,manualPage
        
    //   }) => {
    //     await signUp.register(process.env.fname!,process.env.lname!,process.env.email!,process.env.password!);

    //     await manualPage.createUsecase();
       
    //      });

    
    //      test("TC004", async ({
    //         page,signUp,manualPage
            
    //       }) => {
    //         await signUp.register(process.env.fname!,process.env.lname!,process.env.email!,process.env.password!);
    //         await  manualPage.createUsecase();
    //         await  page.waitForTimeout(10000);
    //         await manualPage.createTestCase();
           
    //          });
  
    //    test("TC005", async ({
    //         page,signUp,manualPage
    //            }) => {
    //         await signUp.register(process.env.fname!,process.env.lname!,process.env.email!,process.env.password!);
    //         await manualPage.createPerformance();
             
    //            });


      //  test("TC006", async ({
      //      page,signUp,manualPage
      //          }) => {
      //         await signUp.register(process.env.fname!,process.env.lname!,process.env.email!,process.env.password!);
      //         await manualPage.securitytesting();
                 
      //              });

     test("TC007", async ({
           page,signUp,manualPage
               }) => {
              await signUp.register(process.env.fname!,process.env.lname!,process.env.email!,process.env.password!);
               await manualPage.verifyJobpage();
                 
                   });

        
      


});
