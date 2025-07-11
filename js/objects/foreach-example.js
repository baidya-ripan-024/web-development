// The forEach() method of Array instances executes a provided function once for each array element.
let nums = [10, 20, 30];

function displayNumbers(num) {
    console.log(num*2)
}

nums.forEach(displayNumbers);