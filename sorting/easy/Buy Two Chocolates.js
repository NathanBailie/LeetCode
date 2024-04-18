// https://leetcode.com/problems/buy-two-chocolates/description/

function buyChoco(prices, money) {
    prices.sort((a, b) => a - b);
    const sum = prices[0] + prices[1];
    return sum > money ? money : money - sum;
};