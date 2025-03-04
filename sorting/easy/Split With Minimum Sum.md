# 📝 Split With Minimum Sum

## 🔗 [Task description on LeetCode](https://leetcode.com/problems/split-with-minimum-sum/description/)

### 💡 Solution

```javascript
function splitNum(num) {
    const digits = Array.from(String(num), Number).sort((a, b) => a - b);
    let n1 = 0, n2 = 0, turn = true;
    for (let digit of digits) {
        turn ? (n1 = n1 * 10 + digit) : n2 = n2 * 10 + digit;
        turn = !turn;
    }
    return n1 + n2;
}
```
