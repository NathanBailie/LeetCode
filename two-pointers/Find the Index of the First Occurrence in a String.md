# 📝 Find the Index of the First Occurrence in a String

## 🔗 [Task description on Leetcode](https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/description/?envType=problem-list-v2&envId=two-pointers)

### 💡 Solution

```js
function strStr2(haystack, needle) {
	if (needle === '') return 0;

	for (let i = 0; i <= haystack.length - needle.length; i++) {
		let j = 0;
		while (j < needle.length && haystack[i + j] === needle[j]) {
			j++;
		}
		if (j === needle.length) return i;
	}
	return -1;
}
```
