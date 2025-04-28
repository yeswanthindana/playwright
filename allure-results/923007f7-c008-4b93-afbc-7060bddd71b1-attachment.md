# Test info

- Name: Page Object Model in playwright
- Location: C:\Users\indan\OneDrive\Documents\Playwright2\tests\PageObjectModel\pom.spec.ts:7:5

# Error details

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for locator('#APjFqb')
    - locator resolved to <textarea value="" name="q" rows="1" id="APjFqb" autofocus="" class="gLFyf" title="Search" placeholder="" role="combobox" maxlength="2048" autocorrect="off" aria-owns="Alh6id" autocomplete="off" spellcheck="false" aria-label="Search" autocapitalize="off" aria-expanded="false" aria-haspopup="false" aria-controls="Alh6id" jsaction="paste:puy29d" aria-autocomplete="both" data-ved="0ahUKEwjDstrgsvqMAxVgffUHHZ6yJIQQ39UDCAM"></textarea>
  - attempting click action
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed

    at HomePage.searchWithKeyword (C:\Users\indan\OneDrive\Documents\Playwright2\src\pages\homepage.ts:24:30)
    at C:\Users\indan\OneDrive\Documents\Playwright2\tests\PageObjectModel\pom.spec.ts:13:11
```

# Test source

```ts
   1 | import { Locator,Page } from "@playwright/test";
   2 |
   3 | export class HomePage{
   4 |
   5 |     readonly page:Page;
   6 |     readonly searchBox : Locator;
   7 |
   8 |     //Constructor to initialize page object
   9 |
  10 |     constructor(page:Page){
  11 |      this.page = page;
  12 |
  13 |      // Element locators
  14 |
  15 |      this.searchBox = page.locator('#APjFqb');
  16 |     }
  17 |
  18 |     // Method to navigate to the homepage
  19 |     async goToURL(){
  20 |         await this.page.goto(`${process.env.URL}`);
  21 |     }
  22 |
  23 |     async searchWithKeyword(keyword:string){
> 24 |         await this.searchBox.click();
     |                              ^ Error: locator.click: Target page, context or browser has been closed
  25 |         await this.searchBox.fill(keyword);
  26 |         await this.searchBox.press('Enter');
  27 |     }
  28 |
  29 | }
```