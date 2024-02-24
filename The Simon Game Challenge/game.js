const buttonColors = ['red', 'blue', 'green', 'yellow'];

const gamePattern = [];
const userClickedPattern = [];

let isGameStarted = false;

let level = 0;

$(document).keydown(() => {
    if (!isGameStarted) {

        $('#level-title').text(`Level ${level}`);

        nextSequence();
        isGameStarted = true;
    }
});

$('.btn').on('click', (e) => {
    const userChosenColor = e.currentTarget.id;
    userClickedPattern.push(userChosenColor);

    playSound(userChosenColor);

    animatePress(userChosenColor);
});

function nextSequence() {
    level++;

    $('#level-title').text(`Level ${level}`);

    let randomNumber = Math.floor(Math.random() * 4);

    let randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);

    $(`#${randomChosenColor}`).fadeIn(100).fadeOut(100).fadeIn(100);

    playSound(randomChosenColor);
}

function playSound(name) {
    const audio = new Audio(`sounds/${name}.mp3`);
    audio.play();
}

function animatePress(currentColor) {
    $(`#${currentColor}`).addClass('pressed');
    setTimeout(() => {
        $(`#${currentColor}`).removeClass('pressed');
    }, 100);
}
