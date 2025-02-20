import { generateRandomEmail, generateRandomPhoneNumber, generateRandomUsername } from './src/helper/generator.js';

export function RegisterCustomerTest() {
    const url = 'http://localhost:8080/api/v1/register';

    let payload = JSON.stringify({
        username: generateRandomUsername(),
        email: generateRandomEmail(),
        phone_number: generateRandomPhoneNumber(true),
        password: 'secretpass'
    });

    let params = {
        headers: {
            'Content-Type': 'application/json'
        },
    };

    let response = http.post(url, payload, params);

    check(response, {
        'is status 200': (r) => r.status == 200,
        'response contains Success message': (r) => JSON.parse(r.body).meta.message === 'Success Create User'
    });

    sleep(1);

    return {
        username: JSON.parse(payload).username,
        password: JSON.parse(payload).password
    };
}

export function LoginCustomerTest(username, password) {
    const url = 'http://localhost:8080/api/v1/login'; // Replace with your login endpoint

    let payload = JSON.stringify({
        username: username,
        password: password
    });

    let params = {
        headers: {
            'Content-Type': 'application/json'
        },
    };

    let response = http.post(url, payload, params);

    check(response, {
        'is status 200': (r) => r.status == 200,
        'login successful': (r) => JSON.parse(r.body).meta.message === 'Login successful' //adjust to your api response
    });

    sleep(1);
}

export function LoginSellerTest() { }
export function RegisterSellerTest() { }