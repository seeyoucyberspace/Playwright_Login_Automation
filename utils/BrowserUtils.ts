import { chromium, Browser } from 'playwright';

export class BrowserUtils {
    static async setupBrowser() {
        try {
            const executablePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

            const browser = await chromium.launch({
                executablePath: executablePath,
                headless: false,
            });

            const context = await browser.newContext();
            const page = await context.newPage();
            return { browser, page };
        } catch (error) {
            console.error('An error occurred while setting up the browser:', error);
            throw error;
        }
    }

    static async closeBrowser(browser: Browser) {
        if (!browser) {
            console.error('Browser instance is not defined');
            return;
        }
        try {
            await browser.close();
        } catch (error) {
            console.error('An error occurred while closing the browser:', error);
            throw error;
        }
    }
}
