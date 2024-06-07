// https://leetcode.com/problems/sum-of-unique-elements/description/

function sumOfUnique(nums) {
    let hash = nums.reduce((obj, n) => { obj[n] = (obj[n] || 0) + 1; return obj; }, {});
    let res = 0;
    for (let key in hash) if (hash[key] === 1) res += +key;
    return res;
};