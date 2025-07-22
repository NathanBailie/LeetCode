# 📝 Reveal Cards In Increasing Order

## 🔗 [Task description on Leetcode](https://leetcode.com/problems/reveal-cards-in-increasing-order/description/?envType=problem-list-v2&envId=queue)

### 💡 Solution

```js
function deckRevealedIncreasing(deck) {
	deck.sort((a, b) => a - b);
	let result = [];

	for (let i = deck.length - 1; i >= 0; i--) {
		if (result.length > 0) {
			result.unshift(result.pop());
		}
		result.unshift(deck[i]);
	}

	return result;
}
```
