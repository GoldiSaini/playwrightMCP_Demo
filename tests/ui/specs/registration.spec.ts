import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { RegistrationPage } from '../pages/RegistrationPage';
import { TestDataHelper } from '../../data/TestDataHelper';

test.describe('Registration Flow', () => {
    for (const scenario of TestDataHelper.getAllScenarios()) {
        test(`Registration Test: ${scenario.name}`, async ({ page }) => {
            // Initialize page objects
            const loginPage = new LoginPage(page);
            const registrationPage = new RegistrationPage(page);

            // Get test data
            const loginData = TestDataHelper.getLoginData(scenario.name);
            const registrationData = TestDataHelper.getRegistrationData(scenario.name);

            // Perform login
            await loginPage.login(loginData.email);

            // Verify registration page
            await registrationPage.verifyRegistrationPage();
            await registrationPage.verifyFormElements();

            // Fill registration form
            await registrationPage.fillPersonalDetails(
                registrationData.firstName,
                registrationData.lastName,
                registrationData.address
            );
            await registrationPage.fillContactDetails(
                registrationData.email,
                registrationData.phone
            );
            await registrationPage.selectGender(registrationData.gender);
            await registrationPage.selectCountry(registrationData.country);

            // Submit form
            await registrationPage.submitForm();
        });
    }
}); 