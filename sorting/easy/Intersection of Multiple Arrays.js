// https://leetcode.com/problems/intersection-of-multiple-arrays/description/

const intersection = arr => arr.reduce((acc, a) => acc.filter(n => a.includes(n))).sort((a, b) => a - b);