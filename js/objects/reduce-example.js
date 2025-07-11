/**
 * The reduce() method of Array instances executes a user-supplied "reducer" callback function on each element of the array, 
 * in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer
 *  across all elements of the array is a single value.
 */

// calculate the maximum and minimum from array using reduce
const grades = [64, 94, 73, 82, 85, 88, 72];

let maximum = grades.reduce(getMaximum);
let minimum = grades.reduce(getMinimum);

console.log(`Maximum ${maximum}`);
console.log(`Minimum ${minimum}`);

function getMaximum(accumulator, next) {
    return Math.max(accumulator, next);
}
function getMinimum(accumulator, next) {
    return Math.min(accumulator, next);
}