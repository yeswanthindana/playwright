import {test, expect}  from '@playwright/test';         

test('Mouse',async({page})=>{
    await page.goto('https://www.youtube.com/results?search_query=bakapa+playwright'); // Navigate to Google homepage
   // await page.locator('.style-scope ytd-video-renderer').first().click({button: 'left'}) 
     // Wait for 5 seconds to observe the click action
  //  await page.locator('.style-scope ytd-video-renderer').first().click({button: 'middle'}) 

    await page.locator('.style-scope ytd-video-renderer').first().click({button: 'right'}) 
    await page.waitForTimeout(5000);
    // await page.mouse.move(0, 0); // Move mouse to the top-left corner of the page
    // await page.mouse.down(); // Press down the left mouse button
     await page.mouse.move(100, 100); // Move mouse to (100, 100)
    // await page.mouse.up(); // Release the left mouse button
    // await page.mouse.click(200, 200); // Click at (200, 200)
    // await page.mouse.dblclick(300, 300); // Double-click at (300, 300)
     await page.mouse.wheel(0, 1000); // Scroll down by 100 pixels
     await page.waitForTimeout(5000);

})