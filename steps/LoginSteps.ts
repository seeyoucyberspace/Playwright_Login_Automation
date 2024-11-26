import { Page } from 'playwright';
import { LoginActions } from '../actions/LoginActions';
import { MainActions } from '../actions/MainActions';
import { credentials } from '../config/credentials';

export class LoginSteps {
    private page: Page;
    private loginActions: LoginActions;
    private mainActions: MainActions;

    constructor(page: Page) {
        this.page = page;
        this.loginActions = new LoginActions(page);
        this.mainActions = new MainActions(page);
    }

    // Step for successful login verification
    async performLoginAndCheckLogout() {
        try {
            await this.loginActions.navigateToLoginPage();
            await this.loginActions.clickSignIn();
            await this.loginActions.clickLogIn();
            await this.loginActions.enterEmail(credentials.email);
            await this.loginActions.enterPassword(credentials.password);
            await this.loginActions.clickLogin();
            await this.mainActions.openHeaderMenu();
            await this.mainActions.verifyLogoutVisibility();

        } catch (error) {
            console.error('Error while login process:', error);
            throw error;
        }
    }
}
