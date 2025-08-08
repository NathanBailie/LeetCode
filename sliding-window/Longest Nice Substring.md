# 📝 Longest Nice Substring

## 🔗 [Task description on Leetcode](https://leetcode.com/problems/longest-nice-substring/description/?envType=problem-list-v2&envId=sliding-window)

### 💡 Solution

```js
// sliding window
function longestNiceSubstring(s) {
	let maxLen = 0;
	let result = '';

	for (let start = 0; start < s.length; start++) {
		let lowerSet = new Set();
		let upperSet = new Set();

		for (let end = start; end < s.length; end++) {
			let char = s[end];

			if (char >= 'a' && char <= 'z') {
				lowerSet.add(char);
			} else {
				upperSet.add(char);
			}

			if (isNice(lowerSet, upperSet)) {
				let len = end - start + 1;
				if (len > maxLen) {
					maxLen = len;
					result = s.slice(start, end + 1);
				}
			}
		}
	}

	return result;
}

function isNice(lowerSet, upperSet) {
	for (let char of lowerSet) {
		if (!upperSet.has(char.toUpperCase())) return false;
	}

	for (let char of upperSet) {
		if (!lowerSet.has(char.toLowerCase())) return false;
	}

	return true;
}

// but the most effective
function longestNiceSubstring(s) {
	if (s.length < 2) return '';
	let seen = new Set(s);
	for (let i = 0; i < s.length; i++) {
		if (seen.has(s[i].toLowerCase()) && seen.has(s[i].toUpperCase())) {
			continue;
		}
		const left = longestNiceSubstring(s.slice(0, i));
		const right = longestNiceSubstring(s.slice(i + 1));
		return left.length >= right.length ? left : right;
	}
	return s;
}
```
