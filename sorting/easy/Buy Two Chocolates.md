# 📝 Buy Two Chocolates

## 🔗 [Task description on LeetCode](https://leetcode.com/problems/buy-two-chocolates/description/)

### 💡 Solution

```javascript
function buyChoco(prices, money) {
    prices.sort((a, b) => a - b);
    const sum = prices[0] + prices[1];
    return sum > money ? money : money - sum;
};
```
