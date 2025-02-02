import { check, sleep } from 'k6';
import http from 'k6/http';
import { generateRandomEmail, generateRandomPhoneNumber, generateRandomUsername } from './src/helper/generator.js';

export const options = {
    vus: 2,
    duration: '10s',
}


export default function () {

    const url = 'http://localhost:8080/api/v1/register';

    let payload = JSON.stringify({
        username: generateRandomUsername(),
        email: generateRandomEmail(),
        phone_number: generateRandomPhoneNumber(true),
        password: 'secretpass'
    })

    let params = {
        Headers: {
            'Content-Type': 'application/json'
        },
    };

    let response = http.post(url, payload, params);

    check(response, {
        'is status 200': (r) => r.status == 200,
        'response contains id': (r) => JSON.parse(r.body).meta.message === 'Success Create User'
    })

    sleep(1);
}