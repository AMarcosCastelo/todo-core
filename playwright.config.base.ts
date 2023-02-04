import type { PlaywrightTestConfig } from '@playwright/test';
import { devices } from '@playwright/test';

/**
 * See https://playwright.dev/docs/test-configuration for more information
 */

const baseURL = process.env.E2E_BASE_URL || 'http://localhost:4200/';

export const baseConfig: PlaywrightTestConfig = {
  retries: process.env.CI ? 2 : 0,
  maxFailures: 2,
  timeout: 30 * 1000,
  expect: {
    timeout: 5000,
  },
  use: {
    actionTimeout: 0,
    baseURL,
    trace: 'on-first-retry',
  },
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  workers: process.env.CI ? 1 : undefined,
  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
      },
    },
    {
      name: 'firefox',
      use: {
        ...devices['Desktop Firefox'],
      },
    },
    {
      name: 'webkit',
      use: {
        ...devices['Desktop Safari'],
      },
    },
  ],
};
