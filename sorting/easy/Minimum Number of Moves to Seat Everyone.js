// https://leetcode.com/problems/minimum-number-of-moves-to-seat-everyone/description/

function minMovesToSeat(seats, students) {
    seats.sort((a, b) => a - b);
    students.sort((a, b) => a - b);
    let count = 0;
    for (let i = 0; i < seats.length; i++) count += Math.abs(seats[i] - students[i]);
    return count;
}