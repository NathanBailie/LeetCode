# 📝 Number of Students Unable to Eat Lunch

## 🔗 [Task description on Leetcode](https://leetcode.com/problems/number-of-students-unable-to-eat-lunch/?envType=problem-list-v2&envId=queue)

### 💡 Solution

```js
function countStudents(students, sandwiches) {
	let queue = [...students];
	let stack = [...sandwiches];
	let attempts = 0;

	while (attempts < queue.length && queue.length > 0) {
		if (queue[0] === stack[0]) {
			queue.shift();
			stack.shift();
			attempts = 0;
		} else {
			queue.push(queue.shift());
			attempts++;
		}
	}

	return queue.length;
}
```
