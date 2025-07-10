# 📝 Intersection of Two Linked Lists

## 🔗 [Task description on Leetcode](https://leetcode.com/problems/intersection-of-two-linked-lists/description/?envType=problem-list-v2&envId=linked-list)

### 💡 Solution

```js
function getIntersectionNode(headA, headB) {
	let a = headA;
	let b = headB;

	while (a !== b) {
		a = a ? a.next : headB;
		b = b ? b.next : headA;
	}

	return a;
}
```
