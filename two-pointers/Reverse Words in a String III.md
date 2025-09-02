# 📝 Reverse Words in a String III

## 🔗 [Task description on Leetcode](https://leetcode.com/problems/reverse-words-in-a-string-iii/description/?envType=problem-list-v2&envId=two-pointers)

### 💡 Solution

```js
// #1
function reverseWords(s) {
	let result = [];
	let reversedStr = s.split(' ');

	for (let i = 0; i < reversedStr.length; i++) {
		let reversedWord = reversedStr[i].split('').reverse().join('');
		result.push(reversedWord);
	}

	return result.join(' ');
}

// #2
function reverseWords(s) {
	const result = [];
	let wordStart = 0;

	for (let i = 0; i <= s.length; i++) {
		if (i === s.length || s[i] === ' ') {
			for (let j = i - 1; j >= wordStart; j--) {
				result.push(s[j]);
			}

			if (i !== s.length) result.push(' ');
			wordStart = i + 1;
		}
	}

	return result.join('');
}
```
