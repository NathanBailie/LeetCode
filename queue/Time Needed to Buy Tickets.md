# 📝 Time Needed to Buy Tickets

## 🔗 [Task description on Leetcode](https://leetcode.com/problems/time-needed-to-buy-tickets/?envType=problem-list-v2&envId=queue)

### 💡 Solution

```js
function timeRequiredToBuy(tickets, k) {
	const queue = tickets.map((ticket, index) => ({ ticket, index }));
	let time = 0;

	while (queue.length > 0) {
		const person = queue.shift();
		person.ticket--;
		time++;

		if (person.ticket > 0) queue.push(person);
		if (person.index === k && person.ticket === 0) return time;
	}
}
```
