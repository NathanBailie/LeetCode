# 📝 Minimum Number of Moves to Seat Everyone

## 🔗 [Task description on LeetCode](https://leetcode.com/problems/minimum-number-of-moves-to-seat-everyone/description/)

### 💡 Solution

```javascript
function minMovesToSeat(seats, students) {
    seats.sort((a, b) => a - b);
    students.sort((a, b) => a - b);
    let count = 0;
    for (let i = 0; i < seats.length; i++) count += Math.abs(seats[i] - students[i]);
    return count;
}
```
