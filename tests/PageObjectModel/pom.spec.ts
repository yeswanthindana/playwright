import {test, expect} from '@playwright/test';
import { HomePage } from '../../src/pages/homepage';
import { ResultPage } from '../../src/pages/resultpage';
import { PlaylistPage } from '../../src/pages/playlistpage';


test('Page Object Model in playwright', async({page})=>
{
    console.log('Running test with Page Object Model in Playwright');
 await page.setViewportSize({
    width: 1280,
    height: 720,

 
 })
 const hp = new HomePage(page);
 await hp.goToURL();
 await hp.searchWithKeyword(`${process.env.keyword}`);

 const rp = new ResultPage(page);
 await rp.clickOnPlaylist(`${process.env.playlist}`);

 const pp = new PlaylistPage(page);
 pp.validatePageTitle(`${process.env.playlist}`);




})