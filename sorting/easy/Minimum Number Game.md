# 📝 Minimum Number Game

## 🔗 [Task description on LeetCode](https://leetcode.com/problems/minimum-number-game/description/)

### 💡 Solution

```javascript
function numberGame(arr) {
    let sortedArr = [...arr].sort((a, b) => a - b);
    let res = [];
    for (let i = 0; i <= arr.length / 2; i++) {
        res.push(...sortedArr.splice(0, 2).reverse());
    }
    return res;
}
```
