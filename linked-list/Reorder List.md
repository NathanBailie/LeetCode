# 📝 Reorder List

## 🔗 [Task description on Leetcode](https://leetcode.com/problems/reorder-list/description/)

### 💡 Solution

```js
function reorderList(head) {
	if (!head || !head.next) return;

	let mid = getMiddle(head);
	let reversedMid = reverseList(mid.next);
	mid.next = null;
	interleave(head, reversedMid);
}

function getMiddle(head) {
	let slow = head;
	let fast = head;
	while (fast != null && fast.next !== null) {
		slow = slow.next;
		fast = fast.next.next;
	}
	return slow;
}

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

function interleave(list1, list2) {
	while (list2 !== null) {
		let tmp1 = list1.next;
		let tmp2 = list2.next;

		list1.next = list2;
		list2.next = tmp1;

		list1 = tmp1;
		list2 = tmp2;
	}
}
```
