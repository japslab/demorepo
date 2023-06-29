import{test, expect} from '@playwright/test';
import Jimp from 'jimp';


test('turn to greyscale image', async ({page}) => {
await page.route('**/*/Browsers.png', async route => {
    const response = await route.fetch();
    const bytes = await response.body();
    const png = await Jimp.read(bytes);
    const grey = png.greyscale();
await route.fulfill({
    response,
    body: await grey.getBufferAsync('image/png'),
    });
});
await page.goto('https://playwright.dev/');
});