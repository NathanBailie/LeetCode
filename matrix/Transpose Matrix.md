# 📝 Transpose Matrix

## 🔗 [Task description on Leetcode](https://leetcode.com/problems/transpose-matrix/description/?envType=problem-list-v2&envId=matrix)

### 💡 Solution

```js
function transpose(matrix) {
	return matrix[0].map((_, colIndex) => matrix.map(row => row[colIndex]));
}
```
