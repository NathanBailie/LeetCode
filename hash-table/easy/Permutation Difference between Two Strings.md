# 📝 Permutation Difference between Two Strings

## 🔗 [Task description on LeetCode](https://leetcode.com/problems/permutation-difference-between-two-strings/description/)

### 💡 Solution

```javascript
function findPermutationDifference(s, t) {
    let map = {}, diff = 0;
    for (let i = 0; i < s.length; i++) map[s[i]] = i;
    for (let i = 0; i < t.length; i++) diff += Math.abs(map[t[i]] - i);
    return diff;
}
```
