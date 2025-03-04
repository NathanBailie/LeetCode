# 📝 Optimal Partition of String

## 🔗 [Task description on LeetCode](https://leetcode.com/problems/optimal-partition-of-string/description/)

### 💡 Solution

```javascript
function partitionString(s) {
    let count = 0, map = new Map();

    for (let char of s) {
        if (map.has(char)) {
            map.clear();
            count++;
        }
        map.set(char, true);
    }

    return count + 1;
}
```
