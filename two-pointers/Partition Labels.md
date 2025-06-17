# 📝 Partition Labels

## 🔗 [Task description on Leetcode](https://leetcode.com/problems/partition-labels/description/)

### 💡 Solution

```javascript
function partitionLabels(s) {
	const last = new Map();
	for (let i = 0; i < s.length; i++) {
		last.set(s[i], i);
	}

	const result = [];
	let start = 0;
	let end = 0;

	for (let i = 0; i < s.length; i++) {
		end = Math.max(end, last.get(s[i]));

		if (i === end) {
			result.push(end - start + 1);
			start = i + 1;
		}
	}

	return result;
}
```
