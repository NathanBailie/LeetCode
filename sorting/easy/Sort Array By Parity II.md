# 📝 Sort Array By Parity II

## 🔗 [Task description on LeetCode](https://leetcode.com/problems/sort-array-by-parity-ii/description/)

### 💡 Solution

```javascript
function sortArrayByParityII(nums) {
    let evenInd = 0, oddInd = 1;
    const res = new Array(nums.length);
    nums.forEach(num => {
        num % 2 === 0 && (res[evenInd] = num, evenInd += 2);
        num % 2 !== 0 && (res[oddInd] = num, oddInd += 2);
    });
    return res;
}
```
