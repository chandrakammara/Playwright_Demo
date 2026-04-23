// Import Playwright types
import { Page, Locator } from '@playwright/test';

// Page Object for Login Page
export class LoginPage {

  // Declare variables (page + elements)
  readonly page: Page;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly flashMessage: Locator;

  // Constructor runs when object is created
  constructor(page: Page) {

    // Assign page instance
    this.page = page;

    // Define locators (elements on page)

    // Username input field
    this.usernameInput = page.locator('#username');

    // Password input field
    this.passwordInput = page.locator('#password');

    // Login button
    this.loginButton = page.locator('button[type="submit"]');

    // Success/Error message after login
    this.flashMessage = page.locator('#flash');
  }

  // Navigate to login page
  async goto() {
    // baseURL + '/login'
    await this.page.goto('/login');
  }

  // Perform login action
  async login(username: string, password: string) {

    // Enter username
    await this.usernameInput.fill(username);

    // Enter password
    await this.passwordInput.fill(password);

    // Click login button
    await this.loginButton.click();
  }
}