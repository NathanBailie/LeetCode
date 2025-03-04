# 📝 Number of Employees Who Met the Target

## 🔗 [Task description on LeetCode](https://leetcode.com/problems/number-of-employees-who-met-the-target/description/)

### 💡 Solution

```javascript
const numberOfEmployeesWhoMetTarget = (h, t) => h.reduce((acc, n) => n >= t ? ++acc : acc, 0);
```
