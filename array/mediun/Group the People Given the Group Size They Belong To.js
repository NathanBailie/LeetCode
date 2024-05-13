// https://leetcode.com/problems/group-the-people-given-the-group-size-they-belong-to/description/

function groupThePeople(g) {
    let hash = {}, res = [];
    g.forEach((s, i) => {
        if (!hash[s]) hash[s] = [];
        hash[s].push(i);

        if (hash[s].length === s) {
            res.push(hash[s]);
            hash[s] = [];
        }
    });

    return res;
}