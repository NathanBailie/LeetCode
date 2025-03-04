# 📝 Widest Vertical Area Between Two Points Containing No Points

## 🔗 [Task description on LeetCode](https://leetcode.com/problems/widest-vertical-area-between-two-points-containing-no-points/description/)

### 💡 Solution

```javascript
function maxWidthOfVerticalArea(points) {
    points.sort((a, b) => a[0] - b[0]);
    let max = 0;
    for (let i = 1; i < points.length; i++) max = Math.max(max, points[i][0] - points[i - 1][0]);
    return max;
}
```
