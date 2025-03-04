# 📝 Find Missing and Repeated Values

## 🔗 [Task description on LeetCode](https://leetcode.com/problems/find-missing-and-repeated-values/description/)

### 💡 Solution

```javascript
function findMissingAndRepeatedValues(grid) {
    const hash = grid.flat().reduce((obj, n) => { obj[n] = (obj[n] || 0) + 1; return obj; }, {});
    let repeated, missing;

    for (let n = 1; n <= grid.length ** 2; n++) {
        if (hash[n] === 2) repeated = n;
        if (!hash[n]) missing = n;
    }

    return [repeated, missing];
}
```
