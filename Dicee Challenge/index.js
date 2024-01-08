// Create random number from 1 to 6
let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomNumber2 = Math.floor(Math.random() * 6) + 1;

// Set dice image;
document
    .querySelector('.img1')
    .setAttribute('src', `./images/dice${randomNumber1}.png`);
document
    .querySelector('.img2')
    .setAttribute('src', `./images/dice${randomNumber2}.png`);

let result = '';

if (randomNumber1 > randomNumber2) {
    result = 'Player 1 Wins!';
} else if (randomNumber1 < randomNumber2) {
    result = 'Player 2 Wins!';
} else {
    result = 'Draw!';
}

// Set correct result
document.querySelector('h1').textContent = result;
