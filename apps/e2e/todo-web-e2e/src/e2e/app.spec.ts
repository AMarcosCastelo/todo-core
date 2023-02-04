import { expect, test } from '@playwright/test';

test('todo-web', async ({ page }) => {
  await page.goto('/');

  const greeting = page.locator('h1');
  await expect(greeting).toContainText('Welcome todo-web');
});
