# 📝 Remove Nth Node From End of List

## 🔗 [Task description on Leetcode](https://leetcode.com/problems/remove-nth-node-from-end-of-list/description/)

### 💡 Solution

```js
function removeNthFromEnd(head, n) {
	let dummy = new ListNode(0);
	dummy.next = head;

	let slow = dummy;
	let fast = dummy;

	for (let i = 0; i <= n; i++) {
		fast = fast.next;
	}

	while (fast !== null) {
		fast = fast.next;
		slow = slow.next;
	}

	slow.next = slow.next.next;
	return dummy.next;
}
```
