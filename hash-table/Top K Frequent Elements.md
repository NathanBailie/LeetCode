# 📝 Top K Frequent Elements

## 🔗 [Task description on Leetcode](https://leetcode.com/problems/top-k-frequent-elements/?envType=problem-list-v2&envId=hash-table)

### 💡 Solution

```js
function topKFrequent(nums, k) {
	let map = new Map();

	for (let i = 0; i < nums.length; i++) {
		map.set(nums[i], (map.get(nums[i]) || 0) + 1);
	}

	return [...map.entries()]
		.sort((a, b) => b[1] - a[1])
		.slice(0, k)
		.map(arr => arr[0]);
}
```
