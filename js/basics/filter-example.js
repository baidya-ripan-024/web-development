// The filter() method of Array instances creates a shallow copy of a portion of a given array, 
// filtered down to just the elements from the given array that pass the test implemented by the provided function.
// find all even numbers

function isEven(num) {
    return num % 2 === 0;
}

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let oddNums = nums.filter((num) => {
    return num % 2 !== 0; 
});

let evenNums = nums.filter(isEven);

console.log(evenNums);