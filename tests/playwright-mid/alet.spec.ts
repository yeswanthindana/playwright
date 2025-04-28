import { test, expect } from '@playwright/test';

test('alert', async ({ page }) => {
    await page.goto(`${process.env.URL}`);

    page.once('dialog', async (dialog) => {
        expect(dialog.message()).toBe('I am an alert box!');
        await dialog.accept();
        console.log('Alert accepted: ' + dialog.message());
    });

    await page.locator('button[onclick="alertbox()"]').click();
});
