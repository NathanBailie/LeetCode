# 📝 Find Words Containing Character

## 🔗 [Task description on LeetCode](https://leetcode.com/problems/find-words-containing-character/description/)

### 💡 Solution

```javascript
const findWordsContaining = (words, x) => words.reduce((acc, w, i) => w.includes(x) ? [...acc, i] : acc, []);
```
