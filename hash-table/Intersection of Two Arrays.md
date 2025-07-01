# 📝 Intersection of Two Arrays

## 🔗 [Task description on Leetcode](https://leetcode.com/problems/intersection-of-two-arrays/?envType=problem-list-v2&envId=hash-table)

### 💡 Solution

```js
function intersection(nums1, nums2) {
	let map = new Map();
	let result = [];

	for (let i = 0; i < nums1.length; i++) map.set(nums1[i], true);

	for (let i = 0; i < nums2.length; i++) {
		if (map.has(nums2[i])) {
			result.push(nums2[i]);
			map.delete(nums2[i]);
		}
	}

	return result;
}
```
