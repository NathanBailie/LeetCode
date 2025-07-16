# 📝 Baseball Game

## 🔗 [Task description on Leetcode](https://leetcode.com/problems/baseball-game/?envType=problem-list-v2&envId=stack)

### 💡 Solution

```js
function calPoints(ops) {
	const stack = [];

	for (let op of ops) {
		if (op === 'C') {
			stack.pop();
		} else if (op === 'D') {
			stack.push(stack[stack.length - 1] * 2);
		} else if (op === '+') {
			const last = stack[stack.length - 1];
			const secondlast = stack[stack.length - 2];
			stack.push(last + secondlast);
		} else {
			stack.push(parseInt(op, 10));
		}
	}

	return stack.reduce((sum, n) => sum + n, 0);
}
```
