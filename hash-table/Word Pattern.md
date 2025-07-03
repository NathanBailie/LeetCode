# 📝 Word Pattern

## 🔗 [Task description on Leetcode](https://leetcode.com/problems/word-pattern/description/?envType=problem-list-v2&envId=hash-table)

### 💡 Solution

```js
function wordPattern(pattern, s) {
	let words = s.split(' ');

	if (pattern.length !== words.length) return false;

	let mapA = new Map();
	let mapB = new Map();

	for (let i = 0; i < pattern.length; i++) {
		let a = pattern[i];
		let b = words[i];

		if (!mapA.has(a)) mapA.set(a, b);
		if (!mapB.has(b)) mapB.set(b, a);
		if (mapA.get(a) !== b || mapB.get(b) !== a) return false;
	}

	return true;
}
```
