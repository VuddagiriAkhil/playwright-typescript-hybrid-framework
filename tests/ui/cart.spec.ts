import { test, expect } from '../../fixtures/baseFixture';
import { ENV } from '../../config/env';

test.describe('SauceDemo - Cart Tests', () => {

    test.beforeEach(async ({ loginPage }) => {
        await loginPage.navigateToLoginPage();
        await loginPage.login(ENV.USERNAME, ENV.PASSWORD);
    });

    test('Verify product can be added to cart', async ({ page, homePage, cartPage }) => {

        await page.locator('#add-to-cart-sauce-labs-backpack').click();

        await expect(page.locator('.shopping_cart_badge')).toHaveText('1');

        await homePage.openShoppingCart();

        await cartPage.verifyCartPage();

        await expect(cartPage.cartItems).toHaveCount(1);

    });

    test('Verify product can be removed from cart', async ({ page, homePage, cartPage }) => {

        await page.locator('#add-to-cart-sauce-labs-backpack').click();

        await homePage.openShoppingCart();

        await page.locator('#remove-sauce-labs-backpack').click();

        await expect(cartPage.cartItems).toHaveCount(0);

    });

});