# 📝 Queue Reconstruction by Height

## 🔗 [Task description on LeetCode](https://leetcode.com/problems/queue-reconstruction-by-height/description/)

### 💡 Solution

```javascript
function reconstructQueue(people) {
    people.sort((a, b) => a[0] !== b[0] ? b[0] - a[0] : a[1] - b[1]);
    return people.reduce((q, p) => { q.splice(p[1], 0, p); return q }, []);
}
```
