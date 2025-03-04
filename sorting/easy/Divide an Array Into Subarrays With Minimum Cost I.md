# 📝 Divide an Array Into Subarrays With Minimum Cost I

## 🔗 [Task description on LeetCode](https://leetcode.com/problems/divide-an-array-into-subarrays-with-minimum-cost-i/description/)

### 💡 Solution

```javascript
function minimumCost(arr) {
    let sum = arr.shift();
    arr.sort((a, b) => a - b);
    return sum + arr[0] + arr[1];
};
```
