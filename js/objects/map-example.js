// The map() method of Array instances creates a new array populated 
// with the results of calling a provided function on every element in the calling array.

let nums = [2, 4, 6, 8, 9];
let squareNums = nums.map(square);

console.log(squareNums);

function square(num) {
    return Math.pow(num, 2);
}