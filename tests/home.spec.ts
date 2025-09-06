import {test, expect} from '@playwright/test';

test("Open home page and verify title", async ({page}) => {
    await page.goto("https://www.fifa.com/");

    await expect(page).toHaveTitle('FIFA | The Home of Football'); // use await because you are using promises (objects)
    
})