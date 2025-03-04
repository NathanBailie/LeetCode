# 📝 Sort Array by Increasing Frequency

## 🔗 [Task description on LeetCode](https://leetcode.com/problems/sort-array-by-increasing-frequency/description/)

### 💡 Solution

```javascript
function frequencySort(arr) {
    let map = arr.reduce((acc, n) => { acc[n] ? acc[n] += 1 : acc[n] = 1; return acc }, {});
    return arr.sort((a, b) => map[a] !== map[b] ? map[a] - map[b] : b - a);
};
```
