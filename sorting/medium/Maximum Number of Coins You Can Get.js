// https://leetcode.com/problems/maximum-number-of-coins-you-can-get/description/

function maxCoins(arr) {
    arr.sort((a, b) => b - a);
    return arr.reduce((acc, _, i) => (i % 2 !== 0 && i < arr.length / 3 * 2) ? acc + arr[i] : acc, 0);
}