# 📝 Sort Array By Parity

## 🔗 [Task description on Leetcode](https://leetcode.com/problems/sort-array-by-parity/description/?envType=problem-list-v2&envId=two-pointers)

### 💡 Solution

```js
function sortArrayByParity(nums) {
	let left = 0;
	let right = nums.length - 1;

	while (left < right) {
		if (nums[left] % 2 === 0) {
			left++;
		} else if (nums[right] % 2 !== 0) {
			right--;
		} else {
			[nums[left], nums[right]] = [nums[right], nums[left]];
		}
	}

	return nums;
}
```
