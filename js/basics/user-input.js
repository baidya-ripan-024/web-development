/**
 * In this section, we will learn how to take user input in javaScript.
 * There are several ways to take user input in JavaScript, including:
 * 1. Using the `prompt()` function in the browser.
 * 2. Professional way: Using html forms and event listeners.
 */

// Using the `prompt()` function
/**  
let username;
username = window.prompt("Please enter your name:");

if (username) {
    console.log("Hello, " + username + "! Welcome to our website.");
}

*/

// Professional way: Using HTML forms and event listeners
document.getElementById('submitButton').onclick = function() {
    const username = document.getElementById('username').value;

    console.log("Hello, " + username + "! Welcome to our website.");

    // update the content of an HTML element
    // Assuming there is an <h1> element with id 'myH1'
    document.getElementById('myh1').textContent = `Hello, ${username}! Welcome to our website.`;
    document.getElementById('myh1').style.color = 'blue'; // Change the color of the text
    document.getElementById('myh1').style.fontSize = '24px';
};