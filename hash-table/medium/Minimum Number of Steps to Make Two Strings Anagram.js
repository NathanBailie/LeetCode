// https://leetcode.com/problems/minimum-number-of-steps-to-make-two-strings-anagram/description/

function minSteps(s, t) {
    const hash = [...s].reduce((obj, c, i) => {
        obj[c] = (obj[c] || 0) + 1;
        obj[t[i]] = (obj[t[i]] || 0) - 1;
        return obj;
    }, {});
    return Object.values(hash).reduce((acc, n) => acc + Math.max(0, n), 0);
}