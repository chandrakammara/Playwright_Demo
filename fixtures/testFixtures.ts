import { test as base, expect, Page } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { ENV } from "../config/env";

export const test = base.extend<{
  loggedInPage: Page;
}>({
  loggedInPage: async (
    { page }: { page: Page },
    use: (page: Page) => Promise<void>,
  ) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login(ENV.username, ENV.password);

    await use(page);
  },
});

export { expect };
