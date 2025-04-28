import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  await test.step('Entering Test URL', async () => {
    await page.goto('https://github.com/');
  })
  await test.step('Entering Credentials', async () => {
    await page.getByRole('link', { name: 'Sign in' }).click();
    await page.getByRole('textbox', { name: 'Username or email address' }).click();
    await page.getByRole('textbox', { name: 'Username or email address' }).fill('tester');
    await page.getByRole('textbox', { name: 'Username or email address' }).press('Enter');
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill('pass');
    await page.getByRole('main').click();
  })

  await test.step('Clicking on Sign In', async () => {
    await page.getByRole('button', { name: 'Sign in', exact: true }).click();
  })


  await test.step('Validating message', async () => {
    await expect(page.getByRole('alert')).toContainText('Incofffrect username or password.');
  })
});
