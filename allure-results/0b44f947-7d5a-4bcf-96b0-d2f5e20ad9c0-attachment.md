# Test info

- Name: Page Object Model in playwright
- Location: C:\Users\indan\OneDrive\Documents\Playwright2\tests\PageObjectModel\pom.spec.ts:7:5

# Error details

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByRole('link', { name: 'undefined' }).first()
    - waiting for" https://www.google.com/sorry/index?continue=https://www.google.com/search%3Fq%3Dplaywright%26sca_esv%3Db897ea522cee66a6%26source%3Dhp%26ei%3DtEQPaMPwK_LW1e8P6IyQoA0%26iflsig%3DACkRmUkAAAAAaA9SxEE1vQt…" navigation to finish...
    - navigated to "https://www.google.com/sorry/index?continue=https://www.google.com/search%3Fq%3Dplaywright%26sca_esv%3Db897ea522cee66a6%26source%3Dhp%26ei%3DtEQPaMPwK_LW1e8P6IyQoA0%26iflsig%3DACkRmUkAAAAAaA9SxEE1vQt…"

    at ResultPage.clickOnPlaylist (C:\Users\indan\OneDrive\Documents\Playwright2\src\pages\resultpage.ts:15:67)
    at C:\Users\indan\OneDrive\Documents\Playwright2\tests\PageObjectModel\pom.spec.ts:15:11
```

# Page snapshot

```yaml
- separator
- iframe
- separator
- text: About this page Our systems have detected unusual traffic from your computer network. This page checks to see if it's really you sending the requests, and not a robot.
- link "Why did this happen?":
  - /url: "#"
- text: "IP address: 152.59.214.179 Time: 2025-04-28T09:04:55Z URL: https://www.google.com/search?q=playwright&sca_esv=b897ea522cee66a6&source=hp&ei=tEQPaMPwK_LW1e8P6IyQoA0&iflsig=ACkRmUkAAAAAaA9SxEE1vQtpMcQqw-9XuLY2WfmpF0t1&ved=0ahUKEwjDmvrQr_qMAxVya_UHHWgGBNQQ4dUDCA8&uact=5&oq=playwright&gs_lp=Egdnd3Mtd2l6IgpwbGF5d3JpZ2h0MgoQABgDGOoCGI8BMgoQABgDGOoCGI8BMgoQABgDGOoCGI8BMgoQABgDGOoCGI8BMgoQABgDGOoCGI8BMgoQABgDGOoCGI8BMgoQABgDGOoCGI8BMgoQABgDGOoCGI8BMgoQABgDGOoCGI8BMgoQABgDGOoCGI8BSI0BUFdYV3ABeACQAQCYAQCgAQCqAQC4AQPIAQD4AQGYAgGgAg-oAgqYAw_xBU_41ShXqXBykgcBMaAHALIHALgHAA&sclient=gws-wiz&sei=tkQPaNfMJ5eP4-EPve6IoA0"
- iframe
```

# Test source

```ts
   1 | import { Locator, Page } from "@playwright/test";
   2 |
   3 | export class ResultPage {
   4 |
   5 |     readonly page: Page;
   6 |
   7 |     constructor(page: Page) {
   8 |         this.page = page;
   9 |
  10 |         // Elements
  11 |     }
  12 |
  13 |     // Methods
  14 |     async clickOnPlaylist(link: string) {
> 15 |         await this.page.getByRole('link', { name: link }).first().click();
     |                                                                   ^ Error: locator.click: Test timeout of 30000ms exceeded.
  16 |     }
  17 | }
```