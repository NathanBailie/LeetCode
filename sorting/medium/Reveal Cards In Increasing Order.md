# 📝 Reveal Cards In Increasing Order

## 🔗 [Task description on LeetCode](https://leetcode.com/problems/reveal-cards-in-increasing-order/description/)

### 💡 Solution

```javascript
function deckRevealedIncreasing(d) {
    d.sort((a, b) => a - b);
    let res = [];
    res.push(d.pop());
    while (d.length > 0) {
        res.unshift(res.pop());
        res.unshift(d.pop());
    }
    return res;
}
```
