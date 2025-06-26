/**
 * In this section, we will learn about the ternary operator in JavaScript.
 * The ternary operator is a shorthand way of writing an if-else statement.
 *  Syntax: condition ? expressionIfTrue : expressionIfFalse
*/

// Example: Check if a number is even or odd
let num = 4;

// using the if else statement
if(num % 2 == 0){
    console.log("The number is even.");
} else {
    console.log("The number is odd.");
}

// using the ternary operator
let result = (num % 2 == 0) ? "The number is even." : "The number is odd.";
console.log(result); // The number is odd.
