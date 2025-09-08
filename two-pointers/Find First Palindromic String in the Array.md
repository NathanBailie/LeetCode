# 📝 Find First Palindromic String in the Array

## 🔗 [Task description on Leetcode](https://leetcode.com/problems/find-first-palindromic-string-in-the-array/description/?envType=problem-list-v2&envId=two-pointers)

### 💡 Solution

```js
function firstPalindrome(words) {
	for (let i = 0; i < words.length; i++) {
		if (isPalindrome(words[i])) return words[i];
	}

	return '';
}

function isPalindrome(str) {
	let left = 0;
	let right = str.length - 1;

	while (left < right) {
		if (str[left] !== str[right]) return false;
		left++;
		right--;
	}

	return true;
}
```
