# 📝 Remove Palindromic Subsequences

## 🔗 [Task description on Leetcode](https://leetcode.com/problems/remove-palindromic-subsequences/description/?envType=problem-list-v2&envId=two-pointers)

### 💡 Solution

```js
function removePalindromeSub(s) {
	let left = 0;
	let right = s.length - 1;

	while (left < right) {
		if (s[left] !== s[right]) return 2;
		left++;
		right--;
	}

	return 1;
}

function removePalindromeSub(s) {
	if (s === s.split('').reverse().join('')) return 1;
	return 2;
}
```
