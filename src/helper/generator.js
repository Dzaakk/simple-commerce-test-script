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
export function generateRandomDomain() {
    const domain = generateRandomName().replace(/\s/g, "").toLowerCase();
    const tlds = ["com", "net", "org", "io", "co", "xyz"]
    const tld = tlds[Math.floor(Math.random() * tlds.length)]
    return `${domain}.${tld}`
}

/**
 * @returns {string}
 */
export function generateRandomName() {
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