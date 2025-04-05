import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class LoginPage extends BasePage {
    // Locators
    private readonly emailInput = '#email';
    private readonly enterButton = '#enterimg';

    constructor(page: Page) {
        super(page);
    }

    // Page URL
    private readonly loginUrl = 'https://demo.automationtesting.in/Index.html';

    // Actions
    async navigateToLoginPage() {
        await this.navigateTo(this.loginUrl);
    }

    async enterEmail(email: string) {
        await this.page.fill(this.emailInput, email);
    }

    async clickEnterButton() {
        await this.page.click(this.enterButton);
    }

    async login(email: string) {
        await this.navigateToLoginPage();
        await this.enterEmail(email);
        await this.clickEnterButton();
    }
} 