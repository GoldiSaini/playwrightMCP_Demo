export interface LoginData {
    email: string;
}

export interface RegistrationData {
    firstName: string;
    lastName: string;
    address: string;
    email: string;
    phone: string;
    gender: 'Male' | 'Female';
    country: string;
}

export interface TestScenario {
    name: string;
    login: LoginData;
    registration: RegistrationData;
} 