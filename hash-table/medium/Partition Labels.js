// https://leetcode.com/problems/partition-labels/description/

function partitionLabels(s) {
    let lastInd = {}, res = [], start = 0, end = 0;
    for (let i = 0; i < s.length; i++) lastInd[s[i]] = i;

    for (let i = 0; i < s.length; i++) {
        end = Math.max(end, lastInd[s[i]]);
        if (i === end) {
            res.push(end - start + 1);
            start = i + 1;
        }
    }

    return res;
}