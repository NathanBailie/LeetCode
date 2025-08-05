# 📝 Contains Duplicate II

## 🔗 [Task description on Leetcode](https://leetcode.com/problems/contains-duplicate-ii/description/?envType=problem-list-v2&envId=sliding-window)

### 💡 Solution

```js
function containsNearbyDuplicate(nums, k) {
	const window = new Set();

	for (let i = 0; i < nums.length; i++) {
		if (window.has(nums[i])) return true;
		window.add(nums[i]);
		if (window.size > k) window.delete(nums[i - k]);
	}

	return false;
}
```
