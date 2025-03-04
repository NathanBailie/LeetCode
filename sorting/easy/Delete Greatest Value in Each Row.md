# 📝 Delete Greatest Value in Each Row

## 🔗 [Task description on LeetCode](https://leetcode.com/problems/delete-greatest-value-in-each-row/description/)

### 💡 Solution

```javascript
function deleteGreatestValue(arr) {
    arr.forEach(row => row.sort((a, b) => a - b));
    let sum = 0;
    while (arr[0].length) {
        let max = 0;
        arr.forEach((r, i) => max = Math.max(max, arr[i].pop()));
        sum += max;
    }
    return sum;
}
```
