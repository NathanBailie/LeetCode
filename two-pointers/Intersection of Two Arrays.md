# 📝 Intersection of Two Arrays

## 🔗 [Task description on Leetcode](https://leetcode.com/problems/intersection-of-two-arrays/description/)

### 💡 Solution 1

```javascript
function intersection(nums1, nums2) {
	let set1 = new Set(nums1);
	let set2 = new Set();

	for (let i = 0; i < nums2.length; i++) {
		if (set1.has(nums2[i])) {
			set2.add(nums2[i]);
		}
	}

	return [...set2];
}
```
