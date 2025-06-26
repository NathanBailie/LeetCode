# 📝 Reverse Vowels of a String

## 🔗 [Task description on Leetcode](https://leetcode.com/problems/reverse-vowels-of-a-string/description/?envType=problem-list-v2&envId=two-pointers)

### 💡 Solution

```js
function reverseVowels(str) {
	const vowels = new Set(['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U']);

	let strArr = str.split('');
	let left = 0;
	let right = str.length - 1;

	while (left < right) {
		while (left < right && !vowels.has(strArr[left])) left++;
		while (left < right && !vowels.has(strArr[right])) right--;

		[strArr[left], strArr[right]] = [strArr[right], strArr[left]];
		left++;
		right--;
	}

	return strArr.join('');
}
```
