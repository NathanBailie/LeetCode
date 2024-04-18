// https://leetcode.com/problems/intersection-of-two-arrays/description/

const intersection = (n1, n2) => [...new Set(n1)].filter(n => n2.includes(n));