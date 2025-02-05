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