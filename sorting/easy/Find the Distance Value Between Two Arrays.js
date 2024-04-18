// https://leetcode.com/problems/find-the-distance-value-between-two-arrays/description/

const findTheDistanceValue = (arr1, arr2, d) => arr1.filter(x => arr2.every(y => Math.abs(x - y) > d)).length;