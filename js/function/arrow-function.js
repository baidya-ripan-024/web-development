/**
 * An arrow function expression is a compact alternative to a traditional function expression, 
 * with some semantic differences and deliberate limitations in usage
 */
// Example 1
const message = (name) => {
    console.log(`hello everyone!, I am ${name}`);
};

// Example 2: arrow function wiht filter
const nums = [1, 2, 3, 4, 5, 6];
const evenNums = nums.filter((num) => {
    return num % 2 === 0;
});

message('Ripan');
console.log(evenNums);
