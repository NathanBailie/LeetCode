# 📝 Implement Stack using Queues

## 🔗 [Task description on Leetcode](https://leetcode.com/problems/implement-stack-using-queues/description/?envType=problem-list-v2&envId=queue)

### 💡 Solution

```js
var MyStack = function () {
	this.q1 = [];
	this.q2 = [];
};

MyStack.prototype.push = function (x) {
	this.q2.push(x);
	while (this.q1.length) {
		this.q2.push(this.q1.shift());
	}
	[this.q1, this.q2] = [this.q2, this.q1];
};

MyStack.prototype.pop = function () {
	return this.q1.shift();
};

MyStack.prototype.top = function () {
	return this.q1[0];
};

MyStack.prototype.empty = function () {
	return this.q1.length === 0;
};
```
