import { defineConfig } from '@playwright/test'

export default defineConfig({
  testDir: './tests/e2e',
  testMatch: '**/*.spec.ts',
  fullyParallel: false,
  retries: 1,
  workers: 1,
  reporter: 'list',
  use: {
    baseURL: 'http://127.0.0.1:4173',
    browserName: 'chromium',
    channel: 'chrome',
    screenshot: 'only-on-failure',
    trace: 'retain-on-failure',
  },
  webServer: {
    // Why this exists: npx works universally across platforms (including Windows and CI)
    // without requiring pnpm to be in the global PATH environment variable.
    command: 'npx vite --config tests/e2e/fixture/vite.config.ts --host 127.0.0.1 --port 4173',
    reuseExistingServer: true,
    timeout: 120_000,
    url: 'http://127.0.0.1:4173',
  },
})
