# 📝 Isomorphic Strings

## 🔗 [Task description on Leetcode](https://leetcode.com/problems/isomorphic-strings/?envType=problem-list-v2&envId=hash-table)

### 💡 Solution

```js
function isIsomorphic(s, t) {
	if (s.length !== t.length) return false;

	const mapST = new Map();
	const mapTS = new Map();

	for (let i = 0; i < s.length; i++) {
		const charS = s[i];
		const charT = t[i];

		if (mapST.has(charS)) {
			if (mapST.get(charS) !== charT) return false;
		} else {
			mapST.set(charS, charT);
		}

		if (mapTS.has(charT)) {
			if (mapTS.get(charT) !== charS) return false;
		} else {
			mapTS.set(charT, charS);
		}
	}

	return true;
}
```
