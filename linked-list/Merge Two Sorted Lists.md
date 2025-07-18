# 📝 Merge Two Sorted Lists

## 🔗 [Task description on Leetcode](https://leetcode.com/problems/merge-two-sorted-lists/description/?envType=problem-list-v2&envId=linked-list)

### 💡 Solution

```js
function mergeTwoLists(list1, list2) {
	let dummy = new ListNode(-1);
	let current = dummy;

	while (list1 !== null && list2 !== null) {
		if (list1.val < list2.val) {
			current.next = list1;
			list1 = list1.next;
		} else {
			current.next = list2;
			list2 = list2.next;
		}

		current = current.next;
	}

	current.next = list1 !== null ? list1 : list2;

	return dummy.next;
}
```
