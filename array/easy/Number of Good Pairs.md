# 📝 Number of Good Pairs

## 🔗 [Task description on LeetCode](https://leetcode.com/problems/number-of-good-pairs/description/)

### 💡 Solution

```javascript
function numIdenticalPairs(arr) {
    let count = {}, res = 0;
    arr.forEach(n => count[n] ? res += count[n]++ : count[n] = 1);
    return res;
}
```
