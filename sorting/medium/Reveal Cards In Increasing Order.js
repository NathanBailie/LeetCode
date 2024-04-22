// https://leetcode.com/problems/reveal-cards-in-increasing-order/description/

function deckRevealedIncreasing(d) {
    d.sort((a, b) => a - b);
    let res = [];
    res.push(d.pop());
    while (d.length > 0) {
        res.unshift(res.pop());
        res.unshift(d.pop());
    }
    return res;
}