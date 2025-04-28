import { test, expect } from '@playwright/test';

import path from 'path';
import { readExcelFile } from '../../src/utilities/excelhelper';

const filepath = path.join(__dirname,'../../TestData/QA/testdataxl.xlsx');
const records = readExcelFile(filepath);

for(const record of records){

    test(`test Data Driven using JSON : ${record.Skill1}`, async ({ page }) => {
        await page.goto('https://www.youtube.com/');
        await page.getByRole('combobox', { name: 'Search' }).click();
        await page.getByRole('combobox', { name: 'Search' }).fill(record.Skill1);
        await page.getByRole('button', { name: 'Search', exact: true }).click();
        await expect(page.locator('#channel-title')).toContainText(record.Skill1);
    });

}


