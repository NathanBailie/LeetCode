// https://leetcode.com/problems/maximum-product-difference-between-two-pairs/description/

function maxProductDifference(arr) {
    const sorted = n.sort((a, b) => a - b);
    return arr[arr.length - 1] * arr[arr.length - 2] - arr[0] * arr[1];
}