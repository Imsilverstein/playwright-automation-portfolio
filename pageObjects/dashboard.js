// @ts-check

class Dashboard {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
 
    this.page = page;
    this.assignLeaveButton = page.getByRole('button', { name: 'Assign Leave' });
    this.leaveListButton = page.getByRole('button', { name: 'Leave List' });
    this.timesheetsButton = page.getByRole('button', { name: 'Timesheets' });
    this.applyLeaveButton = page.getByRole('button', { name: 'Apply Leave' });
    this.myLeaveButton = page.getByRole('button', { name: 'My Leave' });
    this.myTimesheetButton = page.getByRole('button', { name: 'My Timesheet' });
    this.upgradeButton = page.getByRole('button', { name: 'Upgrade' });
    this.pendingselfReviewLink = page.getByText('(1) Pending Self Review');
    this.candidateToInterviewLink = page.getByText('(1) Candidate to Interview');
    this.upgradeButton = page.getByRole('button', { name: 'Upgrade' }).click();

    // Add locators here
    // this.element = page.locator('selector');
  }

  async goto() {
    await this.page.goto('URL');
  }

  // Add methods here
}

module.exports = { Dashboard };

 