// https://leetcode.com/problems/longest-subsequence-with-limited-sum/description/

function answerQueries(nums, queries) {
    nums.sort((a, b) => a - b);
    let res = [];
    for (let i = 0; i < queries.length; i++) {
        let sum = 0;
        for (let j = 0; j < nums.length; j++) {
            sum += nums[j];
            if (sum > queries[i]) { res.push(j); break; }
        }
        res[i] ?? res.push(nums.length);
    }
    return res;
};