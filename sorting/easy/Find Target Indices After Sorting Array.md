# 📝 Find Target Indices After Sorting Array

## 🔗 [Task description on LeetCode](https://leetcode.com/problems/find-target-indices-after-sorting-array/description/)

### 💡 Solution

```javascript
function targetIndices(arr, t) {
    let res = [];
    arr.sort((a, b) => a - b).forEach((n, i) => n === t && res.push(i))
    return res;
}
```
