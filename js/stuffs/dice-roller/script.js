function rollDice() {
    const numOfDice = document.getElementById("numOfDice").value;
    const diceNumber = document.getElementById('diceNumber');
    const diceImages = document.getElementById('diceImage');

    let numbers = [];
    let images = [];

    for(let i = 0; i < numOfDice; i ++) {
        let value = Math.floor(Math.random() * 6) + 1;
        numbers.push(value);
        images.push(`<img src=images/${value}.png>`);
    }

    diceNumber.textContent = `dice: ${numbers.join(', ')}`;
    diceImages.innerHTML = images.join('');
}