# 📝 Neither Minimum nor Maximum

## 🔗 [Task description on LeetCode](https://leetcode.com/problems/neither-minimum-nor-maximum/description/)

### 💡 Solution

```javascript
const findNonMinOrMax = nums => nums.length <= 2 ? -1 : nums.sort((a, b) => a - b)[1];

function findNonMinOrMax(nums) {
    if (nums.length <= 2) return -1;
    const min = Math.min(...nums);
    const max = Math.max(...nums);
    return nums.find(n => n !== min && n !== max);
};
```
