import dotenv from 'dotenv';

dotenv.config();

function getRequiredEnv(key: string): string {
    const value = process.env[key];

    if (!value) {
        throw new Error(`Missing environment variable: ${key}`);
    }

    return value;
}

export const ENV = {
    BASE_URL: getRequiredEnv('BASE_URL'),
    USERNAME: getRequiredEnv('SAUCE_USERNAME'),
    PASSWORD: getRequiredEnv('PASSWORD')
};