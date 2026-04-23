import { test, expect } from '@playwright/test';
import { AuthAPI } from '../../api/AuthAPI';

test('API Login Test', async ({ request }) => {

  const authAPI = new AuthAPI(request);

  const response = await authAPI.login(
    'eve.holt@reqres.in',
    'cityslicka'
  );

  const body = await response.json();

  console.log('Status:', response.status());
  console.log('Body:', body);

  expect(response.status()).toBe(200);
  expect(body.token).toBeDefined();
});