document
    .querySelectorAll('.drum')
    .forEach((btn) =>
        btn.addEventListener('click', () => {
            let audio = new Audio('./sounds/tom-1.mp3');
            audio.play();
        })
    );
