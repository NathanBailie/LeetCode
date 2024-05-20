// https://leetcode.com/problems/unique-number-of-occurrences/description/

function uniqueOccurrences(arr) {
    const cases = Object.values(arr.reduce((obj, n) => { obj[n] = (obj[n] || 0) + 1; return obj; }, {}));
    return new Set(cases).size === cases.length;
}