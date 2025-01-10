
import { Page , envFileName ,Locator,test} from "../fixture/Fixture";

export default class DefaultPage{
    constructor(public page:Page){
    
           this.page = page;
    }

    private readonly environment: Locator = this.page.locator(
        "(//button[contains(@class,'relative flex')])[2]"
      );

   
    public async fillEnvironment(){
       test.step("Move to Median Earning page", async () => { 

        await this.environment.click();
        await  this.page.getByPlaceholder('Enter Environment Name').click();
       await  this.page.getByPlaceholder('Enter Environment Name').fill('PRODUCTIOn');
       await this.page.locator('div').filter({ hasText: /^Application Type\*NoneWebAPI$/ }).getByRole('combobox').selectOption('WEB');
       await this.page.getByPlaceholder('example.com', { exact: true }).click();
       await  this.page.getByPlaceholder('example.com', { exact: true }).fill('example.com');
       await  this.page.getByRole('button', { name: 'Save' }).click();


      });
      
    }

    

}