# 📝 Kids With the Greatest Number of Candies

## 🔗 [Task description on LeetCode](https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/description/)

### 💡 Solution

```javascript
function kidsWithCandies(arr, e) {
    const max = Math.max(...arr);
    return arr.map(candy => candy + e >= max);
}
```
