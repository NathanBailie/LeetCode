// https://leetcode.com/problems/find-words-containing-character/description/

const findWordsContaining = (words, x) => words.reduce((acc, w, i) => w.includes(x) ? [...acc, i] : acc, []);