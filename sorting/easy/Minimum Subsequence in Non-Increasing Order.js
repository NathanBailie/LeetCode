// https://leetcode.com/problems/minimum-subsequence-in-non-increasing-order/

function minSubsequence(nums) {
    nums.sort((a, b) => b - a);
    let totalSum = nums.reduce((acc, n) => acc + n, 0),
        localSum = 0, res = [];
    for (let i = 0; i < nums.length; i++) {
        localSum += nums[i];
        res.push(nums[i]);
        totalSum -= nums[i];
        if (localSum > totalSum) return res;
    }
    return [];
}