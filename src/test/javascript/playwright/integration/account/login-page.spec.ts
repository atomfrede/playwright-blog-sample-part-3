import { test, expect, Page } from '@playwright/test';
import { LoginPage } from '../../support/login-page';

const username = process.env.E2E_USERNAME ?? 'user';
const password = process.env.E2E_PASSWORD ?? 'user';

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
