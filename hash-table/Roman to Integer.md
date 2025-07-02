# 📝 Roman to Integer

## 🔗 [Task description on Leetcode](https://leetcode.com/problems/roman-to-integer/?envType=problem-list-v2&envId=hash-table)

### 💡 Solution

```js
function romanToInt(s) {
	const romanMap = {
		I: 1,
		V: 5,
		X: 10,
		L: 50,
		C: 100,
		D: 500,
		M: 1000,
	};

	let result = 0;

	for (let i = 0; i < s.length; i++) {
		let currVal = romanMap[s[i]];
		let nextVal = romanMap[s[i + 1]];

		if (currVal < nextVal) {
			result += nextVal - currVal;
			i++;
		} else {
			result += currVal;
		}
	}

	return result;
}
```
