/**
 * In this code, we will work with string slicing in JavaScript.
 * We will demonstrate how to extract parts of a string using the slice, substring, and substr
 * 
 * The main differences between slice() and substring() in JavaScript are:
 * 
 * Negative Indexes:
 * slice(start, end) accepts negative indexes (counts from the end).
 * substring(start, end) treats negative indexes as 0.
 * Order of Arguments:
 * 
 * slice(start, end) keeps arguments as is.
 * substring(start, end) swaps the arguments if start > end.
 */


let fullName = "Ripan Baidya";

let firstName = fullName.slice(0, 5); // Extracts characters from index 0 to 4
let lastName = fullName.slice(6, 12); // Extracts characters from index 6 to 11

let firstNameSubstring = fullName.substring(0, 5); // Extracts characters from index 0 to 4
let lastNameSubstring = fullName.substring(6, 12); // Extracts characters from

console.log("First Name using slice:", firstName);
console.log("Last Name using slice:", lastName);

console.log("First Name using substring:", firstNameSubstring);
console.log("Last Name using substring:", lastNameSubstring);