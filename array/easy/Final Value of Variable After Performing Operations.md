# 📝 Final Value of Variable After Performing Operations

## 🔗 [Task description on LeetCode](https://leetcode.com/problems/final-value-of-variable-after-performing-operations/description/)

### 💡 Solution

```javascript
const finalValueAfterOperations = arr => arr.reduce((acc, op) => acc + (op.includes('+') ? 1 : -1), 0);
```
