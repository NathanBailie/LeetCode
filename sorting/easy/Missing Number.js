// https://leetcode.com/problems/missing-number/description/

function missingNumber(arr) {
    const n = arr.length;
    const totalSum = (n * (n + 1)) / 2;
    const arrSum = arr.reduce((sum, n) => sum + n, 0);
    return totalSum - arrSum;
}