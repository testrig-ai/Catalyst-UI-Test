
import { Page , envFileName,Locator, test} from "../fixture/Fixture";
require("dotenv").config({ path: envFileName });

 export default class SignUp{

   constructor(public page:Page){

       this.page = page;
}

// private readonly defaultassertion: Locator = this.page.locator(
//   "(//button[contains(@class,'relative flex')])[1]"
// );

  async register(fname:string,lname:string ,EmailId:string,password:string){
    await this.page.goto('https://octopus-app-d459t.ondigitalocean.app/');
    await this.page.getByRole('button', { name: 'Sign up' }).click();
    await this.page.getByLabel('First name').click();
    await this.page.getByLabel('First name').fill(`${fname}`);
    await this.page.getByLabel('Last name').click();
    await this.page.getByLabel('Last name').fill(`${lname}`);
    await this.page.getByText('First name Last name Email').click();
    await this.page.getByLabel('Email').click();
    await this.page.getByLabel('Email').fill(`${EmailId}`);
    await this.page.getByRole('button', { name: 'Create your account' }).click();
    await this.page.getByLabel('Password', { exact: true }).click();
    await this.page.getByLabel('Password', { exact: true }).fill(`${password}`);
    await this.page.getByRole('button', { name: 'Continue' }).click();
    await  this.page.waitForTimeout(10000);
    
   //v
}


}