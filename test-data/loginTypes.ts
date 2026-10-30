export interface LoginTestData {
    username: string;
    password: string;
    expectedResult: 'success' | 'failure';
}