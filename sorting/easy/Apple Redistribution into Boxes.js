// https://leetcode.com/problems/apple-redistribution-into-boxes/description/

function minimumBoxes(a, c) {
    let apples = a.reduce((sum, n) => sum + n, 0);
    c.sort((a, b) => b - a);
    return c.findIndex(c => (apples -= c) <= 0) + 1;
}