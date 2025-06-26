/**
 * check whether a number is a palindrome or not.
 */

function isPalindrome(num){
    let originalNum = num;
    let reversedNum = 0;

    while(num != 0){
        let rem = num % 10;
        reversedNum = reversedNum * 10 + rem;
        num = Math.floor(num / 10);
    }

    return originalNum === reversedNum;
}

let num = 125;

let result = isPalindrome(num) ? "is a palindrome" : "is not a palindrome";
console.log(`${num} ${result}`);