let age = document.getElementById('userAgeInput');
let checkBtn = document.getElementById('checkBtn');
let result = document.getElementById('result');

checkBtn.onclick = function() {
    if(age.value >= 18) {
        result.textContent = "You are eligible to vote.";
        result.style.color = "green";
    } else {
        result.textContent = "You are not eligible to vote.";
        result.style.color = "red";
    }
}