// https://leetcode.com/problems/shuffle-the-array/description/

function shuffle(arr, n) {
    let res = [];
    for (let i = 0, j = n; i < n; i++, j++) res.push(arr[i], arr[j]);
    return res;
};

function shuffle(arr, x) {
    return arr.reduce((acc, n, i) => {
        if (i < x) acc.push(n, arr[i + x]);
        return acc;
    }, []);
}