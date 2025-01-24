
import { expect, test ,Page,envFileName } from "../fixture/Fixture";
require("dotenv").config({ path: envFileName });

 

test('Register to playwright config', async ({ page,signUp}) => {
   const fname  =process.env.fname!;
   const lname  = process.env.lname!;
   const email = process.env.email!;
   const password  = process.env.password!

   

  await signUp.register(fname,lname,email,password);
    
});

