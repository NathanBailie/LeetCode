// https://leetcode.com/problems/mean-of-array-after-removing-some-elements/

function trimMean(arr) {
    let l = Math.floor(arr.length * 0.05);
    arr.sort((a, b) => a - b);
    arr.splice(0, l); arr.splice(-l);
    return (arr.reduce((acc, n) => acc + n, 0) / arr.length).toFixed(5);
};