import { defineConfig } from '@playwright/test';

export default defineConfig({
    use: {
        channel: 'chrome',
        headless: process.env.HEADLESS === 'false',
        screenshot: 'only-on-failure',
        video: 'retain-on-failure',
    },
    timeout: 60000,
    retries: 1,
    testDir: './specs',
});
