// @ts-check

class ForgotPassword {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.usernameInput = page.locator('textbox=username');
    this.cancelButton = page.locator('button:has-text("Cancel")');
    this.resetPasswordButton = page.locator('button:has-text("Reset Password")');
    this.successMessage = page.locator('text=Reset Password link sent successfully');
  }

  /**
   * @param {string} username
   */
  async fillUser(username) {
    this.page.locator('input[name="username"]').fill(username);
  }

  async clickCancel() {
    await this.cancelButton.click();
  }

  async clickResetPassword() {
    await this.resetPasswordButton.click();
  } 

}

module.exports = { ForgotPassword };

