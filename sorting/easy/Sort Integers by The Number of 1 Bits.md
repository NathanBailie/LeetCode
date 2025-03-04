# 📝 Sort Integers by The Number of 1 Bits

## 🔗 [Task description on LeetCode](https://leetcode.com/problems/sort-integers-by-the-number-of-1-bits/description/)

### 💡 Solution

```javascript
const sortByBits = arr => arr.map(n => [n, n.toString(2).split('0').join('').length]).sort((a, b) => a[1] - b[1] || a[0] - b[0]).map(n => n[0]);
```
