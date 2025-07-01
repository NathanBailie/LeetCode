# 📝 Valid Anagram

## 🔗 [Task description on Leetcode](https://leetcode.com/problems/valid-anagram/description/?envType=problem-list-v2&envId=hash-table)

### 💡 Solution

```js
function isAnagram(s, t) {
	if (s.length !== t.length) return false;
	let map = new Map();

	for (let i = 0; i < s.length; i++) {
		map.set(s[i], (map.get(s[i]) || 0) + 1);
	}

	for (let i = 0; i < t.length; i++) {
		if (!map.has(t[i]) || map.get(t[i]) === 0) return false;
		map.set(t[i], map.get(t[i]) - 1);
	}

	return true;
}
```
