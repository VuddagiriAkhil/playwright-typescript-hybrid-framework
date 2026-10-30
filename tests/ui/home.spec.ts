import { test, expect } from '../../fixtures/baseFixture';
import { ENV } from '../../config/env';

test.describe('SauceDemo - Login Tests', () => {

    test.beforeEach(async ({ loginPage }) => {
        await loginPage.navigateToLoginPage();
    });

    test('Verify successful login', async ({ loginPage, homePage }) => {

        await loginPage.login(ENV.USERNAME, ENV.PASSWORD);

        await homePage.verifyHomePage();

        await expect(homePage.inventoryContainer).toBeVisible();
    });

    test('Verify locked out user cannot login', async ({ loginPage }) => {

        await loginPage.login('locked_out_user', 'secret_sauce');

        await loginPage.verifyLoginError(
            'Sorry, this user has been locked out.'
        );
    });

});