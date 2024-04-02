// https://leetcode.com/problems/squares-of-a-sorted-array/description/

const sortedSquares = arr => arr.map(n => n * n).sort((a, b) => a - b);