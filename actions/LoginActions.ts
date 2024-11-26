import { Page } from 'playwright';
import { LoginPage } from '../pages/LoginPage';
import { urls } from '../config/urls';
import { ElementNotFoundError, NavigationError } from '../utils/ErrorUtils';

export class LoginActions {
    private page: Page;
    private loginPage: LoginPage;

    constructor(page: Page) {
        this.page = page;
        this.loginPage = new LoginPage(page);
    }

    // Low-level actions
    async navigateToLoginPage() {
        try {
            await this.page.goto(urls.loginPage);
            console.log(`[${new Date().toISOString()}]: Login page is open`);
        } catch (error) {
            console.error('An error occurred while navigating to the login page:', error);
            throw new NavigationError('Failed to navigate to login page');
        }
    }

    async clickSignIn() {
        try {
            await this.page.waitForSelector(this.loginPage.signInButton);
            await this.page.click(this.loginPage.signInButton);
            console.log(`[${new Date().toISOString()}]: Sign in is open`);
        } catch (error) {
            console.error('An error occurred while clicking the Sign In button:', error);
            throw new ElementNotFoundError('Sign In button not found');
        }
    }

    async clickLogIn() {
        try {
            await this.page.waitForSelector(this.loginPage.logInButton);
            await this.page.click(this.loginPage.logInButton);
            console.log(`[${new Date().toISOString()}]: Log in is open`);
        } catch (error) {
            console.error('An error occurred while clicking the Sign In button:', error);
            throw new ElementNotFoundError('Sign In button not found');
        }
    }


    async enterEmail(email: string) {
        try {
            await this.page.fill(this.loginPage.emailField, email);
            console.log(`[${new Date().toISOString()}]: Email is enter`);
        } catch (error) {
            console.error('An error occurred while entering the email:', error);
            throw error;
        }
    }

    async enterPassword(password: string) {
        try {
            await this.page.fill(this.loginPage.passwordField, password);
            console.log(`[${new Date().toISOString()}]: Password is enter`);
        } catch (error) {
            console.error('An error occurred while entering the password:', error);
            throw error;
        }
    }

    async clickLogin() {
        try {
            await this.page.click(this.loginPage.loginButton);
            console.log(`[${new Date().toISOString()}]: Login button is clicked`);
        } catch (error) {
            console.error('An error occurred while clicking the Login button:', error);
            throw error;
        }
    }
}