# 📝 Group the People Given the Group Size They Belong To

## 🔗 [Task description on LeetCode](https://leetcode.com/problems/group-the-people-given-the-group-size-they-belong-to/description/)

### 💡 Solution

```javascript
function groupThePeople(g) {
    let hash = {}, res = [];
    g.forEach((s, i) => {
        if (!hash[s]) hash[s] = [];
        hash[s].push(i);

        if (hash[s].length === s) {
            res.push(hash[s]);
            hash[s] = [];
        }
    });

    return res;
}
```
