# 📝 Shortest Distance to a Character

## 🔗 [Task description on Leetcode](https://leetcode.com/problems/shortest-distance-to-a-character/description/?envType=problem-list-v2&envId=two-pointers)

### 💡 Solution

```js
function shortestToChar(s, c) {
	const strLen = s.length;
	const result = new Array(strLen);
	const positions = [];

	for (let i = 0; i < strLen; i++) if (s[i] === c) positions.push(i);
	console.log(positions);

	let posIndex = 0;

	for (let i = 0; i < strLen; i++) {
		while (
			posIndex < positions.length - 1 &&
			positions[posIndex + 1] - i <= i - positions[posIndex]
		) {
			posIndex++;
		}

		result[i] = Math.abs(positions[posIndex] - i);
	}

	return result;
}
```
