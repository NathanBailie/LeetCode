// https://leetcode.com/problems/find-players-with-zero-or-one-losses/description/

function findWinners(m) {
    let res = [[], []];
    let lost = m.reduce((acc, [w, l]) => {
        acc[w] = acc[w] || 0;
        acc[l] = (acc[l] || 0) + 1;
        return acc;
    }, {});

    for (let key in lost) {
        if (lost[key] === 0) res[0].push(+key);
        if (lost[key] === 1) res[1].push(+key);
    }
    return res;
}