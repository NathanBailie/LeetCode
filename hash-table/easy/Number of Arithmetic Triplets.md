# 📝 Number of Arithmetic Triplets

## 🔗 [Task description on LeetCode](https://leetcode.com/problems/number-of-arithmetic-triplets/description/)

### 💡 Solution

```javascript
function arithmeticTriplets(nums, diff) {
    let count = 0, map = new Map();
    nums.forEach(num => map.set(num, true));
    nums.forEach(num => (map.has(num + diff) && map.has(num + 2 * diff)) && (count++));
    return count;
};

function arithmeticTriplets(nums, diff) {
    let count = 0, set = new Set(nums);
    nums.forEach(num => (set.has(num + diff) && set.has(num + 2 * diff)) && (count++));
    return count;
};
```
