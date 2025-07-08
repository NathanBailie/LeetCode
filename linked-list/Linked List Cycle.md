# 📝 Linked List Cycle

## 🔗 [Task description on Leetcode](https://leetcode.com/problems/linked-list-cycle/description/?envType=problem-list-v2&envId=linked-list)

### 💡 Solution

```js
function hasCycle(head) {
	let slow = head;
	let fast = head;

	while (fast !== null && fast.next !== null) {
		slow = slow.next;
		fast = fast.next.next;

		if (slow === fast) return true;
	}

	return false;
}
```
