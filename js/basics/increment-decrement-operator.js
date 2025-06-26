/**
 * In this section, we will learn about increment and decrement operators in JavaScript.
 * Increment and decrement operators are used to increase or decrease the value of a variable by 1
 * 
 * Increment Operator: `++`
 * Decrement Operator: `--`
 * 
 * There are two forms of these operators:
 * 1. Prefix: `++x` or `--x` (increments or decrements the value before using it)
 * 2. Postfix: `x++` or `x--` (increments or decrements the value after using it)
 */

// Example of Increment Operator
let a = 5;

console.log("Initial value of a:", a); // Initial value of a: 5
console.log("Using Postfix Increment (a++):", a++); // Using Postfix Increment (a++): 5
console.log("Value of a after Postfix Increment:", a); // Value of a after Postfix Increment: 6
console.log("Using Prefix Increment (++a):", ++a); // Using Prefix Increment (++a): 7
console.log("Final value of a:", a); // Final value of a: 7


// Example of Decrement Operator
let b = 10;
console.log("Initial value of b:", b); // Initial value of b: 10
console.log("Using Postfix Decrement (b--):", b--); // Using Postfix Decrement (b--): 10
console.log("Value of b after Postfix Decrement:", b); // Value of b after Postfix Decrement: 9
console.log("Using Prefix Decrement (--b):", --b); // Using Prefix Decrement (--b): 8
console.log("Final value of b:", b); // Final value of b: 8