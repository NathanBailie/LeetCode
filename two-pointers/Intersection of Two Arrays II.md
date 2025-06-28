# 📝 Intersection of Two Arrays II

## 🔗 [Task description on Leetcode](https://leetcode.com/problems/intersection-of-two-arrays-ii/description/?envType=problem-list-v2&envId=two-pointers)

### 💡 Solution

```js
function intersect(nums1, nums2) {
	nums1.sort((a, b) => a - b);
	nums2.sort((a, b) => a - b);

	const res = [];
	let i = 0,
		j = 0;

	const len1 = nums1.length;
	const len2 = nums2.length;

	while (i < len1 && j < len2) {
		const val1 = nums1[i];
		const val2 = nums2[j];

		if (val1 === val2) {
			res.push(val1);
			i++;
			j++;
		} else if (val1 < val2) {
			i++;
		} else {
			j++;
		}
	}

	return res;
}
```
