# 📝 Keep Multiplying Found Values by Two

## 🔗 [Task description on LeetCode](https://leetcode.com/problems/keep-multiplying-found-values-by-two/description/)

### 💡 Solution

```javascript
const findFinalValue = (arr, o) => arr.includes(o) ? findFinalValue(arr, o * 2) : o;
```
