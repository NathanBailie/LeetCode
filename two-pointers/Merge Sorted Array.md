# 📝 Merge Sorted Array

## 🔗 [Task description on Leetcode](https://leetcode.com/problems/merge-sorted-array/description/)

### 💡 Solution

```javascript
function merge(nums1, m, nums2, n) {
	let a = m - 1;
	let b = n - 1;
	let p = m + n - 1;

	while (b >= 0) {
		if (a >= 0 && nums1[a] > nums2[b]) {
			nums1[p] = nums1[a];
			a--;
		} else {
			nums1[p] = nums2[b];
			b--;
		}
		p--;
	}
}
```
