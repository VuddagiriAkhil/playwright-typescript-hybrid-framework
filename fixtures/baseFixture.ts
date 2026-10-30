import { test as base, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { HomePage } from '../pages/homepage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';

type TestFixtures = {
    loginPage: LoginPage;
    homePage: HomePage;
    cartPage: CartPage;
    checkoutPage: CheckoutPage;
};

export const test = base.extend<TestFixtures>({

    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },

    homePage: async ({ page }, use) => {
        await use(new HomePage(page));
    },

    cartPage: async ({ page }, use) => {
        await use(new CartPage(page));
    },

    checkoutPage: async ({ page }, use) => {
    await use(new CheckoutPage(page));
}

});

export { expect };