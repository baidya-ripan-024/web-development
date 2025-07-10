// function to check wheter a number is odd or even

function isOddOrEven(num) {
    return num % 2 == 0 ? "Even" : "Odd";
}

let number = 6;
let result = isOddOrEven(number);

console.log(result);