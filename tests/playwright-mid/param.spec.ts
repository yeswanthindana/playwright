import { test ,expect } from '@playwright/test';

const data = ['Cypress by tester talk','Playwright by tester talk','API testing by tester talk']


for(const search of data){

test(`Parameterized Test of text ${search}`, async ({ page }) => {

   await page.goto('https://www.youtube.com/');
   await page.getByRole('combobox', { name: 'Search' }).click();
   await page.getByRole('combobox', { name: 'Search' }).press('CapsLock');
   await page.getByRole('combobox', { name: 'Search' }).fill('C');
   await page.getByRole('combobox', { name: 'Search' }).press('CapsLock');
   await page.getByRole('combobox', { name: 'Search' }).fill(search);
   await page.getByRole('button', { name: 'Search', exact: true }).click();
   await expect(page.getByRole('link', { name: search })).toBeVisible();
   await expect(page.getByRole('link', { name: search })).toBeVisible();


})

}