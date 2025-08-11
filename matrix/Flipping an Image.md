# 📝 Flipping an Image

## 🔗 [Task description on Leetcode](https://leetcode.com/problems/flipping-an-image/description/?envType=problem-list-v2&envId=matrix)

### 💡 Solution

```js
function flipAndInvertImage(image) {
	return image.map(row => row.reverse().map(pixel => pixel ^ 1));
}
```
