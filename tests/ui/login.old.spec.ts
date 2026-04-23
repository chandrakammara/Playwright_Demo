// Import Playwright test functions
import { test, expect } from '@playwright/test';

// Import Page Object
import { LoginPage } from '../../pages/LoginPage';

// Import environment config
import { ENV } from '../../config/env';

// Define test
test('Valid Login Test', async ({ page }) => {

  // Create LoginPage object and pass browser page
  const loginPage = new LoginPage(page);

  // Navigate to login page
  await loginPage.goto();

  // Perform login using ENV credentials
  await loginPage.login(ENV.username, ENV.password);

  // Verify login success message
  await expect(loginPage.flashMessage)
    .toContainText('You logged into a secure area!');
});