import { test, expect, Page } from '@playwright/test';
import { LoginPage } from '../../support/login-page';

test.beforeEach(async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
});

test.describe('Login Page', () => {
  test('greets with signin', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.loginTitle.waitFor();
  });
});
