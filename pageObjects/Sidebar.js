// @ts-check

class Sidebar {
  /**
   * @param {import('@playwright/test').Page} page
   */
    
    // Add locators here
    // this.element = page.locator('selector');
  constructor(page) {
    this.page = page;
    this.searchBox = page.locator('input[placeholder="Search"]');
    this.adminLink = page.locator('a:has-text("Admin")');
    this.pimLink = page.locator('a:has-text("PIM")');
    this.leaveLink = page.locator('a:has-text("Leave")');   
    this.timeLink = page.locator('a:has-text("Time")');
    this.recruitmentLink = page.locator('a:has-text("Recruitment")');
    this.myInfoLink = page.locator('a:has-text("My Info")');
    this.performanceLink = page.locator('a:has-text("Performance")');
    this.dashboardLink = page.locator('a:has-text("Dashboard")');
    this.directoryLink = page.locator('a:has-text("Directory")');
    this.maintenanceLink = page.locator('a:has-text("Maintenance")');
    this.claimLink = page.locator('a:has-text("Claim")');
    this.buzzLink = page.locator('a:has-text("Buzz")');

  
  }

    // Add methods here

  async clickAdmin() {
    await this.adminLink.click();
  }

  async clickPIM() {
    await this.pimLink.click();
  }

  async clickLeave() {
    await this.leaveLink.click();
  }

  async clickTime() {
    await this.timeLink.click();
  }

  async clickRecruitment() {
    await this.recruitmentLink.click();
  }

  async clickMyInfo() {
    await this.myInfoLink.click();
  } 

  async clickPerformance() {
    await this.performanceLink.click();
  } 

  async clickDashboard() {
    await this.dashboardLink.click();
  } 

  async clickDirectory() {
    await this.directoryLink.click();
  }

  async clickMaintenance() {
    await this.maintenanceLink.click();
  }

  async clickClaim() {
    await this.claimLink.click();
  }

  async clickBuzz() {
    await this.buzzLink.click();
  }

}

module.exports = { Sidebar };



