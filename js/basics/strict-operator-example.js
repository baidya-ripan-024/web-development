/**
 * The strict operator in JavaScript is === (strict equality) and !== (strict inequality).
 * 
 * === checks both value and type.
 * Example: 5 === "5" is false because one is a number, the other is a string.
 * 
 * !== checks if value or type are not equal.
 */

console.log(5 === 5); // true (strict equality)
console.log(5 === "5"); // false (strict equality, different types)
console.log(5 !== 5); // false (strict inequality)
console.log(5 !== "5"); // true (strict inequality, different types)