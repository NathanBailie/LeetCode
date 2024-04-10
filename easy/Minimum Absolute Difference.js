// https://leetcode.com/problems/minimum-absolute-difference/description/

function minimumAbsDifference(arr) {
    arr.sort((a, b) => a - b);
    let minDiff = Math.min(...arr.slice(1).map((n, i) => n - arr[i]));
    return arr.slice(1).reduce((res, n, i) => {
        if (n - arr[i] === minDiff) res.push([arr[i], n]);
        return res;
    }, []);
};