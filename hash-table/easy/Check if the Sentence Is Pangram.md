# 📝 Check if the Sentence Is Pangram

## 🔗 [Task description on LeetCode](https://leetcode.com/problems/check-if-the-sentence-is-pangram/description/)

### 💡 Solution

```javascript
function checkIfPangram(s) {
    let map = new Map();
    for (let c of s) map.set(c, true);
    return map.size === 26;
}

const checkIfPangram = s => new Set(s).size === 26;
```
