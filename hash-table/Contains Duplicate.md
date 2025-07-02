# 📝 Contains Duplicate

## 🔗 [Task description on Leetcode](https://leetcode.com/problems/contains-duplicate/?envType=problem-list-v2&envId=hash-table)

### 💡 Solution

```js
function containsDuplicate(nums) {
	let map = new Map();

	for (let i = 0; i < nums.length; i++) {
		const n = nums[i];

		if (map.has(n)) return true;
		map.set(n, true);
	}

	return false;
}
```
