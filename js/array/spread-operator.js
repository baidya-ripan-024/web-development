/**
 * Spread operator: 
 * ... allow an iterable such as an array or string to be expand into separate elements (unpack the elements)
 */
let nums = [10, 20, 30, 45, 50];

let maximum = Math.max(...nums);
let minimum = Math.min(...nums);

console.log(`minimum ${minimum}`);
console.log(`maximum ${maximum}`);


// example 2
let car = ['Thar', 'Mercedes', 'BMW', 'Jaguar'];
let bike = ['Pulsur', 'Royal Enfild', 'Honda Shine'];

let vechiles = [...car, ...bike];
console.log(vechiles);

// example 3
let fullName = 'Ripan Baidya';
let chars = [...fullName];

console.log(chars);