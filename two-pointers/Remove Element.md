# 📝 Remove Element

## 🔗 [Task description on Leetcode](https://leetcode.com/problems/remove-element/description/?envType=problem-list-v2&envId=two-pointers)

### 💡 Solution

```js
function removeElement(nums, val) {
	let slow = 0;

	for (let fast = 0; fast < nums.length; fast++) {
		if (nums[fast] !== val) {
			nums[slow] = nums[fast];
			slow++;
		}
	}

	return slow;
}
```
