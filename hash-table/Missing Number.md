# 📝 Missing Number

## 🔗 [Task description on Leetcode](https://leetcode.com/problems/missing-number/?envType=problem-list-v2&envId=hash-table)

### 💡 Solution

```js
function missingNumber(nums) {
	const map = new Map();
	for (let i = 0; i < nums.length; i++) map.set(nums[i], true);
	for (let i = 0; i < nums.length; i++) if (!map.has(i)) return i;
	return nums.length;
}
```
