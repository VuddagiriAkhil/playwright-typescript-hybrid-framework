import { Page, Locator, expect } from '@playwright/test';

export class CheckoutPage {
    readonly page: Page;
    readonly firstName: Locator;
    readonly lastName: Locator;
    readonly postalCode: Locator;
    readonly continueButton: Locator;
    readonly finishButton: Locator;
    readonly checkoutOverview: Locator;
    readonly successMessage: Locator;

    constructor(page: Page) {
        this.page = page;
        this.firstName = page.locator('#first-name');
        this.lastName = page.locator('#last-name');
        this.postalCode = page.locator('#postal-code');
        this.continueButton = page.locator('#continue');
        this.finishButton = page.locator('#finish');
        this.checkoutOverview = page.locator('.checkout_summary_container');
        this.successMessage = page.locator('.complete-header');
    }

    async enterCustomerDetails(
        firstName: string,
        lastName: string,
        postalCode: string
    ): Promise<void> {
        await this.firstName.fill(firstName);
        await this.lastName.fill(lastName);
        await this.postalCode.fill(postalCode);
        await this.continueButton.click();
    }

    async finishCheckout(): Promise<void> {
        await this.finishButton.click();
    }

    async verifyOrderSuccess(): Promise<void> {
        await expect(this.successMessage).toHaveText('Thank you for your order!');
    }

    async verifyCheckoutError(message: string): Promise<void> {
    await expect(this.page.locator('[data-test="error"]'))
        .toContainText(message);
}
}