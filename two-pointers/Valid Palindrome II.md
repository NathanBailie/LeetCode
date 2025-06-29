# 📝 Valid Palindrome II

## 🔗 [Task description on Leetcode](https://leetcode.com/problems/valid-palindrome-ii/?envType=problem-list-v2&envId=two-pointers)

### 💡 Solution

```js
function validPalindrome(s) {
	let left = 0;
	let right = s.length - 1;

	while (left < right) {
		if (s[left] !== s[right]) {
			return (
				isPalindrome(s, left + 1, right) || isPalindrome(s, left, right - 1)
			);
		}
		left++;
		right--;
	}
	return true;
}

function isPalindrome(str, left, right) {
	while (left < right) {
		if (str[left] !== str[right]) return false;
		left++;
		right--;
	}
	return true;
}
```
