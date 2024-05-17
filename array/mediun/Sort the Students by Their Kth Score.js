// https://leetcode.com/problems/sort-the-students-by-their-kth-score/description/

const sortTheStudents = (score, k) => [...score].sort((a, b) => b[k] - a[k]);