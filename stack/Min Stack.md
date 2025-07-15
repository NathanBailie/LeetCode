# 📝 Min Stack

## 🔗 [Task description on Leetcode](https://leetcode.com/problems/min-stack/description/?envType=problem-list-v2&envId=stack)

### 💡 Solution

```js
function MinStack() {
	this.stack = [];
	this.minStack = [];
}

MinStack.prototype.push = function (val) {
	this.stack.push(val);

	if (
		this.minStack.length === 0 ||
		val <= this.minStack[this.minStack.length - 1]
	) {
		this.minStack.push(val);
	}
};

MinStack.prototype.pop = function () {
	const last = this.stack.pop();
	if (last === this.minStack[this.minStack.length - 1]) {
		this.minStack.pop();
	}
};

MinStack.prototype.top = function () {
	return this.stack[this.stack.length - 1];
};

MinStack.prototype.getMin = function () {
	return this.minStack[this.minStack.length - 1];
};
```
