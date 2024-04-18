// https://leetcode.com/problems/maximum-units-on-a-truck/description/

function maximumUnits(types, size) {
    types.sort((a, b) => b[1] - a[1]);
    let boxes = 0, units = 0;
    for (let i = 0; i < types.length; i++) {
        let addBoxes = Math.min(types[i][0], size - boxes);
        boxes += addBoxes;
        units += addBoxes * types[i][1];
        if (boxes >= size) break;
    }
    return units;
}