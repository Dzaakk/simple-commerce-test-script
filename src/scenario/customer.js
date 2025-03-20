import { check, sleep } from 'k6';
import http from 'k6/http';

export const options = {
    vus: 1,
    duration: '30s',
    thresholds: {
        http_req_duration: ['p(95)<500'], // 95% of requests should complete within 500ms
        http_req_failed: ['rate<0.01'],    // Less than 1% of requests should fail
    },
};

export default function () {
    const customerId = 5;
    const url = `http://localhost:8080/api/v1/customers?id=${customerId}`;

    const response = http.get(url);

    check(response, {
        'Status is 200': (r) => r.status === 200,
        'Response has correct meta code': (r) => r.json('meta.code') === 200,
        'Response has success message': (r) => r.json('meta.message') === 'Success',
        'Response contains customer data': (r) => r.json('data') !== null,
        'Customer ID exists': (r) => r.json('data.id') !== undefined,
        'Customer username exists': (r) => r.json('data.username') !== undefined,
        'Customer email exists': (r) => r.json('data.email') !== undefined,
        'Customer phone number exists': (r) => r.json('data.phoneNumber') !== undefined,
        'Customer balance exists': (r) => r.json('data.balance') !== undefined,
    });

    if (customerId === 5) {
        check(response, {
            'Customer ID matches expected value': (r) => r.json('data.id') === '1',
            'Customer username matches expected value': (r) => r.json('data.username') === 'user1',
            'Customer email matches expected value': (r) => r.json('data.email') === 'user1@mail.com',
        });
    }

    sleep(1);
}