# 📝 Group Anagrams

## 🔗 [Task description on Leetcode](https://leetcode.com/problems/group-anagrams/?envType=problem-list-v2&envId=hash-table)

### 💡 Solution

```js
function groupAnagrams(strs) {
	let map = new Map();

	for (let i = 0; i < strs.length; i++) {
		const word = strs[i];
		const key = getKeys(word);

		if (!map.has(key)) {
			map.set(key, [word]);
		} else {
			map.get(key).push(word);
		}
	}

	return [...map.values()];
}

function getKeys(word) {
	let letters = new Array(26).fill(0);

	for (let i = 0; i < word.length; i++) {
		letters[word[i].charCodeAt() - 97] += 1;
	}
	return letters.join('№');
}
```
