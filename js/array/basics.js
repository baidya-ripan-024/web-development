/**
 * Here, we will cover the basics of arrays in JavaScript.
 * Arrays are used to store multiple values in a single variable.
 */

let nums = [10, 20, 30];

nums.push(40); // add element at the end
nums.pop(); // remove element from the last

nums.unshift(5); // add element at first
nums.shift(); // remove element from the first

let len = nums.length; // find the length

let indexOf20 = nums.indexOf(20);

console.log(indexOf20);

// loop over array
console.log('print array element using for loop')
for(let i = 0; i < len; i ++) {
    console.log(`element at index ${i} is ${nums[i]}`);
}

// enhanced for loop
console.log('print array element using enhanced for loop')
for(let num of nums) {
    console.log(num);
}
