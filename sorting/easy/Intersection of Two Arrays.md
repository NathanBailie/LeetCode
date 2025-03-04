# 📝 Intersection of Two Arrays

## 🔗 [Task description on LeetCode](https://leetcode.com/problems/intersection-of-two-arrays/description/)

### 💡 Solution

```javascript
const intersection = (n1, n2) => [...new Set(n1)].filter(n => n2.includes(n));
```
