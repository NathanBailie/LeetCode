// https://leetcode.com/problems/reduction-operations-to-make-the-array-elements-equal/description/

function reductionOperations(arr) {
    arr.sort((a, b) => a - b);
    let l = arr.length, res = 0;
    for (let i = l - 1; i > 0; i--) {
        arr[i - 1] !== arr[i] && (res += l - i);
    }
    return res;
}