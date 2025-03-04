# 📝 Maximum Product Difference Between Two Pairs

## 🔗 [Task description on LeetCode](https://leetcode.com/problems/maximum-product-difference-between-two-pairs/description/)

### 💡 Solution

```javascript
function maxProductDifference(arr) {
    const sorted = n.sort((a, b) => a - b);
    return arr[arr.length - 1] * arr[arr.length - 2] - arr[0] * arr[1];
}
```
