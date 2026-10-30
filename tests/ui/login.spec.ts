import { test, expect } from '../../fixtures/baseFixture';
import loginData from '../../test-data/loginData.json';
import type { LoginTestData } from '../../test-data/loginTypes';

const testData = loginData as LoginTestData[];

test.describe('SauceDemo - Data Driven Login Tests', () => {

    for (const data of testData) {

        test(`Login test - ${data.username}`, async ({ loginPage, homePage }) => {

            await loginPage.navigateToLoginPage();
            await loginPage.login(data.username, data.password);

            if (data.expectedResult === 'success') {
                await homePage.verifyHomePage();
                await expect(homePage.inventoryContainer).toBeVisible();
            } else {
                await loginPage.verifyLoginError(
                    'Sorry, this user has been locked out.'
                );
            }
        });
    }
});