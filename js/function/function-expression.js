/**
 * Definition: Function expression is a way to define functions as values or variables
 * A function expression is very similar to, and has almost the same syntax as, a function declaration. 
 * The main difference between a function expression and a function declaration is the function name, 
 * which can be omitted in function expressions to create anonymous functions. A function expression can
 * be used as an IIFE (Immediately Invoked Function Expression) which runs as soon as it is defined. 
 * See also the chapter about functions for more information.
 */

// Example 1
let message = function() {
    console.log('Hey everyone, How are you!');
}

// Example 2: with map, square of each numbers
const nums = [2, 3, 4, 5];
const squareNums = nums.map(function(num){
    return Math.pow(num, 2);
});

// Example 3: with filter, pick only even numbers
const numbers = [1, 2, 3, 4, 5, 6];
const evenNums = numbers.filter(function(num) {
    return num % 2 === 0;
});

message(); // example 1
console.log(squareNums); // example 2
console.log(evenNums); // example 3