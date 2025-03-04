# 📝 Build Array from Permutation

## 🔗 [Task description on LeetCode](https://leetcode.com/problems/build-array-from-permutation/)

### 💡 Solution

```javascript
const buildArray = arr => arr.map((_, i) => arr[arr[i]]);
```
