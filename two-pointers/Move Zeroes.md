# 📝 Move Zeroes

## 🔗 [Task description on Leetcode](https://leetcode.com/problems/move-zeroes/description/)

### 💡 Solution

```javascript
function moveZeroes(nums) {
	let nonZeroIndex = 0;

	for (let i = 0; i < nums.length; i++) {
		if (nums[i] !== 0) {
			nums[nonZeroIndex] = nums[i];
			nonZeroIndex++;
		}
	}

	for (let i = nonZeroIndex; i < nums.length; i++) {
		nums[i] = 0;
	}
}
```
