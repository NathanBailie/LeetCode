# 📝 Sort Colors

## 🔗 [Task description on Leetcode](https://leetcode.com/problems/sort-colors/description/)

### 💡 Solution

```javascript
function sortColors(nums) {
	let left = 0;
	let current = 0;
	let right = nums.length - 1;

	while (current <= right) {
		if (nums[current] === 0) {
			[nums[current], nums[left]] = [nums[left], nums[current]];
			left++;
			current++;
		} else if (nums[current] === 1) {
			current++;
		} else {
			[nums[current], nums[right]] = [nums[right], nums[current]];
			right--;
		}
	}

	return nums;
}
```
