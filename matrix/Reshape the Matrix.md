# 📝 Reshape the Matrix

## 🔗 [Task description on Leetcode](https://leetcode.com/problems/reshape-the-matrix/description/?envType=problem-list-v2&envId=matrix)

### 💡 Solution

```js
function matrixReshape(matrix, r, c) {
	let m = matrix.length;
	let n = matrix[0].length;

	if (m * n !== r * c) return matrix;

	const flat = matrix.flat();

	const reshaped = [];

	for (let i = 0; i < r; i++) {
		reshaped.push(flat.slice(i * c, (i + 1) * c));
	}

	return reshaped;
}
```
