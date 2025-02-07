import http from "k6/http";

export function testPostJsonAssert(
    currentTestName,
    featureName,
    route,
    body,
    headersObj,
    expectedCase,
    options = [],
    config,
    tags,
) {
    const headers = options.includes("noContentType")
        ? Object.assign({}, headersObj)
        : Object.assign({ "Content-Type": "application/json" }, headersObj);

    const res = testPostJsonAssert(route, body, headers, tags, options);
    const isSuccess = assert(
        res,
        "POST",
        body,
        headers,
        `${featureName} | ${currentTestName}`,
        expectedCase,
        config,
    );
    return {
        isSuccess: isSuccess,
        res: res,
    };
}

export function testDelete(route, params, headersObj, tags = {}) {
    const queryParams = Object.entries(params)
        .map(
            ([key, value]) =>
                `${encodeURIComponent(key)}=${encodeURIComponent(value)}`,
        )
        .join("&");

    const modifiedRoute = route + "?" + queryParams;
    const headers = Object.assign({}, headersObj);

    return http.del(modifiedRoute, null, { headers: headers, tags: tags });
}
export function testDeleteAssert(
    currentTestName,
    featureName,
    route,
    params,
    body,
    headersObj,
    expectedCase,
    config,
    tags,
) {
    const res = testDelte
}