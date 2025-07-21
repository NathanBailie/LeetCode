# 📝 Number of Recent Calls

## 🔗 [Task description on Leetcode](https://leetcode.com/problems/number-of-recent-calls/description/?envType=problem-list-v2&envId=queue)

### 💡 Solution

```js
function RecentCounter() {
	this.queue = [];
}

RecentCounter.prototype.ping = function (t) {
	this.queue.push(t);
	while (this.queue[0] < t - 3000) this.queue.shift();
	return this.queue.length;
};
```
