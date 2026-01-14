// @ts-check

class LoginPage {
  /**
   * @param {import('@playwright/test').Page} page 
   */
  constructor(page) {

    
    this.page = page;
    this.usernameInput = page.locator('input[name="username"]');
    this.passwordInput = page.locator('input[name="password"]');
    this.loginButton = page.locator('button[type="submit"]');
    this.forgotPasswordLink = page.locator('text=Forgot your password?');
    this.invalidCredentialsMessage = page.locator('text=Invalid credentials');
  }

  async goto() {
    await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  }

  /**
   * @param {string} username
   */
  async fillUsername(username) {
    await this.usernameInput.fill(username);
  }

  /**
   * @param {string} password
   */
  async fillPassword(password) {
    await this.passwordInput.fill(password);
  }

  async clickLogin() {
    await this.loginButton.click();
  }

  async clickForgotPassword() {
    await this.forgotPasswordLink.click();
  }

  /**
   * @param {string} username
   * @param {string} password
   */
  async login(username, password) {
    await this.fillUsername(username);
    await this.fillPassword(password);
  }
}

module.exports = { LoginPage };
