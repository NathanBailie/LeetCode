# 📝 Middle of the Linked List

## 🔗 [Task description on Leetcode](https://leetcode.com/problems/middle-of-the-linked-list/?envType=problem-list-v2&envId=linked-list)

### 💡 Solution

```js
// №1
function middleNode(head) {
	let slow = head;
	let fast = head;

	while (fast != null && fast.next !== null) {
		slow = slow.next;
		fast = fast.next.next;
	}
	return slow;
}
// №2
function middleNode(head) {
	let nodes = [];
	let current = head;

	while (current !== null) {
		nodes.push(current);
		current = current.next;
	}

	let midIndex = Math.floor(nodes.length / 2);
	return nodes[midIndex];
}
```
