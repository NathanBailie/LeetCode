# 📝 Count Negative Numbers in a Sorted Matrix

## 🔗 [Task description on Leetcode](https://leetcode.com/problems/count-negative-numbers-in-a-sorted-matrix/description/?envType=problem-list-v2&envId=matrix)

### 💡 Solution

```js
function countNegatives(matrix) {
	let rows = matrix.length;
	let cols = matrix[0].length;
	let colIndex = cols - 1;
	let count = 0;

	for (let row = 0; row < rows; row++) {
		while (colIndex >= 0 && matrix[row][colIndex] < 0) {
			colIndex--;
		}
		count += cols - colIndex - 1;
	}

	return count;
}
```
