document
    .querySelectorAll('.drum')
    .forEach((btn) =>
        btn.addEventListener('click', function() {
            this.style.color = 'white';
        })
    );

    // let audio = new Audio('./sounds/tom-1.mp3');
    // audio.play();