# 📝 Sorting the Sentence

## 🔗 [Task description on LeetCode](https://leetcode.com/problems/sorting-the-sentence/description/)

### 💡 Solution

```javascript
const sortSentence = str => str.split(' ').sort((a, b) => a.slice(-1) - b.slice(-1)).join(' ').replace(/\d/g, '');
```
