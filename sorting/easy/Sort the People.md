# 📝 Sort the People

## 🔗 [Task description on LeetCode](https://leetcode.com/problems/sort-the-people/description/)

### 💡 Solution

```javascript
const sortPeople = (names, heights) => names.map((p, i) => [p, heights[i]]).sort((a, b) => b[1] - a[1]).map(p => p[0]);
```
