/**
 * @returns {string}
 */
export function generateRandomPassword() {
    const lenght = 8;
    const characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let password = "";

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters.charAt(randomIndex);
    }

    return password
}

/**
 * @returns {string}
 */
export function generateRandomEmail() {
    const username = generateRandomUsername().replace(/\s+/g, "");
    const domain = generateRandomDomain();
    return `${username}@${domain}`
}

/**
 * @returns {string}
 */
export function generateRandomDomain() {
    const domain = generateRandomUsername().replace(/\s/g, "").toLowerCase();
    const tlds = ["com", "net", "org", "io", "co", "xyz"]
    const tld = tlds[Math.floor(Math.random() * tlds.length)]
    return `${domain}.${tld}`
}

/**
 * @returns {string}
 */
export function generateRandomUsername() {
    const prefixes = [
        "An", "Ben", "Jon", "Xen", "Lor",
        "Mar", "Fel", "Cal", "Nor", "Zan",
        "Vin", "Hal", "Eli", "Oli", "Ray",
        "Sam", "Tim", "Ken", "Leo", "Kai"
    ];

    const middles = [
        "dra", "vi", "na", "lo", "ki",
        "ra", "li", "no", "mi", "ta",
        "ne", "ro", "sa", "mo", "ze",
        "fa", "de", "pe", "su", "re"
    ];

    const suffixes = [
        "son", "ton", "ly", "en", "er",
        "man", "den", "ren", "vin", "sen",
        "ler", "ter", "mon", "lin", "ker",
        "nor", "len", "tan", "ver", "mer"
    ];

    const prefix = prefixes[Math.floor(Math.random() * prefixes.length)]
    const middle = middles[Math.floor(Math.random() * middles.length)]
    const suffix = suffixes[Math.floor(Math.random() * suffixes.length)]

    return `${prefix} ${middle} ${suffix}`
}

/**
 * @param {boolean} addPlusPrefix
 * @returns {string}
 */
export function generateRandomPhoneNumber(addPlusPrefix) {
    const callingCodes = [
        "1", "44", "49", "61", "81", "86", "93",
        "355", "213", "376", "244", "54", "374", "297",
        "61", "43", "994", "973", "880", "375", "32", "501",
        "229", "975", "591", "387", "267", "55", "673",
        "359", "226", "257", "855", "237", "238", "236",
        "235", "56", "86", "57", "269", "242", "243",
        "682", "506", "385", "53", "357", "420", "45",
        "253", "670", "593", "20", "503", "240", "291",
        "372", "251", "500", "298", "679", "358", "33",
        "689", "241", "220", "995", "49", "233", "350",
        "30", "299", "502", "224", "245", "592", "509",
        "504", "852", "36", "354", "91", "62", "98",
        "964", "353", "972", "39", "225", "81", "962",
        "7", "254", "686", "965", "996", "856", "371",
        "961", "266", "231", "218", "423", "370", "352",
        "853", "389", "261", "265", "60", "960", "223",
        "356", "692", "222", "230", "262", "52", "691",
        "373", "377", "976", "382", "212", "258", "95",
        "264", "674", "977", "31", "687", "64", "505",
        "227", "234", "683", "850", "47", "968", "92",
        "680", "507", "675", "595", "51", "63", "48",
        "351", "974", "40", "7", "250", "590", "685",
        "378", "239", "966", "221", "381", "248", "232",
        "65", "421", "386", "677", "252", "27", "82",
        "34", "94", "249", "597", "268", "46", "41",
    ]

    const callingCode =
        callingCodes[Math.floor(Math.random() * callingCodes.length)]
    const phoneNumber = Math.floor(Math.random() * 10000000)
        .toString()
        .padStart(8, "0")

    return addPlusPrefix
        ? "+" + callingCode + phoneNumber
        : callingCode + phoneNumber;
}