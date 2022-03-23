import { expect, Locator, Page } from '@playwright/test';

import {
  navbarSelector,
  adminMenuSelector,
  accountMenuSelector,
  registerItemSelector,
  loginItemSelector,
  logoutItemSelector,
  settingsItemSelector,
  passwordItemSelector,
  entityItemSelector,
} from './selectors';

export class NavBar {
  readonly page: Page;
  readonly accountItem: Locator;
  readonly loginItem: Locator;

  constructor(page: Page) {
    this.page = page;

    this.accountItem = page.locator(accountMenuSelector);
    this.loginItem = page.locator(loginItemSelector);
  }

  async clickOnLoginItem() {
    await this.accountItem.click();
    await this.loginItem.click();
  }
}
