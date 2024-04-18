// https://leetcode.com/problems/sort-array-by-parity/description/

const sortArrayByParity = arr => arr.sort((a, b) => (a % 2) - (b % 2));