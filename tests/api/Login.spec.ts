// Import test functions
import { test, expect } from '@playwright/test';

// Import API class
import { AuthAPI } from '../../api/AuthAPI';

// Define test
test('API Login Test', async ({ request }) => {

  // Create API object
  const authAPI = new AuthAPI(request);

  // Call login API with valid credentials
  const response = await authAPI.login(
    'eve.holt@reqres.in',
    'cityslicka'
  );

  // Validate HTTP status code
  expect(response.status()).toBe(200);

  // Convert response to JSON
  const body = await response.json();

  // Validate token exists in response
  expect(body.token).toBeDefined();
});