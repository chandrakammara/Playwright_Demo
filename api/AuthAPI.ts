import { APIRequestContext } from "@playwright/test";
import { ENV } from "../config/env"; // 👈 ADD THIS

export class AuthAPI {
  constructor(private request: APIRequestContext) {}

  // LOGIN API
  async login(email: string, password: string) {
    return await this.request.post(`${ENV.apiURL}/login`, {
      data: {
        email,
        password,
      },
    });
  }
}
