# 📝 Maximum Product of Two Elements in an Array

## 🔗 [Task description on LeetCode](https://leetcode.com/problems/maximum-product-of-two-elements-in-an-array/description/)

### 💡 Solution

```javascript
function maxProduct(arr) {
    const s = arr.sort((a, b) => a - b);
    return (s[s.length - 2] - 1) * (s[s.length - 1] - 1);
}
```
