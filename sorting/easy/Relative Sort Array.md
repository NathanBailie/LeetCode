# 📝 Relative Sort Array

## 🔗 [Task description on LeetCode](https://leetcode.com/problems/relative-sort-array/description/)

### 💡 Solution

```javascript
function relativeSortArray(arr1, arr2) {
    const map = new Map(arr2.map((n, i) => [n, i]));
    arr1.sort((a, b) => {
        const first = map.has(a) ? map.get(a) : Infinity;
        const second = map.has(b) ? map.get(b) : Infinity;
        return first - second || a - b;
    });
    return arr1;
}
```
