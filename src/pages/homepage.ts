import { Locator,Page } from "@playwright/test";

export class HomePage{

    readonly page:Page;
    readonly searchBox : Locator;

    //Constructor to initialize page object

    constructor(page:Page){
     this.page = page;

     // Element locators

     this.searchBox = page.locator('#APjFqb');
    }

    // Method to navigate to the homepage
    async goToURL(){
        await this.page.goto(`${process.env.URL}`);
    }

    async searchWithKeyword(keyword:string){
        await this.searchBox.click();
        await this.searchBox.fill(keyword);
        await this.searchBox.press('Enter');
    }

}