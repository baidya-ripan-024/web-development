/**
 * In this section, we will learn about type conversion in JavaScript.
 * Type conversion is the process of converting a value from one type to another.
 * JavaScript provides several ways to perform type conversion, including:
 * 1. Implicit Type Conversion (Type Coercion)
 * 2. Explicit Type Conversion
 * 
 * Implicit Type Conversion:
 * JavaScript automatically converts values from one type to another when necessary.
 * 
 * Explicit Type Conversion:
 * You can explicitly convert values using functions like:
 */

let a = "5";
a = Number(a); // Convert string to number
a += 2;
console.log(a, typeof a);

let b = 10;
b = String(b); // Convert number to string
b += "5"; // Concatenate with a string
console.log(b, typeof b);

/**
 * In case of boolean, if the value is not empty or if it is declared, it will be considered as true.
 * If the value is empty or undefined or 0 or null, it will be considered as false.
 */
let c = null;
c = Boolean(c); // Convert string to boolean
console.log(c, typeof c); // Non-empty string is true
