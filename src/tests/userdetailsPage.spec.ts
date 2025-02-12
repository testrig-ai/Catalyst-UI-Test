import { userInfo } from "node:os";
import { expect, test, envFileName } from "../fixture/Fixture";
import UserDetailsPage from "../pageObject/userdetails.page";
//import UserDetailsPage from "../pageObject/userdetails.page";
require("dotenv").config({ path: envFileName });

test.describe("UserdetailsPageTest @details", () => {

    test("TC010-Add new profile pic", async ({  page,userdetailspage}) => {
        await page.goto(process.env.page!); 
        await userdetailspage.addProfilePhoto();
        });

     test("TC011-verify logout", async ({  page,userdetailspage}) => {
         await page.goto(process.env.page!); 
         await userdetailspage.Verifylogout();
         });
});