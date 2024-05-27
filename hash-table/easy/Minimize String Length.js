// https://leetcode.com/problems/minimize-string-length/description/

const minimizedStringLength = s => new Set(s).size;

function minimizedStringLength(s) {
    const hash = {};
    for (let i = 0; i < s.length; i++) hash[s[i]] = true;
    return Object.keys(hash).join('').length;
}