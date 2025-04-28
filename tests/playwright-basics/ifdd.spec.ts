import { test, expect } from '@playwright/test';


test('Ifarme and drop down', async ({ page }) => {

    await page.goto('https://jqueryui.com/droppable/');

    const ifr = page.frameLocator('.demo-frame')

    const drag = ifr.locator('#draggable')
    const drop = ifr.locator('#droppable')
    await drag.dragTo(drop)



})