# 📝 Permutations

## 🔗 [Task description on LeetCode](https://leetcode.com/problems/permutations/description/)

### 💡 Solution

```javascript
function permute(arr) {
    const res = [];
    function p(c, r) {
        if (r.length === 0) {
            res.push(c);
        } else {
            for (let i = 0; i < r.length; i++) {
                p([...c, r[i]], [...r.slice(0, i), ...r.slice(i + 1)]);
            }
        }
    }

    p([], arr);
    return res;
}
```
