import { test, expect } from '@playwright/test';

import td from '../../TestData/QA/td.json'

//defining structure for type safety
type TestData = {
    TestDataSet1: {
        Skill1: string,
        Skill2: string
    },
    TestDataSet2: {
        Skill1: string,
        Skill2: string
    }
}

const typedTestData = td as TestData;

for (const dataSetName in typedTestData) {
    const skill = typedTestData[dataSetName as keyof TestData];

    test(`test Data Driven using JSON :  ${skill.Skill1} `, async ({ page }) => {
        await page.goto('https://www.youtube.com/');
        await page.getByRole('combobox', { name: 'Search' }).click();
        await page.getByRole('combobox', { name: 'Search' }).fill(skill.Skill1);
        await page.getByRole('button', { name: 'Search', exact: true }).click();
        await expect(page.locator('#channel-title')).toContainText('Playwright');
    });

}


