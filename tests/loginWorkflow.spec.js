// @ts-check

import { test, expect } from '@playwright/test';
import { LoginPage } from '../pageObjects/loginPage';
import { ForgotPassword } from '../pageObjects/forgotPassword';

test.describe('Login workflow', () => {
  /** @type {LoginPage} */
  let login;
  /** @type {ForgotPassword} */
  let forgot;

  test.beforeEach(async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    login = new LoginPage(page);
    forgot = new ForgotPassword(page);
  });

test('1.Succesfull login', async ({ page }) => {

  //Use page object methods to perform actions
  await login.login('Admin', 'admin123');
  await login.clickLogin();

  //Assertion to verify successful login
  await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
 
  if (page.url() === 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index') {
    console.log('Login test passed: Successfully logged in and navigated to dashboard.');
  } else {
    console.error('Login test failed: Did not navigate to dashboard after login.');
  }
  
});

test('2.Unsuccesful login', async ({ page }) => {
 await login.login('wrongadmin', 'wrongpassword');
 await login.clickLogin();

 await expect(login.invalidCredentialsMessage).toBeVisible();
 
 if (await login.invalidCredentialsMessage.isVisible()) {
   console.log('Unsuccessful login test passed: Invalid credentials message is displayed.');
 } else {
   console.error('Unsuccessful login test failed: Invalid credentials message is not displayed.');
 }
});

test('3.Forgot Password Succesfully', async ({ page }) => {
  await login.clickForgotPassword();
  await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/auth/requestPasswordResetCode');
  await forgot.fillUser('Admin');
  await forgot.clickResetPassword();
  await expect(forgot.successMessage).toBeVisible();

  if (await forgot.successMessage.isVisible()) {
    console.log('Forgot Password test passed: Success message is displayed.');
  } else {
    console.error('Forgot Password test failed: Success message is not displayed.');
  }

});

test('4.Forgot Password Cancel', async ({ page }) => {
  await login.clickForgotPassword();
  await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/auth/requestPasswordResetCode');
  await forgot.clickCancel();
  await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  if (page.url() === 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login') {
    console.log('Forgot Password Cancel test passed: Navigated back to login page.');
  } else {
    console.error('Forgot Password Cancel test failed: Did not navigate back to login page.');
  }

});

});