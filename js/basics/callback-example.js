/**
 * A callback function is a function passed into another function as an argument, 
 * which is then invoked inside the outer function to complete some kind of routine or action.
 */

function hi(callback1, callback2) {
    console.log('hiee');
    callback1();
    callback2();
}

function bye() {
    console.log('bye');
}

function leave() {
    console.log('i am leaving..')
}  
hi(bye, leave);

// example 2
function sum(callback, x, y) {
    let result = x + y;
    callback(result);
}

function displayConsole(result) {
    console.log('the sum is:', result);
}

sum(displayConsole, 10, 20);
