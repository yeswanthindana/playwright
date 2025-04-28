import { test, expect } from '@playwright/test';


test('Locators test', async ({ page }) => {

    await test.step('Locators', async () => {

        // await page.goto('https://github.com/pavanoltraining/');
        //  await page.getByRole('link', {name : 'Sign in'}).click();




        //  await page.getByLabel('Homepage', {exact : true}).first().click();
        // await page.getByAltText("View pavanoltraining's full-sized avatar").click();
        // await page.getByTestId('i2proje cts-tab').click();
        // await page.getByText("Sign up").click();
       // await page.goto('https://www.youtube.com/');
        //  await page.getByPlaceholder("Search").fill("yeswanth reddy");
        //  await page.locator("//input[@name='search_query']").first().fill("bye");
        //  await page.locator("input[name='search_query']").first().clear();
        await page.goto('https://www.google.com/');
        await page.getByTitle("Search").fill("jai balayya")
        await page.waitForTimeout(2000);
    })



}
)