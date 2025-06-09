# 📝 Remove Duplicates from Sorted Array

## 🔗 [Task description on Leetcode](https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/)

### 💡 Solution

```javascript
function removeDuplicates(nums) {
	if (!nums.length) return 0;
	let left = 0;

	for (let right = 1; right < nums.length; right++) {
		if (nums[left] !== nums[right]) {
			left++;
			nums[left] = nums[right];
		}
	}

	return left + 1;
}
```
