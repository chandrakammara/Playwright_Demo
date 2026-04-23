import { APIRequestContext } from '@playwright/test';

export class AuthAPI {
  constructor(private request: APIRequestContext) {}

  async login(email: string, password: string) {

    return await this.request.post(`${process.env.API_URL || 'https://reqres.in/api/login'}`, {
      data: {
        email,
        password
      },
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}

