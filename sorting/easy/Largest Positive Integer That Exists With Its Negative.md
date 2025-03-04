# 📝 Largest Positive Integer That Exists With Its Negative

## 🔗 [Task description on LeetCode](https://leetcode.com/problems/largest-positive-integer-that-exists-with-its-negative/description/)

### 💡 Solution

```javascript
// the fastest
function findMaxK(arr) {
    let max = 0;
    arr.forEach((n, _, arr) => {
        if (n > max && arr.includes(n * -1)) max = n;
    });
    return max || -1;
};

const findMaxK = (arr) => Math.max(...arr.filter(n => arr.includes(-n)), -1);
```
