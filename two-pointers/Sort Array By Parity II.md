# 📝 Sort Array By Parity II

## 🔗 [Task description on Leetcode](https://leetcode.com/problems/sort-array-by-parity-ii/description/?envType=problem-list-v2&envId=two-pointers)

### 💡 Solution

```js
function sortArrayByParityII(nums) {
	let evenPos = 0;
	let oddPos = 1;
	const len = nums.length;

	while (evenPos < len && oddPos < len) {
		const isEvenCorrect = nums[evenPos] % 2 === 0;
		const isOddCorrect = nums[oddPos] % 2 !== 0;

		if (isEvenCorrect) {
			evenPos += 2;
		} else if (isOddCorrect) {
			oddPos += 2;
		} else {
			[nums[evenPos], nums[oddPos]] = [nums[oddPos], nums[evenPos]];
			evenPos += 2;
			oddPos += 2;
		}
	}

	return nums;
}
```
