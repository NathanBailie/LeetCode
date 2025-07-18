# 📝 Remove All Adjacent Duplicates In String

## 🔗 [Task description on Leetcode](https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/?envType=problem-list-v2&envId=stack)

### 💡 Solution

```js
function removeDuplicates(s) {
	const stack = [];

	for (let char of s) {
		if (stack.length > 0 && stack[stack.length - 1] === char) {
			stack.pop();
		} else {
			stack.push(char);
		}
	}

	return stack.join('');
}
```
