import {test, expect} from '@playwright/test';

test("Open home page and verify title", async ({page}) => {
    await page.goto("https://www.fifa.com/");

    await expect(page).toHaveTitle('FIFA | The Home of Football'); // use await because you are using promises (objects)

})

test("Verify logo is visible and has the alt title", async ({page}) => {
    await page.goto("https://www.fifa.com/");

    const logo =  page.locator('[href="/en/home"]')

    await expect(logo).toBeVisible();
})