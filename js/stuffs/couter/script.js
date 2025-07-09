const countLable = document.getElementById('countLabel');
const incrementBtn = document.getElementById('incrementBtn');
const resetBtn = document.getElementById('resetBtn');
const decrementBtn = document.getElementById('decrementBtn');

let count = 0;

incrementBtn.onclick = function() {
    count ++;
    countLable.textContent = count;
}

decrementBtn.onclick = function () {
    count--;
    countLable.textContent = count;
}

resetBtn.onclick = function () {
    count = 0;
    countLable.textContent = count;
}