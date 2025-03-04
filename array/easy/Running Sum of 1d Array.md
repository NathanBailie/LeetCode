# 📝 Running Sum of 1d Array

## 🔗 [Task description on LeetCode](https://leetcode.com/problems/running-sum-of-1d-array/description/)

### 💡 Solution

```javascript
function runningSum(arr) {
    let sum = 0, res = [];
    arr.forEach((_, i) => { res.push(sum + arr[i]); sum += arr[i]; });
    return res;
};
```
