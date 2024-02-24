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

    checkAnswer(userClickedPattern.length - 1);
});

function checkAnswer(currentLevel) {
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        console.log('Success');

        if (gamePattern.length === userClickedPattern.length) {
            setTimeout(() => {
                nextSequence();
            }, 1000);
        }
    } else {
        playSound('wrong');

        $('body').addClass('game-over');
        setTimeout(() => {
            $('body').removeClass('game-over');
        }, 200);

        $('#level-title').text('Game Over, Press Any Key to Restart');

        startOver();
    }
}

function nextSequence() {
    userClickedPattern.length = 0;

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

function startOver() {
    level = 0;
    gamePattern.length = 0;
    isGameStarted = false;
}
