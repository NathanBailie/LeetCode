# 📝 Final Prices With a Special Discount in a Shop

## 🔗 [Task description on Leetcode](https://leetcode.com/problems/final-prices-with-a-special-discount-in-a-shop/description/?envType=problem-list-v2&envId=stack)

### 💡 Solution

```js
function finalPrices(prices) {
	const result = [...prices];
	const stack = [];

	for (let i = 0; i < prices.length; i++) {
		while (stack.length > 0 && prices[stack[stack.length - 1]] >= prices[i]) {
			const j = stack.pop();
			result[j] -= prices[i];
		}
		stack.push(i);
	}

	return result;
}
```
