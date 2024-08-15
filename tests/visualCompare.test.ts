import { test, expect } from '@playwright/test';

test('example test', async ({ page }) => {
    await page.goto('https://letcode.in/signup');
    await expect(page).toHaveScreenshot('login.png');
});

// test('UI should match snapshot', async ({ page }) => {
//     // Navigate to the page
//     await page.goto('https://letcode.in/signup');

//     // Capture a screenshot and compare with the snapshot
//     expect(await page.screenshot()).toMatchSnapshot();
// });
// test('example test', async ({ page }) => {
//     await page.goto('https://playwright.dev');
//     expect(await page.textContent('.hero__title')).toMatchSnapshot('hero.txt');
// });

// import { test, expect } from '@playwright/test';

// test('Detect website version by layout', async ({ page }) => {
//     await page.goto('https://letcode.in/signup');

//     // First, compare against web_ver1 layout
//     let isWebVer1 = false;
//     try {
//         await expect(page).toHaveScreenshot('login_ver1.png');
//         isWebVer1 = true;
//     } catch (e) {
//         isWebVer1 = false;
//     }

//     // If not web_ver1, compare against web_ver2 layout
//     let isWebVer2 = false;
//     if (!isWebVer1) {
//         try {
//             await expect(page).toHaveScreenshot('login_ver2.png');
//             isWebVer2 = true;
//         } catch (e) {
//             isWebVer2 = false;
//         }
//     }

//     // Determine which version is currently loaded
//     if (isWebVer1) {
//         console.log("The current website is web_ver1.");
//     } else if (isWebVer2) {
//         console.log("The current website is web_ver2.");
//     } else {
//         console.log("The current website layout does not match either known version.");
//     }
// });
