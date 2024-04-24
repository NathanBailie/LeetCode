// https://leetcode.com/problems/maximum-ice-cream-bars/description/

function maxIceCream(costs, coins) {
    costs.sort((a, b) => a - b);
    let res = 0;
    for (let cost of costs) {
        if (coins < cost) break;
        coins -= cost;
        res++;
    }
    return res;
}