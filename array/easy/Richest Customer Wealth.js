// https://leetcode.com/problems/richest-customer-wealth/description/

const maximumWealth = arr => Math.max(...arr.map(n => n.reduce((sum, x) => sum + x, 0)));