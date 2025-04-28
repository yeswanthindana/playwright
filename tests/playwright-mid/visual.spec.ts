import { test, expect } from '@playwright/test';
import path from 'path';

test('Visual Testing', async ({ page }) => {

    await test.step('Current page snippet', async () => {

        await page.goto('https://github.com/login', { waitUntil: 'networkidle' });
        //await page.waitForTimeout(5000);
        await expect(page).toHaveScreenshot('ss.png');
        await page.getByRole('textbox', { name: 'Username or email address' }).click();
        await page.getByRole('textbox', { name: 'Username or email address' }).fill('yeswagbh');
        await expect(page).toHaveScreenshot('ss.png');
    })

})

test('Visual Element Testing - Element Specific', async ({ page }) => {

    await test.step('ele page snippet', async () => {

        await page.goto('https://github.com/login', { waitUntil: 'networkidle' });
        const tg = page.locator('[class="auth-form-body mt-3"]')    
        //await page.waitForTimeout(5000);
        await expect(tg).toHaveScreenshot('ssmb.png');
        await page.getByRole('textbox', { name: 'Username or email address' }).click();
        await page.getByRole('textbox', { name: 'Username or email address' }).fill('yeswagbh');
        await expect(tg).toHaveScreenshot('ssmb.png');
    })

})