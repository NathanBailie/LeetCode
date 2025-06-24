# 📝 Happy Number

## 🔗 [Task description on Leetcode](https://leetcode.com/problems/happy-number/description/?envType=problem-list-v2&envId=two-pointers)

### 💡 Solution

```js
function isHappy(n) {
	let slow = n;
	let fast = getNextSumOfDigits(n);

	while (fast !== 1 && slow !== fast) {
		slow = getNextSumOfDigits(slow);
		fast = getNextSumOfDigits(getNextSumOfDigits(fast));
	}

	return fast === 1;
}

function getNextSumOfDigits(num) {
	let sum = 0;

	while (num) {
		let digit = num % 10;
		sum += digit ** 2;
		num = Math.floor(num / 10);
	}

	return sum;
}
```
