// Import Playwright API context
import { APIRequestContext } from '@playwright/test';

// Import environment config
import { ENV } from '../config/env';

// API class to handle authentication requests
export class AuthAPI {

  // Constructor gets Playwright request object
  constructor(private request: APIRequestContext) {}

  // Function to call login API
  async login(email: string, password: string) {

    // Send POST request to login endpoint
    return this.request.post(`${ENV.apiURL}/login`, {

      // Request body
      data: {
        email: email,
        password: password,
      },
    });
  }
}