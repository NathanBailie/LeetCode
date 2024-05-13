// https://leetcode.com/problems/find-the-original-array-of-prefix-xor/description/

const findArray = arr => arr.map((n, i, arr) => n ^ arr[i - 1]);