import { test, expect } from '@playwright/test';


test('Capture Screenshot', async({page})=>{

    await test.step('Capturing Element screenshot', async()=>
    {
        await page.goto('https://www.pavantestingtools.com/');
        await page.locator('#header-inner').screenshot({path : './screenshots/elementscreenshot.png'})

    })

    await test.step('Cpaturing page screenshot', async() => {
        await page.screenshot({path : './screenshots/pagescreenshot.jpeg'}) ;
    })

    await test.step('Cpaturing full page screenshot', async() => {
        await page.screenshot({path : './screenshots/pagescreenshotfull.jpeg', fullPage : true}) ;
    })

})