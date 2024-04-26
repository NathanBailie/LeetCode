// https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/description/

function kidsWithCandies(arr, e) {
    const max = Math.max(...arr);
    return arr.map(candy => candy + e >= max);
}