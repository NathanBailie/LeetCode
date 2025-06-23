# 📝 Valid Palindrome

## 🔗 [Task description on Leetcode](https://leetcode.com/problems/valid-palindrome/?envType=problem-list-v2&envId=two-pointers)

### 💡 Solution

```js
function isPalindrome(str) {
	let left = 0;
	let right = str.length - 1;

	while (left < right) {
		while (left < right && !isSymbolNumeric(str[left])) left++;
		while (left < right && !isSymbolNumeric(str[right])) right--;

		if (str[left].toLowerCase() !== str[right].toLowerCase()) return false;
		left++;
		right--;
	}

	return true;
}

function isSymbolNumeric(char) {
	const code = char.charCodeAt();

	return (
		(code >= 48 && code <= 57) ||
		(code >= 97 && code <= 122) ||
		(code >= 65 && code <= 90)
	);
}
```
