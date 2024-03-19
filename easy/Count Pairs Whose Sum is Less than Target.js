// https://leetcode.com/problems/count-pairs-whose-sum-is-less-than-target/description/

function countPairs(nums, target) {
    nums.sort((a, b) => a - b);
    let count = 0, i = 0, j = nums.length - 1;
    while (i < j) nums[i] + nums[j] < target ? (count += j - i, i++) : j--;
    return count;
}