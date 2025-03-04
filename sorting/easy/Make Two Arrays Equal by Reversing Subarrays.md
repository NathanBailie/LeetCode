# 📝 Make Two Arrays Equal by Reversing Subarrays

## 🔗 [Task description on LeetCode](https://leetcode.com/problems/make-two-arrays-equal-by-reversing-subarrays/description/)

### 💡 Solution

```javascript
function canBeEqual(t, arr) {
    if (t.length !== arr.length) return false;
    t.sort((a, b) => a - b); arr.sort((a, b) => a - b);
    return t.every((n, i) => arr[i] === n);
};
```
