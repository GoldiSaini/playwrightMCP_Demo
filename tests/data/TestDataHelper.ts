import { testScenarios } from './testData';
import { TestScenario, LoginData, RegistrationData } from './interfaces/TestData';

export class TestDataHelper {
    private static scenarios: TestScenario[] = testScenarios;

    static getScenarioByName(name: string): TestScenario {
        const scenario = this.scenarios.find(s => s.name === name);
        if (!scenario) {
            throw new Error(`Test scenario '${name}' not found`);
        }
        return scenario;
    }

    static getLoginData(scenarioName: string): LoginData {
        return this.getScenarioByName(scenarioName).login;
    }

    static getRegistrationData(scenarioName: string): RegistrationData {
        return this.getScenarioByName(scenarioName).registration;
    }

    static getAllScenarios(): TestScenario[] {
        return this.scenarios;
    }
} 