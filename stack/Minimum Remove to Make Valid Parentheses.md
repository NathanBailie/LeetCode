# 📝 Minimum Remove to Make Valid Parentheses

## 🔗 [Task description on Leetcode](https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses/description/?envType=problem-list-v2&envId=stack)

### 💡 Solution

```js
function minRemoveToMakeValid(str) {
	const stack = [];
	const result = [];

	for (let i = 0; i < str.length; i++) {
		if (str[i] === ')') {
			if (stack.length) stack.pop();
			else continue;
		} else if (str[i] === '(') {
			stack.push(str[i]);
		}
		result.push(str[i]);
	}

	let current = result.length - 1;
	while (stack.length) {
		if (result[current] === '(') {
			result.splice(current, 1);
			stack.pop();
		}
		current--;
	}

	return result.join('');
}
```
