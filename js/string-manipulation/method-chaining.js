/**
 * In this section, we will discuss about method chaining in JavaScript.
 * Method chaining allows us to call multiple methods on an object in a single statement.
 * It is a way to simplify and make the code more readable and maintainable.
 */

let username = '  johnDoe  ';

let formattedUsername = username
  .trim() // Removes whitespace from both ends of the string
  .toUpperCase() // Converts the string to lowercase
  .concat('_user') // Concatenates '_user' to the string
  .replace(' ', '_'); // Replaces the first space with an underscore


console.log('original username:', username);
console.log('formatted username:', formattedUsername);