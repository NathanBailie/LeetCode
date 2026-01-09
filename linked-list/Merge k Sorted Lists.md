# 📝 Merge k Sorted Lists

## 🔗 [Task description on Leetcode](https://leetcode.com/problems/merge-k-sorted-lists/description/)

### 💡 Solution

```js
// №1
function mergeKLists(lists) {
	if (lists.length === 0) return null;

	while (lists.length > 1) {
		let mergedLists = [];
		for (let i = 0; i < lists.length; i += 2) {
			let l1 = lists[i];
			let l2 = lists[i + 1] || null;
			mergedLists.push(mergeTwoLists(l1, l2));
		}
		lists = mergedLists;
	}
	return lists[0];
}

function mergeTwoLists(l1, l2) {
	let dummy = new ListNode(0);
	let curr = dummy;

	while (l1 && l2) {
		if (l1.val < l2.val) {
			curr.next = l1;
			l1 = l1.next;
		} else {
			curr.next = l2;
			l2 = l2.next;
		}
		curr = curr.next;
	}
	curr.next = l1 || l2;
	return dummy.next;
}

// №2
function mergeKLists(lists) {
	let nodes = [];
	for (let lst of lists) {
		while (lst) {
			nodes.push(lst.val);
			lst = lst.next;
		}
	}
	nodes.sort((a, b) => a - b);

	let res = new ListNode(0);
	let cur = res;
	for (let node of nodes) {
		cur.next = new ListNode(node);
		cur = cur.next;
	}
	return res.next;
}
```
