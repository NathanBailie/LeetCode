// https://leetcode.com/problems/sort-array-by-parity-ii/description/

function sortArrayByParityII(nums) {
    let evenInd = 0, oddInd = 1;
    const res = new Array(nums.length);
    nums.forEach(num => {
        num % 2 === 0 && (res[evenInd] = num, evenInd += 2);
        num % 2 !== 0 && (res[oddInd] = num, oddInd += 2);
    });
    return res;
}