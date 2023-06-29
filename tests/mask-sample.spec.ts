import{test, expect} from '@playwright/test';


test('UI test by masking - Failed', async ({page}) => {
    await page.goto('https://playwright.dev/');
    await expect(page).toHaveScreenshot({
        mask: [page.getByRole('link', { name: /\d+k\+ stargazers on GitHub/ })],
        maskColor: '#0000FF',
     });
});

test('UI test by masking - Passed', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    await page.screenshot({
        path: "pageScreenshot.png",
        mask: [page.getByRole('link', { name: /\d+k\+ stargazers on GitHub/ })],
        maskColor: '#0000FF',
      });

      await expect(page).toHaveScreenshot("pageScreenshot.png", {
        mask: [page.getByRole('link', { name: /\d+k\+ stargazers on GitHub/ })],
        maskColor: '#0000FF',

      });
    });
      
 
  
  
