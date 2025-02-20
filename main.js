import { LoginCustomerTest, RegisterCustomerTest } from './src/scenario/authTest.js';

export const options = {
    vus: 2,
    duration: '10s',
}


export default function () {
    const credentials = RegisterCustomerTest();

    LoginCustomerTest(credentials.username, credentials.password);
}