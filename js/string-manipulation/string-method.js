/**
 * In this example, we will use various string manipulation methods in JavaScript.
 * We will demonstrate how to convert a string to uppercase, lowercase, and how to find the length of a string.
 * Additionally, we will show how to extract a substring from a string and how to replace a
 */

let str = " hello ";

let lowercase = str.toLowerCase(); // Converts the string to lowercase
let uppercase = str.toUpperCase(); // Converts the string to uppercase
let length = str.length; // Finds the length of the string
let substring = str.substring(1, 4); // Extracts characters from index 1 to 3
let replacedString = str.replace("h", "H"); // Replaces 'h' with 'H'
let trimmedString = str.trim(); // Removes whitespace from both ends of the string
let isStartsWithHe = str.startsWith("he"); // Checks if the string starts with "he"
let isEndsWithLo = str.endsWith("lo"); // Checks if the string ends with
let includesWorld = str.includes("lo"); // Checks if the string contains "lo"
let splitString = str.split(" "); // Splits the string into an array using space as a delimiter
let chatAt2 = str.charAt(2); // Gets the character at index 2
let indexOfE = str.indexOf("e"); // Finds the index of the first occurrence of "e"
let lastIndexOfO = str.lastIndexOf("o"); // Finds the index of the last occurrence of "o"
let reaplacedAll = str.replaceAll("l", "L"); // Replaces all occurrences of 'l' with 'L'

console.log("Original String:", str);
console.log("Lowercase:", lowercase);
console.log("Uppercase:", uppercase);
console.log("Length:", length);
console.log("Substring (1, 4):", substring);
console.log("Replaced 'h' with 'H':", replacedString);      
console.log("Trimmed String:", trimmedString);
console.log("Starts with 'he':", isStartsWithHe);
console.log("Ends with 'lo':", isEndsWithLo);
console.log("Includes 'lo':", includesWorld);
console.log("Split String:", splitString);
console.log("Character at index 2:", chatAt2);
console.log("Index of 'e':", indexOfE);
console.log("Last index of 'o':", lastIndexOfO);
console.log("Replaced all 'l' with 'L':", reaplacedAll);