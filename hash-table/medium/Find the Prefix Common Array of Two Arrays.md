# 📝 Find the Prefix Common Array of Two Arrays

## 🔗 [Task description on LeetCode](https://leetcode.com/problems/find-the-prefix-common-array-of-two-arrays/description/)

### 💡 Solution

```javascript
function findThePrefixCommonArray(a, b) {
    let res = [], hashA = new Map(), hashB = new Map();

    for (let i = 0; i < a.length; i++) {
        hashA.set(a[i], (hashA.get(a[i]) || 0) + 1);
        hashB.set(b[i], (hashB.get(b[i]) || 0) + 1);

        let count = 0;
        for (let [k, v] of hashA) {
            if (hashB.has(k)) count += Math.min(v, hashB.get(k));
        }

        res.push(count);
    }
    return res;
}
```
