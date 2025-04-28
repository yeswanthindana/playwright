import {expect, test} from '@playwright/test';

test('Handling fropdown', async({page})=>{

  await test.step('URL', async()=>{

    await page.goto('https://www.facebook.com/')
    await page.getByRole('button', {name : 'Create new account'}).click();
  })
  
  await test.step('DD Validations', async()=>{
    await page.getByLabel('Day').selectOption('23');
    await page.getByLabel('Month').selectOption('May');
    await page.screenshot({path : "fb.png"})
  })

})