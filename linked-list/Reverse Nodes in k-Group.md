# 📝 Reverse Nodes in k-Group

## 🔗 [Task description on Leetcode](https://leetcode.com/problems/reverse-nodes-in-k-group/submissions/1879667861/)

### 💡 Solution

```js
// №1
function reverseKGroup(head, k) {
	let cur = head;
	let group = 0;
	while (cur && group < k) {
		cur = cur.next;
		group++;
	}

	if (group === k) {
		cur = reverseKGroup(cur, k);
		while (group-- > 0) {
			let tmp = head.next;
			head.next = cur;
			cur = head;
			head = tmp;
		}
		head = cur;
	}
	return head;
}

// №2
function reverseKGroup(head, k) {
	let node = head;
	for (let i = 0; i < k; i++) {
		if (!node) return head;
		node = node.next;
	}

	let newNextGroupHead = reverseKGroup(node, k);

	return reverse(head, node, newNextGroupHead);
}

function reverse(head, tail, nextGroupResult) {
	let prev = nextGroupResult;
	let cur = head;

	while (cur !== tail) {
		let next = cur.next;
		cur.next = prev;
		prev = cur;
		cur = next;
	}
	return prev;
}
```
