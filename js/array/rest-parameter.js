// rest parameter
// (...rest) it allow a function work with a variable number of arguments by building them into an array
// spread: expand an array into separate elements
// rest: bundles separate elements into an array
function sum(...nums) {
    let result = 0;

    for(let num of nums) {
        result += num;
    }

    return result;
}

let totalSum = sum(10, 20, 30, 40);
console.log(`total sum is ${totalSum}`)