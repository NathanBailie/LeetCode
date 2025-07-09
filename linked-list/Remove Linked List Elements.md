# 📝 Remove Linked List Elements

## 🔗 [Task description on Leetcode](https://leetcode.com/problems/remove-linked-list-elements/description/?envType=problem-list-v2&envId=linked-list)

### 💡 Solution

```js
function removeElements(head, val) {
	let dummy = { val: -1, next: head };
	let current = dummy;

	while (current !== null && current.next !== null) {
		if (current.next.val === val) {
			current.next = current.next.next;
		} else {
			current = current.next;
		}
	}

	return dummy.next;
}
```
