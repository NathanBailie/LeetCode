// https://leetcode.com/problems/keep-multiplying-found-values-by-two/description/

const findFinalValue = (arr, o) => arr.includes(o) ? findFinalValue(arr, o * 2) : o;