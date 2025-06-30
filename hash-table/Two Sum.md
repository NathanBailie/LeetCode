# 📝 Two Sum

## 🔗 [Task description on Leetcode](https://leetcode.com/problems/two-sum/description/?envType=problem-list-v2&envId=hash-table)

### 💡 Solution

```js
function twoSum(nums, target) {
	const map = new Map();

	for (let i = 0; i < nums.length; i++) {
		const diff = target - nums[i];
		if (map.has(diff)) return [map.get(diff), i];
		map.set(nums[i], i);
	}
}
```
