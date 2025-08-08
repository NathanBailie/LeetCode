# 📝 Substrings of Size Three with Distinct Characters

## 🔗 [Task description on Leetcode](https://leetcode.com/problems/substrings-of-size-three-with-distinct-characters/description/?envType=problem-list-v2&envId=sliding-window)

### 💡 Solution

```js
function countGoodSubstrings(s) {
	let count = 0;

	for (let i = 0; i < s.length - 2; i++) {
		let window = s.slice(i, i + 3);
		let set = new Set(window);

		if (set.size === 3) count++;
	}

	return count;
}
```

#### The most effective

```js
function countGoodSubstrings(s) {
	let count = 0;

	for (let i = 0; i < s.length - 2; i++) {
		let a = s[i];
		let b = s[i + 1];
		let c = s[i + 2];

		if (a !== b && b !== c && c !== a) count++;
	}

	return count;
}
```
