# 📝 Merge Similar Items

## 🔗 [Task description on LeetCode](https://leetcode.com/problems/merge-similar-items/)

### 💡 Solution

```javascript
function mergeSimilarItems(i1, i2) {
    let hash = {};
    const countItems = (arr) => arr.forEach(([v, w]) => hash[v] === undefined ? (hash[v] = w) : (hash[v] += w));
    countItems(i1); countItems(i2);
    return Object.entries(hash).map(([v, w]) => [+v, w]).sort((a, b) => a[0] - b[0]);
}
```
