import test from "playwright/test";

test("shadow dom", async ({ page }) => {
    await page.goto("https://letcode.in/shadow");
    await page.fill("#fname", "chou");
    await page.waitForTimeout(3000);
})