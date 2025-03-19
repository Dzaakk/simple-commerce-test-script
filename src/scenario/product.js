import { check } from 'k6';
import http from 'k6/http';

export function getProductByCategoryId() {
    const res = http.get('http://localhost:8080/api/v1/product?categoryId=3');

    check(res, {
        'status is 200': (r) => r.status === 200,
        'response time < 200ms': (r) => r.timings.duration < 200,
        'response body contains data array': (r) => {
            try {
                const body = JSON.parse(r.body);
                return Array.isArray(body.data);
            } catch (e) {
                return false;
            }
        },
        'response body contains products with category_id 3': (r) => {
            try {
                const body = JSON.parse(r.body);
                if (!Array.isArray(body.data)) {
                    return false;
                }
                return body.data.every((product) => product.category_id === "3");
            } catch (e) {
                return false;
            }
        },
        'response body contains product names': (r) => {
            try {
                const body = JSON.parse(r.body);
                if (!Array.isArray(body.data)) {
                    return false;
                }
                return body.data.every((product) => product.product_name !== undefined && product.product_name !== null);
            } catch (e) {
                return false;
            }
        },
        'response body contains product prices': (r) => {
            try {
                const body = JSON.parse(r.body);
                if (!Array.isArray(body.data)) {
                    return false;
                }
                return body.data.every((product) => product.price !== undefined && product.price !== null);
            } catch (e) {
                return false;
            }
        },
        'response body contains product stock': (r) => {
            try {
                const body = JSON.parse(r.body);
                if (!Array.isArray(body.data)) {
                    return false;
                }
                return body.data.every((product) => product.stock !== undefined && product.stock !== null);
            } catch (e) {
                return false;
            }
        },
        'response body meta message is success': (r) => {
            try {
                const body = JSON.parse(r.body);
                return body.meta.message === "Success";
            } catch (e) {
                return false;
            }
        },
        'response body meta code is 200': (r) => {
            try {
                const body = JSON.parse(r.body);
                return body.meta.code === 200;
            } catch (e) {
                return false;
            }
        }
    });
}