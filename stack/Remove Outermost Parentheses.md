# 📝 Remove Outermost Parentheses

## 🔗 [Task description on Leetcode](https://leetcode.com/problems/remove-outermost-parentheses/description/?envType=problem-list-v2&envId=stack)

### 💡 Solution

```js
function removeOuterParentheses(str) {
	let result = '';
	let depth = 0;

	for (let char of str) {
		if (char === '(') {
			if (depth > 0) result += '(';
			depth++;
		} else {
			depth--;
			if (depth > 0) result += ')';
		}
	}

	return result;
}
```
