# 📝 Next Greater Element I

## 🔗 [Task description on Leetcode](https://leetcode.com/problems/next-greater-element-i/description/?envType=problem-list-v2&envId=stack)

### 💡 Solution

```js
function nextGreaterElement(nums1, nums2) {
	const stack = [];
	const map = new Map();

	for (let i = nums2.length - 1; i >= 0; i--) {
		const current = nums2[i];
		while (stack.length && stack[stack.length - 1] <= current) stack.pop();
		map.set(current, stack.length ? stack[stack.length - 1] : -1);
		stack.push(current);
	}

	return nums1.map(n => map.get(n));
}
```
