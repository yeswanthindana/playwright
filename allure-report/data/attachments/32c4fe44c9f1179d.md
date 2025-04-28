# Test info

- Name: test
- Location: C:\Users\indan\OneDrive\Documents\Playwright2\tests\playwright-basics\rec_test.spec.ts:3:5

# Error details

```
Error: Timed out 5000ms waiting for expect(locator).toContainText(expected)

Locator: getByRole('alert')
- Expected string  - 1
+ Received string  + 5

- Incofffrect username or password.
+
+       
+       Incorrect username or password.
+
+      
Call log:
  - expect.toContainText with timeout 5000ms
  - waiting for getByRole('alert')
    2 × locator resolved to <div role="alert" aria-atomic="true" class="js-flash-alert">↵      ↵      Incorrect username or password.↵↵  …</div>
      - unexpected value "
      
      Incorrect username or password.

    "
    6 × locator resolved to <div role="alert" aria-atomic="true" class="js-flash-alert">…</div>
      - unexpected value "
      
      Incorrect username or password.

     "

    at C:\Users\indan\OneDrive\Documents\Playwright2\tests\playwright-basics\rec_test.spec.ts:24:43
    at C:\Users\indan\OneDrive\Documents\Playwright2\tests\playwright-basics\rec_test.spec.ts:23:14
```

# Page snapshot

```yaml
- link "Skip to content":
  - /url: "#start-of-content"
- banner:
  - link "Homepage":
    - /url: https://github.com/
- main:
  - heading "Sign in to GitHub" [level=1]
  - button "Dismiss this message"
  - alert: Incorrect username or password.
  - text: Username or email address
  - textbox "Username or email address": tester
  - text: Password
  - textbox "Password"
  - link "Forgot password?":
    - /url: /password_reset
  - button "Sign in"
  - heading "Password login alternatives" [level=2]
  - paragraph:
    - button "Sign in with a passkey"
  - paragraph:
    - text: New to GitHub?
    - link "Create an account":
      - /url: /signup?return_to=https%3A%2F%2Fgithub.com%2Flogin&source=login
- contentinfo:
  - list:
    - listitem:
      - link "Terms":
        - /url: https://docs.github.com/site-policy/github-terms/github-terms-of-service
    - listitem:
      - link "Privacy":
        - /url: https://docs.github.com/site-policy/privacy-policies/github-privacy-statement
    - listitem:
      - link "Docs":
        - /url: https://docs.github.com
    - listitem:
      - link "Contact GitHub Support":
        - /url: https://support.github.com
    - listitem:
      - button "Manage cookies"
    - listitem:
      - button "Do not share my personal information"
```

# Test source

```ts
   1 | import { test, expect } from '@playwright/test';
   2 |
   3 | test('test', async ({ page }) => {
   4 |
   5 |   await test.step('Entering Test URL', async () => {
   6 |     await page.goto('https://github.com/');
   7 |   })
   8 |   await test.step('Entering Credentials', async () => {
   9 |     await page.getByRole('link', { name: 'Sign in' }).click();
  10 |     await page.getByRole('textbox', { name: 'Username or email address' }).click();
  11 |     await page.getByRole('textbox', { name: 'Username or email address' }).fill('tester');
  12 |     await page.getByRole('textbox', { name: 'Username or email address' }).press('Enter');
  13 |     await page.getByRole('textbox', { name: 'Password' }).click();
  14 |     await page.getByRole('textbox', { name: 'Password' }).fill('pass');
  15 |     await page.getByRole('main').click();
  16 |   })
  17 |
  18 |   await test.step('Clicking on Sign In', async () => {
  19 |     await page.getByRole('button', { name: 'Sign in', exact: true }).click();
  20 |   })
  21 |
  22 |
  23 |   await test.step('Validating message', async () => {
> 24 |     await expect(page.getByRole('alert')).toContainText('Incofffrect username or password.');
     |                                           ^ Error: Timed out 5000ms waiting for expect(locator).toContainText(expected)
  25 |   })
  26 | });
  27 |
```