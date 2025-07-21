# 📝 Find the Winner of the Circular Game

## 🔗 [Task description on Leetcode](https://leetcode.com/problems/find-the-winner-of-the-circular-game/description/?envType=problem-list-v2&envId=queue)

### 💡 Solution

```js
function findTheWinner(n, k) {
	const queue = [];

	for (let i = 1; i <= n; i++) queue.push(i);

	while (queue.length > 1) {
		for (let i = 0; i < k - 1; i++) queue.push(queue.shift());
		queue.shift();
	}

	return queue[0];
}
```
