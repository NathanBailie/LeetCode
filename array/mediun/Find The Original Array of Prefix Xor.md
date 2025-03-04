# 📝 Find The Original Array of Prefix Xor

## 🔗 [Task description on LeetCode](https://leetcode.com/problems/find-the-original-array-of-prefix-xor/description/)

### 💡 Solution

```javascript
const findArray = arr => arr.map((n, i, arr) => n ^ arr[i - 1]);
```
