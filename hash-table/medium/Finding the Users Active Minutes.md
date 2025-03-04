# 📝 Finding the Users Active Minutes

## 🔗 [Task description on LeetCode](https://leetcode.com/problems/finding-the-users-active-minutes/description/)

### 💡 Solution

```javascript
function findingUsersActiveMinutes(logs, k) {
    let res = new Array(k).fill(0);
    let minutes = new Map();

    logs.forEach(([id, time]) => {
        if (!minutes.has(id)) minutes.set(id, new Set());
        minutes.get(id).add(time);
    });

    minutes.forEach(m => {
        const uniqMin = m.size;
        if (uniqMin <= k) res[uniqMin - 1]++;
    });

    return res;
}
```
