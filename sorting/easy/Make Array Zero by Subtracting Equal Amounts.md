# 📝 Make Array Zero by Subtracting Equal Amounts

## 🔗 [Task description on LeetCode](https://leetcode.com/problems/make-array-zero-by-subtracting-equal-amounts/description/)

### 💡 Solution

```javascript
function minimumOperations(nums) {
    let count = 0;
    while (!nums.every(n => n === 0)) {
        const min = Math.min(...nums.filter(n => n > 0));
        nums = nums.map(n => (n > 0 ? n - min : n));
        count++;
    }
    return count;
}
```
