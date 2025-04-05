import { Page, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class RegistrationPage extends BasePage {
    // Locators
    private readonly firstNameInput = 'input[placeholder="First Name"]';
    private readonly lastNameInput = 'input[placeholder="Last Name"]';
    private readonly addressTextarea = 'textarea[ng-model="Adress"]';
    private readonly emailInput = 'input[type="email"]';
    private readonly phoneInput = 'input[type="tel"]';
    private readonly maleRadio = 'input[value="Male"]';
    private readonly femaleRadio = 'input[value="FeMale"]';
    private readonly countriesDropdown = '#countries';
    private readonly submitButton = '#submitbtn';
    private readonly pageTitle = 'h2';

    constructor(page: Page) {
        super(page);
    }

    // Expected URL after successful login
    private readonly registrationUrl = 'https://demo.automationtesting.in/Register.html';

    // Verification methods
    async verifyRegistrationPage() {
        await expect(this.page).toHaveURL(this.registrationUrl);
        await expect(this.page.locator(this.pageTitle)).toHaveText('Register');
    }

    async verifyFormElements() {
        await expect(this.page.locator(this.firstNameInput)).toBeVisible();
        await expect(this.page.locator(this.lastNameInput)).toBeVisible();
        await expect(this.page.locator(this.addressTextarea)).toBeVisible();
        await expect(this.page.locator(this.emailInput)).toBeVisible();
        await expect(this.page.locator(this.phoneInput)).toBeVisible();
        await expect(this.page.locator(this.maleRadio)).toBeVisible();
        await expect(this.page.locator(this.femaleRadio)).toBeVisible();
        await expect(this.page.locator(this.countriesDropdown)).toBeVisible();
        await expect(this.page.locator(this.submitButton)).toBeVisible();
    }

    // Form filling methods
    async fillPersonalDetails(firstName: string, lastName: string, address: string) {
        await this.page.fill(this.firstNameInput, firstName);
        await this.page.fill(this.lastNameInput, lastName);
        await this.page.fill(this.addressTextarea, address);
    }

    async fillContactDetails(email: string, phone: string) {
        await this.page.fill(this.emailInput, email);
        await this.page.fill(this.phoneInput, phone);
    }

    async selectGender(gender: 'Male' | 'Female') {
        const radioButton = gender === 'Male' ? this.maleRadio : this.femaleRadio;
        await this.page.click(radioButton);
    }

    async selectCountry(country: string) {
        await this.page.selectOption(this.countriesDropdown, country);
    }

    async submitForm() {
        await this.page.click(this.submitButton);
    }
} 