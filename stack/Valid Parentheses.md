# 📝 Valid Parentheses

## 🔗 [Task description on Leetcode](https://leetcode.com/problems/valid-parentheses/description/?envType=problem-list-v2&envId=stack)

### 💡 Solution

```js
function isValid(str) {
	const stack = [];
	const map = {
		'(': ')',
		'[': ']',
		'{': '}',
	};

	for (let char of str) {
		if (map[char]) {
			stack.push(char);
		} else {
			const last = stack.pop();
			if (map[last] !== char) return false;
		}
	}

	return stack.length === 0;
}
```
