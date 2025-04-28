import { test, expect } from '@playwright/test'


test( 'My First Test', async ({page})=>{
     
    await test.step('open google', async()=>{
        await page.goto('https://www.google.com');
    })


    await test.step('Enter search term', async()=>
        {
         await page.getByRole('combobox', { name: 'Search' }).fill('Playwright');
         await page.getByRole('button', { name: 'Google Search' }).click();
         await page.getByRole('link', { name: 'Playwright: Fast and reliable' }).click();   
            
        })
    
    
    
}
)