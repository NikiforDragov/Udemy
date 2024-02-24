const buttonColors = ['red', 'blue', 'green', 'yellow'];

const gamePattern = [];

const userClickedPattern = [];

$('.btn').on('click', (e) => {
    const userChosenColor = e.currentTarget.id;
    userClickedPattern.push(userChosenColor);
});

function nextSequence() {
    let randomNumber = Math.floor(Math.random() * 4);

    let randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);

    $(`#${randomChosenColor}`).fadeOut(100).fadeIn(100).fadeIn(100);

    const audio = new Audio(`sounds/${randomChosenColor}.mp3`);
    audio.play();
}


