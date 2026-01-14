// @ts-check
import { test, expect } from '@playwright/test';


test('Login and fill form and validate if user have no leave balance', async ({ page }) => {

  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await expect(page).toHaveTitle(/OrangeHRM/);

  //1. Login

  const usernameInput = page.getByPlaceholder('Username');
  const passwordInput = page.getByPlaceholder('Password');
  const loginButton = page.getByRole('button', { name: 'Login' });

  await usernameInput.fill('Admin');
  await passwordInput.fill('admin123');
  await loginButton.click();

  await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
  
  //2. Navigate to Leave > Assign Leave

  await page.getByRole('button', { name: 'Assign Leave' }).click();

  await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/leave/assignLeave');
  
  //3. Fill out the Assign Leave form

  const employeeNameInput = page.locator('input[placeholder="Type for hints..."]');
  const leaveTypeDropdown = page.locator('.oxd-select-text-input');
  const fromDateInput = page.locator('(//input[@placeholder="yyyy-dd-mm"])[1]');
  const toDateInput = page.locator('(//input[@placeholder="yyyy-dd-mm"])[2]');
  const assignButton = page.getByRole('button', { name: 'Assign' }); 
  const commentInput = page.locator('textarea')
  const partialdaysDropdown = page.locator('(//div[@class="oxd-select-text-input"])[2]');
  const durationDropdown = page.locator('(//div[@class="oxd-select-text-input"])[3]');
  const confirmMessage = page.getByText('×Confirm Leave');
  const okButton = page.getByRole('button', { name: 'Ok' });

  // Fill in the form fields
  // 1. Employee Name

  await employeeNameInput.fill('Peter Mac Anderson');
  await page.locator('.oxd-autocomplete-option').filter({ hasText: 'Peter Mac Anderson' }).click(); 
  await leaveTypeDropdown.click();
  await page.locator('.oxd-select-dropdown').getByText('US - Vacation').click();

  
  await fromDateInput.fill('2024-06-20');
  await toDateInput.click({ clickCount: 3 }); // Triple click to select all
  await toDateInput.locator('(//input[@placeholder="yyyy-dd-mm"])[2]').press('Backspace');
  await toDateInput.fill('2024-06-25'); 

  await page.getByText('Balance not sufficient').click(); // Click to dismiss any validation message

  await partialdaysDropdown.click();
  await page.locator('.oxd-select-dropdown').getByText('All Days').click();

  await durationDropdown.click();
  await page.locator('.oxd-select-dropdown').getByText('Morning').click();

  await commentInput.click();
  await commentInput.fill('Vacation leave for family trip');  

  await assignButton.click();

  //assertion to confirm the form is submitted

  await expect(confirmMessage).toBeVisible();
  await okButton.click();
  

  // Verify form submission by checking for overlapping leave request message

  await expect(
    page.getByRole('heading', { name: 'Overlapping Leave Request(s)' })).toBeVisible();

});

test('', async ({ page }) => {
  await page.goto('https://example.com');

  
});


