// https://leetcode.com/problems/can-make-arithmetic-progression-from-sequence/description/

function canMakeArithmeticProgression(arr) {
    arr.sort((a, b) => a - b);
    const diffs = new Set([...arr.slice(1)].map((n, i) => n - arr[i]));
    return diffs.size === 1;
};