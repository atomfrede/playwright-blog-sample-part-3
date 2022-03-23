import { expect, Locator, Page } from '@playwright/test';
import { NavBar } from './navbar';
import {
  titleLoginSelector,
  errorLoginSelector,
  usernameLoginSelector,
  passwordLoginSelector,
  submitLoginSelector,
} from './selectors';

export class LoginPage extends NavBar {
  readonly page: Page;
  readonly usernameInput: Locator;
  readonly passwordLoginInput: Locator;
  readonly submitLoginForm: Locator
  readonly loginTitle: Locator;

  constructor(page: Page) {
    super(page);
    this.page = page;
    this.usernameInput = page.locator(usernameLoginSelector);
    this.passwordLoginInput = page.locator(passwordLoginSelector);
    this.submitLoginForm = page.locator(submitLoginSelector);
    this.loginTitle = page.locator(titleLoginSelector);
  }

  async goto() {
    await this.page.goto('/login');
  }

  async login(username: string, password: string) {
    await this.usernameInput.fill(username);
    await this.passwordLoginInput.fill(password);
    await this.submitLoginForm.click();
  }
}
