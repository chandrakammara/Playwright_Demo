// Import custom test (NOT default playwright test)
import { test, expect } from "../../fixtures/testFixtures";

// Test using already logged-in page
test("User lands on secure page after login", async ({ loggedInPage }) => {
  // Validate URL contains /secure
  await expect(loggedInPage).toHaveURL(/secure/);

  // Validate success message is visible
  await expect(loggedInPage.locator("#flash")).toContainText(
    "You logged into a secure area!",
  );
});
