import fs from "fs";
import path from "path";
import { test as setup, Page } from "../fixture/Fixture";

const authFile = path.join(__dirname, "../../src/resources/.auth/user.json");

setup("authenticate", async ({ page, signUp}) => { 
   await page.goto(process.env.url!);
    await signUp.register(
        process.env.fname!,
        process.env.lname!,
        process.env.email!,
        process.env.password!
      );
  
    await page.context().storageState({ path: authFile });
  });

  