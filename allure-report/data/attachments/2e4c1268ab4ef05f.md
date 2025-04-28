# Test info

- Name: My First Test
- Location: C:\Users\indan\OneDrive\Documents\Playwright2\tests\playwright-basics\myfirst.spec.ts:4:5

# Error details

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByRole('link', { name: 'Playwright: Fast and reliable' })

    at C:\Users\indan\OneDrive\Documents\Playwright2\tests\playwright-basics\myfirst.spec.ts:15:82
    at C:\Users\indan\OneDrive\Documents\Playwright2\tests\playwright-basics\myfirst.spec.ts:11:5
```

# Page snapshot

```yaml
- separator
- iframe
- separator
- text: About this page Our systems have detected unusual traffic from your computer network. This page checks to see if it's really you sending the requests, and not a robot.
- link "Why did this happen?":
  - /url: "#"
- text: "IP address: 152.59.214.179 Time: 2025-04-27T16:24:41Z URL: https://www.google.com/search?q=Playwright&sca_esv=0dfcf34fe0d74fa0&source=hp&ei=RVoOaMHhOLuu0-kPzbKL6AI&iflsig=ACkRmUkAAAAAaA5oVbbXK0_eWW7LOHSW0RmVGEhmZ7yt&ved=0ahUKEwiBmNaH0PiMAxU71zQHHU3ZAi0Q4dUDCBI&oq=Playwright&gs_lp=Egdnd3Mtd2l6IgpQbGF5d3JpZ2h0SKEBUABYAHAAeACQAQCYAQCgAQCqAQC4AQzIAQD4AQGYAgCgAgCYAwCSBwCgBwCyBwC4BwA&sclient=gws-wiz&sei=SFoOaJbbNIGcseMP2vu36QQ"
```

# Test source

```ts
   1 | import { test, expect } from '@playwright/test'
   2 |
   3 |
   4 | test( 'My First Test', async ({page})=>{
   5 |      
   6 |     await test.step('open google', async()=>{
   7 |         await page.goto('https://www.google.com');
   8 |     })
   9 |
  10 |
  11 |     await test.step('Enter search term', async()=>
  12 |         {
  13 |          await page.getByRole('combobox', { name: 'Search' }).fill('Playwright');
  14 |          await page.getByRole('button', { name: 'Google Search' }).click();
> 15 |          await page.getByRole('link', { name: 'Playwright: Fast and reliable' }).click();   
     |                                                                                  ^ Error: locator.click: Test timeout of 30000ms exceeded.
  16 |             
  17 |         })
  18 |     
  19 |     
  20 |     
  21 | }
  22 | )
```