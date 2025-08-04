# 📝 Defuse the Bomb

## 🔗 [Task description on Leetcode](https://leetcode.com/problems/defuse-the-bomb/description/?envType=problem-list-v2&envId=sliding-window)

### 💡 Solution

```js
function decrypt(code, k) {
	const l = code.length;
	let result = new Array(l).fill(0);

	if (k === 0) return result;

	for (let i = 0; i < l; i++) {
		let sum = 0;

		for (let j = 1; j <= Math.abs(k); j++) {
			const index = k > 0 ? (i + j) % l : (i - j + l) % l;
			sum += code[index];
		}
		result[i] = sum;
	}

	return result;
}
```
