import { test, expect } from '../../fixtures/baseFixture';
import { ENV } from '../../config/env';

test.describe('SauceDemo - Checkout Tests', () => {

    test.beforeEach(async ({ loginPage }) => {
        await loginPage.navigateToLoginPage();
        await loginPage.login(ENV.USERNAME, ENV.PASSWORD);
    });

    test('Verify successful checkout', async ({
        page,
        homePage,
        cartPage,
        checkoutPage
    }) => {

        await page.locator('#add-to-cart-sauce-labs-backpack').click();

        await homePage.openShoppingCart();
        await cartPage.verifyCartPage();

        await cartPage.proceedToCheckout();

        await checkoutPage.enterCustomerDetails(
            'Akhil',
            'Gupta',
            '500001'
        );

        await expect(checkoutPage.checkoutOverview).toBeVisible();

        await checkoutPage.finishCheckout();

        await checkoutPage.verifyOrderSuccess();
    });

    test('Verify checkout validation for empty customer details', async ({
        page,
        homePage,
        cartPage,
        checkoutPage
    }) => {

        await page.locator('#add-to-cart-sauce-labs-backpack').click();

        await homePage.openShoppingCart();
        await cartPage.proceedToCheckout();

        await checkoutPage.enterCustomerDetails('', '', '');

        await checkoutPage.verifyCheckoutError(
            'Error: First Name is required'
        );
    });

});