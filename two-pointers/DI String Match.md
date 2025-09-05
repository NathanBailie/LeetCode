# 📝 DI String Match

## 🔗 [Task description on Leetcode](https://leetcode.com/problems/di-string-match/description/?envType=problem-list-v2&envId=two-pointers)

### 💡 Solution

```js
function diStringMatch(s) {
	const result = [];
	let low = 0;
	let len = s.length;

	for (let i = 0; i < s.length; i++) {
		if (s[i] == 'I') {
			result.push(low++);
		} else {
			result.push(len--);
		}
	}
	result.push(low);
	return result;
}
```
