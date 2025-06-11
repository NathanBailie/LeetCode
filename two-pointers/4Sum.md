# 📝 4Sum

## 🔗 [Task description on Leetcode](https://leetcode.com/problems/4sum/description/)

### 💡 Solution

```javascript
function fourSum(nums, target) {
	const numsLength = nums.length;
	if (numsLength < 4) return [];

	nums.sort((a, b) => a - b);
	const result = [];

	for (let i = 0; i < numsLength - 3; i++) {
		if (i > 0 && nums[i] === nums[i - 1]) continue;

		const smallestSum = nums[i] + nums[i + 1] + nums[i + 2] + nums[i + 3];
		if (smallestSum > target) break;

		const biggestSum =
			nums[i] +
			nums[numsLength - 3] +
			nums[numsLength - 2] +
			nums[numsLength - 1];
		if (biggestSum < target) continue;

		for (let j = i + 1; j < numsLength - 2; j++) {
			if (j > i + 1 && nums[j] === nums[j - 1]) continue;

			let left = j + 1,
				right = numsLength - 1;
			while (left < right) {
				const sum = nums[i] + nums[j] + nums[left] + nums[right];

				if (sum === target) {
					result.push([nums[i], nums[j], nums[left], nums[right]]);
					while (left < right && nums[left] === nums[left + 1]) left++;
					while (left < right && nums[right] === nums[right - 1]) right--;
					left++;
					right--;
				} else if (sum < target) {
					left++;
				} else {
					right--;
				}
			}
		}
	}

	return result;
}
```
