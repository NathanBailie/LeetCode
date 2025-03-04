# 📝 Richest Customer Wealth

## 🔗 [Task description on LeetCode](https://leetcode.com/problems/richest-customer-wealth/description/)

### 💡 Solution

```javascript
const maximumWealth = arr => Math.max(...arr.map(n => n.reduce((sum, x) => sum + x, 0)));
```
