# 📝 Two Sum II - Input Array Is Sorted

## 🔗 [Task description on Leetcode](https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/description/)

### 💡 Solution

```javascript
function twoSum(nums, target) {
	let left = 0;
	let right = nums.length - 1;

	while (left <= right) {
		const sum = nums[left] + nums[right];

		if (sum === target) {
			return [++left, ++right];
		} else if (sum < target) {
			left++;
		} else {
			right--;
		}
	}

	return [];
}
```
