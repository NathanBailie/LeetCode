// https://leetcode.com/problems/final-value-of-variable-after-performing-operations/description/

const finalValueAfterOperations = arr => arr.reduce((acc, op) => acc + (op.includes('+') ? 1 : -1), 0);