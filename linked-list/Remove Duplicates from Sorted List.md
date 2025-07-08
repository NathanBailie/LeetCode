# 📝 Remove Duplicates from Sorted List

## 🔗 [Task description on Leetcode](https://leetcode.com/problems/remove-duplicates-from-sorted-list/description/?envType=problem-list-v2&envId=linked-list)

### 💡 Solution

```js
function deleteDuplicates(head) {
	let current = head;

	while (current && current.next) {
		if (current.val === current.next.val) {
			current.next = current.next.next;
		} else {
			current = current.next;
		}
	}

	return head;
}
```
