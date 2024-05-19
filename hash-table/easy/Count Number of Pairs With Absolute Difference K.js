// https://leetcode.com/problems/count-number-of-pairs-with-absolute-difference-k/


function countKDifference(nums, k) {
    let map = new Map(), count = 0;
    nums.forEach(n => {
        map.has(n + k) && (count += map.get(n + k));
        map.has(n - k) && (count += map.get(n - k));
        map.set(n, (map.get(n) || 0) + 1);
    })
    return count;
}

function countKDifference(nums, k) {
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (Math.abs(nums[i] - nums[j]) === k) count++;
        }
    }
    return count;
}

