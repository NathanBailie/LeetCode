// https://leetcode.com/problems/sort-characters-by-frequency/description/

function frequencySort(s) {
    let c = Object.entries([...s].reduce((acc, c) => { acc[c] = (acc[c] || 0) + 1; return acc }, {}));
    return c.sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0])).map(n => n[0].repeat(n[1])).join('');
};