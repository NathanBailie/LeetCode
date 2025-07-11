# 📝 Palindrome Linked List

## 🔗 [Task description on Leetcode](https://leetcode.com/problems/palindrome-linked-list/description/?envType=problem-list-v2&envId=linked-list)

### 💡 Solution

```js
function isPalindrome(head) {
	if (!head || !head.next) return true;

	let slow = head;
	let fast = head;

	while (fast.next && fast.next.next) {
		slow = slow.next;
		fast = fast.next.next;
	}

	let prev = null;
	let current = slow.next;

	while (current) {
		let nextTemp = current.next;
		current.next = prev;
		prev = current;
		current = nextTemp;
	}

	let p1 = head;
	let p2 = prev;

	while (p2) {
		if (p1.val !== p2.val) return false;
		p1 = p1.next;
		p2 = p2.next;
	}

	return true;
}
```
