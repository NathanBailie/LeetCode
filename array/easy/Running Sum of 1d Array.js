// https://leetcode.com/problems/running-sum-of-1d-array/description/

function runningSum(arr) {
    let sum = 0, res = [];
    arr.forEach((_, i) => { res.push(sum + arr[i]); sum += arr[i]; });
    return res;
};