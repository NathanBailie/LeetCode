# 📝 Find the Distance Value Between Two Arrays

## 🔗 [Task description on LeetCode](https://leetcode.com/problems/find-the-distance-value-between-two-arrays/description/)

### 💡 Solution

```javascript
const findTheDistanceValue = (arr1, arr2, d) => arr1.filter(x => arr2.every(y => Math.abs(x - y) > d)).length;
```
