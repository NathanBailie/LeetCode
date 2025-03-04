# 📝 Apple Redistribution into Boxes

## 🔗 [Task description on LeetCode](https://leetcode.com/problems/apple-redistribution-into-boxes/description/)

### 💡 Solution

```javascript
function minimumBoxes(a, c) {
    let apples = a.reduce((sum, n) => sum + n, 0);
    c.sort((a, b) => b - a);
    return c.findIndex(c => (apples -= c) <= 0) + 1;
}
```
