// https://leetcode.com/problems/minimum-number-of-operations-to-make-array-xor-equal-to-k/description/

function minOperations(arr, k) {
    const countSetBits = n => {
        let count = 0;
        while (n) {
            n &= n - 1;
            count++;
        }
        return count;
    };

    let currentXOR = arr.reduce((acc, n) => acc ^ n, 0);
    if (currentXOR === k) return 0;
    return countSetBits(currentXOR ^ k);
}