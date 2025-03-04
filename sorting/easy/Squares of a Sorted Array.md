# 📝 Squares of a Sorted Array

## 🔗 [Task description on LeetCode](https://leetcode.com/problems/squares-of-a-sorted-array/description/)

### 💡 Solution

```javascript
const sortedSquares = arr => arr.map(n => n * n).sort((a, b) => a - b);
```
