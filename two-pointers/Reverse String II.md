# 📝 Reverse String II

## 🔗 [Task description on Leetcode](https://leetcode.com/problems/reverse-string-ii/description/?envType=problem-list-v2&envId=two-pointers)

### 💡 Solution

```js
function reverseStr(str, k) {
	let arrStr = str.split('');

	for (let i = 0; i < arrStr.length; i += 2 * k) {
		let left = i;
		let right = Math.min(i + k - 1, arrStr.length - 1);

		while (left < right) {
			[arrStr[left], arrStr[right]] = [arrStr[right], arrStr[left]];
			left++;
			right--;
		}
	}

	return arrStr.join('');
}
```
