// https://leetcode.com/problems/build-array-from-permutation/

const buildArray = arr => arr.map((_, i) => arr[arr[i]]);