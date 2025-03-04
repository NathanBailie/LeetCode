# 📝 Majority Element

## 🔗 [Task description on LeetCode](https://leetcode.com/problems/majority-element/description/)

### 💡 Solution

```javascript
function majorityElement(arr) {
    let count = 0, candidate = null;
    for (const num of arr) {
        count === 0 && (candidate = num);
        count += (num === candidate) ? 1 : -1;
    }
    return candidate;
}
```
