import { Page, Locator, expect } from '@playwright/test';

export class HomePage {
    readonly page: Page;
    readonly productTitle: Locator;
    readonly inventoryContainer: Locator;
    readonly inventoryItems: Locator;
    readonly shoppingCart: Locator;
    readonly menuButton: Locator;
    readonly logoutLink: Locator;

    constructor(page: Page) {
        this.page = page;
        this.productTitle = page.locator('.title');
        this.inventoryContainer = page.locator('.inventory_list');
        this.inventoryItems = page.locator('.inventory_item');
        this.shoppingCart = page.locator('.shopping_cart_link');
        this.menuButton = page.locator('#react-burger-menu-btn');
        this.logoutLink = page.locator('#logout_sidebar_link');
    }

    async verifyHomePage(): Promise<void> {
        await expect(this.page).toHaveURL(/inventory.html/);
        await expect(this.productTitle).toHaveText('Products');
        await expect(this.inventoryContainer).toBeVisible();
    }

    async getProductCount(): Promise<number> {
        await expect(this.inventoryItems.first()).toBeVisible();
        return await this.inventoryItems.count();
    }

    async openShoppingCart(): Promise<void> {
        await this.shoppingCart.click();
    }

    async openMenu(): Promise<void> {
        await this.menuButton.click();
    }

    async logout(): Promise<void> {
        await this.openMenu();
        await this.logoutLink.click();
    }
}