// https://leetcode.com/problems/sorting-the-sentence/description/

const sortSentence = str => str.split(' ').sort((a, b) => a.slice(-1) - b.slice(-1)).join(' ').replace(/\d/g, '');