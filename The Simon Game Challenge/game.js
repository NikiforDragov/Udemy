const buttonColors = ['red', 'blue', 'green', 'yellow']

const gamePattern = [];


function nextSequence() {
    let randomNumber = Math.floor(Math.random() * 4);

    let randomChosenColor = buttonColors[randomNumber];

    gamePattern.push(randomChosenColor);

    const audio = new Audio(`sounds/${randomChosenColor}.mp3`)

    $(`#${randomChosenColor}`).fadeOut(100).fadeIn(100).fadeIn(100);
    audio.play()

}

