# 📝 The K Weakest Rows in a Matrix

## 🔗 [Task description on LeetCode](https://leetcode.com/problems/the-k-weakest-rows-in-a-matrix/description/)

### 💡 Solution

```javascript
const kWeakestRows = (mat, k) => mat.map((n, i) => [n.reduce((sum, n) => sum + n, 0), i]).sort((a, b) => a[0] - b[0]).map(n => n[1]).slice(0, k);
```
