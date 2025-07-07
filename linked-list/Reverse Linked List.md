# 📝 Reverse Linked List

## 🔗 [Task description on Leetcode](https://leetcode.com/problems/reverse-linked-list/description/?envType=problem-list-v2&envId=linked-list)

### 💡 Solution

```js
function reverseList(head) {
	let prev = null;
	let current = head;

	while (current !== null) {
		let nextNode = current.next;
		current.next = prev;
		prev = current;
		current = nextNode;
	}

	return prev;
}
```
