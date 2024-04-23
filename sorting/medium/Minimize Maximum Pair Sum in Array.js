// https://leetcode.com/problems/minimize-maximum-pair-sum-in-array/description/

function minPairSum(arr) {
    arr.sort((a, b) => a - b);
    let max = 0;
    for (let i = 0, j = arr.length - 1; i < j; i++, j--) max = Math.max(max, arr[i] + arr[j]);
    return max;
};