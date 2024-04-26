// https://leetcode.com/problems/number-of-employees-who-met-the-target/description/

const numberOfEmployeesWhoMetTarget = (h, t) => h.reduce((acc, n) => n >= t ? ++acc : acc, 0);