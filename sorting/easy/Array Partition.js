// https://leetcode.com/problems/array-partition/description/

const arrayPairSum = nums => nums.sort((a, b) => a - b).reduce((sum, n, i) => i % 2 === 0 ? sum += n : sum);