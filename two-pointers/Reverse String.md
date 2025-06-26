# 📝 Reverse String

## 🔗 [Task description on Leetcode](https://leetcode.com/problems/reverse-string/description/?envType=problem-list-v2&envId=two-pointers)

### 💡 Solution

```js
function reverseString(str) {
	let left = 0;
	let right = str.length - 1;

	while (left < right) {
		[str[left], str[right]] = [str[right], str[left]];
		left++;
		right--;
	}

	return str;
}
```
