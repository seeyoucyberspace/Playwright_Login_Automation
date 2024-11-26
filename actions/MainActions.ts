import { Page } from 'playwright';
import { MainPage } from '../pages/MainPage';
import { ElementNotFoundError } from '../utils/ErrorUtils';

export class MainActions {
    private page: Page;
    private mainPage: MainPage;

    constructor(page: Page) {
        this.page = page;
        this.mainPage = new MainPage(page);
    }

    // Low-level actions
    async openHeaderMenu() {
        try {
            await this.page.waitForSelector(this.mainPage.headerBurgerButton);
            await this.page.click(this.mainPage.headerBurgerButton);
            console.log(`[${new Date().toISOString()}]: Header menu is open`);
        } catch (error) {
            console.error('Error while trying open Header Burger:', error);
            throw new ElementNotFoundError('Header Burger not found');
        }
    }

    async verifyLogoutVisibility() {
        try {
            await this.page.isVisible(this.mainPage.logoutButton);
            console.log(`[${new Date().toISOString()}] Logout button is visible`);
        } catch (error) {
            console.error(`[${new Date().toISOString()}] Error while trying check Logout button:`, error);
            throw error;
        }
    }

}
