/**
 * In this section, we will learn about the  operator prcedence in JavaScript.
 * Operator precedence determines the order in which operators are evaluated in an expression.
 * Operators with higher precedence are evaluated before operators with lower precedence.
 * 
 * 1. Parentheses `()`
 * 2. Exponentiation `**`
 * 3. Multiplication `*`, Division `/`, and Modulus `%`
 * 4. Addition `+` and Subtraction `-`
 * 5. Comparison operators (`<`, `<=`, `>`, `>=`, `==`, `!=`, `===`, `!==`)
 * 6. Logical AND `&&`
 * 7. Logical OR `||`
 * 8. Assignment operators (`=`, `+=`, `-=`, `*=`, `/=`, `%=`, `**=`, etc.)
 * 9. Comma operator `,`
 */

let exmple1 = 5 + 3 * 2; // 5 + (3 * 2) = 5 + 6 = 11
console.log(exmple1); // 11

let example2 = (5 + 3) * 2; // (5 + 3) * 2 = 8 * 2 = 16
console.log(example2); // 16

let example3 = 10 - 2 + 5; // (10 - 2) + 5 = 8 + 5 = 13
console.log(example3); // 13

let example4 = 10 - (2 + 5); // 10 - (2 + 5) = 10 - 7 = 3
console.log(example4); // 3

let example5 = 10 / 2 * 3; // (10 / 2) * 3 = 5 * 3 = 15
console.log(example5); // 15

let example6 = 10 / (2 * 3); // 10 / (2 * 3) = 10 / 6 = 1.6666666666666667
console.log(example6); // 1.6666666666666667

let example7 = 5 + 2 * 3 - 4; // 5 + (2 * 3) - 4 = 5 + 6 - 4 = 7
console.log(example7); // 7