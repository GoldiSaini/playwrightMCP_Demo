import { TestScenario } from './interfaces/TestData';

export const testScenarios: TestScenario[] = [
    {
        name: 'Valid Registration Flow',
        login: {
            email: 'gsaini@test.com'
        },
        registration: {
            firstName: 'John',
            lastName: 'Doe',
            address: '123 Test Street, Test City',
            email: 'john.doe@test.com',
            phone: '1234567890',
            gender: 'Male',
            country: 'India'
        }
    },
    {
        name: 'Female User Registration',
        login: {
            email: 'Psaini@test.com'
        },
        registration: {
            firstName: 'Jane',
            lastName: 'Doe',
            address: '456 Test Avenue, Test Town',
            email: 'jane.doe@test.com',
            phone: '9876543210',
            gender: 'Female',
            country: 'United States of America'
        }
    }
]; 