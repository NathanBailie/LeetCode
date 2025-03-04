# 📝 Sort Vowels in a String

## 🔗 [Task description on LeetCode](https://leetcode.com/problems/sort-vowels-in-a-string/description/)

### 💡 Solution

```javascript
function sortVowels(s) {
    if (!/[aeiou]/gi.test(s)) return s;
    let vowels = s.match(/[aeiou]/gi).sort(), c = 0;
    return s.replace(/[aeiou]/gi, v => vowels[c++]);
};
```
