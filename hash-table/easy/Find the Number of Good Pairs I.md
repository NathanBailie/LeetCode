# 📝 Find the Number of Good Pairs I

## 🔗 [Task description on LeetCode](https://leetcode.com/problems/find-the-number-of-good-pairs-i/description/)

### 💡 Solution

```javascript
const numberOfPairs = (a1, a2, k) => a1.reduce((count, n1) => count + a2.filter(n2 => n1 % (n2 * k) === 0).length, 0);
```
