# 📝 Sort the Students by Their Kth Score

## 🔗 [Task description on LeetCode](https://leetcode.com/problems/sort-the-students-by-their-kth-score/description/)

### 💡 Solution

```javascript
const sortTheStudents = (score, k) => [...score].sort((a, b) => b[k] - a[k]);
```
