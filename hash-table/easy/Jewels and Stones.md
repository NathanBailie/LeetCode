# 📝 Jewels and Stones

## 🔗 [Task description on LeetCode](https://leetcode.com/problems/jewels-and-stones/description/)

### 💡 Solution

```javascript
function numJewelsInStones(j, s) {
    const hash = [...j].reduce((obj, n) => { obj[n] = 0; return obj; }, {});
    [...s].forEach(n => hash[n] !== undefined && (hash[n] += 1));
    return Object.values(hash).reduce((sum, n) => sum + n, 0);
};

const numJewelsInStones = (j, s) => [...s].reduce((acc, n) => j.includes(n) ? acc + 1 : acc, 0);
```
