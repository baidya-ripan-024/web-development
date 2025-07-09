// find the greater among 3 numbers using ternary operator
let num1 = 10, num2 = 20, num3 = 30;

let greater = (num1 > num2 && num1 > num3) ? num1 :
                (num2 > num1 && num2 > num3) ? num2 : num3;

console.log(greater);