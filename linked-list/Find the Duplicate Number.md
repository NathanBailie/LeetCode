# 📝 Find the Duplicate Number

## 🔗 [Task description on Leetcode](https://leetcode.com/problems/find-the-duplicate-number/description/)

### 💡 Solution

```js
function findDuplicate(nums) {
	let slow = nums[0];
	let fast = nums[0];

	do {
		slow = nums[slow];
		fast = nums[nums[fast]];
	} while (slow !== fast);

	slow = nums[0];

	while (slow !== fast) {
		slow = nums[slow];
		fast = nums[fast];
	}

	return slow;
}
```
