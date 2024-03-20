// https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/description/

function smallerNumbersThanCurrent(nums) {
    let sorted = nums.map((n, i) => [n, i]).sort((a, b) => a[0] - b[0]);
    let res = Array(nums.length).fill(0);
    for (let i = 1; i < nums.length; i++) {
        sorted[i][0] === sorted[i - 1][0] ? res[sorted[i][1]] = res[sorted[i - 1][1]] : res[sorted[i][1]] = i;
    }
    return res;
};