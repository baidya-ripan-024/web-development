const button = document.getElementById('btn');
const result = document.getElementById('result');
const maxi = 100, mini = 1;
let randomNumber;

button.onclick = function() {
    // generate a random number between 1 to 100
    randomNumber = Math.floor(Math.random() * (maxi - mini + 1)) + mini;

    result.textContent = randomNumber;
}