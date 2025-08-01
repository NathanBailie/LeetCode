# 📝 3Sum

## 🔗 [Task description on Leetcode](https://leetcode.com/problems/3sum/description/)

### 💡 Solution

```javascript
function threeSum(nums) {
	nums.sort((a, b) => a - b);
	const result = [];

	for (let i = 0; i < nums.length; i++) {
		if (nums[i] > 0) break;
		if (i > 0 && nums[i] === nums[i - 1]) continue;

		let left = i + 1;
		let right = nums.length - 1;

		while (left < right) {
			const sum = nums[i] + nums[left] + nums[right];

			if (sum === 0) {
				result.push([nums[i], nums[left], nums[right]]);

				while (left < right && nums[left] === nums[left + 1]) left++;
				while (left < right && nums[right] === nums[right - 1]) right--;

				left++;
				right--;
			} else if (sum < 0) {
				left++;
			} else {
				right--;
			}
		}
	}

	return result;
}
```
