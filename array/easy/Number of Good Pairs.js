// https://leetcode.com/problems/number-of-good-pairs/description/

function numIdenticalPairs(arr) {
    let count = {}, res = 0;
    arr.forEach(n => count[n] ? res += count[n]++ : count[n] = 1);
    return res;
}