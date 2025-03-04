# 📝 Valid Anagram

## 🔗 [Task description on LeetCode](https://leetcode.com/problems/valid-anagram/description/)

### 💡 Solution

```javascript
function isAnagram(s, t) {
    if (s.length !== t.length) return false;
    let hash = [...s].reduce((obj, c) => { obj[c] = (obj[c] || 0) + 1; return obj }, {});
    for (let char of t) if (!hash[char]--) return false;
    return true;
}
```
