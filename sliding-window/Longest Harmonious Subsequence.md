# 📝 Longest Harmonious Subsequence

## 🔗 [Task description on Leetcode](https://leetcode.com/problems/longest-harmonious-subsequence/description/?envType=problem-list-v2&envId=sliding-window)

### 💡 Solution

```js
function findLHS(nums) {
	nums.sort((a, b) => a - b);
	let maxLen = 0;
	let left = 0;

	for (let right = 0; right < nums.length; right++) {
		while (nums[right] - nums[left] > 1) left++;

		if (nums[right] - nums[left] === 1) {
			maxLen = Math.max(maxLen, right - left + 1);
		}
	}

	return maxLen;
}
```
