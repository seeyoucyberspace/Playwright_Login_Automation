import { BrowserUtils } from '../utils/BrowserUtils';
import { LoginSteps } from '../steps/LoginSteps';
import { describe, beforeAll, afterAll, it } from 'vitest';
import { Browser, Page } from 'playwright';

let browser: Browser;
let page: Page;
let loginSteps: LoginSteps;

describe('Login Flow Automation: ', () => {
    beforeAll(async () => {
        // Browser setup before test run
        const browserSetup = await BrowserUtils.setupBrowser();
        browser = browserSetup.browser;
        page = browserSetup.page;
        loginSteps = new LoginSteps(page);
    });

    it('should successfully login', async () => {
        await loginSteps.performLoginAndCheckLogout();
    });

    afterAll(async () => {
        // Browser closed after test run
        await BrowserUtils.closeBrowser(browser);
    });

});
