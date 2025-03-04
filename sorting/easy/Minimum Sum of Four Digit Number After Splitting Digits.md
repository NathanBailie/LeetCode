# 📝 Minimum Sum of Four Digit Number After Splitting Digits

## 🔗 [Task description on LeetCode](https://leetcode.com/problems/minimum-sum-of-four-digit-number-after-splitting-digits/description/)

### 💡 Solution

```javascript
function minimumSum(n) {
    const a = String(n).split('').sort();
    return parseInt(a[0] + a[2]) + parseInt(a[1] + a[3]);
}
```
