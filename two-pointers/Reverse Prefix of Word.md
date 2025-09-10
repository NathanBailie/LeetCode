# 📝 Reverse Prefix of Word

## 🔗 [Task description on Leetcode](https://leetcode.com/problems/reverse-prefix-of-word/description/?envType=problem-list-v2&envId=two-pointers)

### 💡 Solution

```js
function reversePrefix(word, ch) {
	const ind = word.indexOf(ch);
	if (ind === -1) return word;

	const arr = word.split('');
	let left = 0;
	let right = ind;

	while (left < right) {
		[arr[left], arr[right]] = [arr[right], arr[left]];
		left++;
		right--;
	}

	return arr.join('');
}
```
