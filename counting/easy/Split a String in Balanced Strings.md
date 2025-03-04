# 📝 Split a String in Balanced Strings

## 🔗 [Task description on LeetCode](https://leetcode.com/problems/split-a-string-in-balanced-strings/description/)

### 💡 Solution

```javascript
function balancedStringSplit(s) {
    let balance = 0, count = 0;

    for (let char of s) {
        char === 'R' && balance++;
        char === 'L' && balance--;
        balance === 0 && count++;
    }

    return count;
}
```
