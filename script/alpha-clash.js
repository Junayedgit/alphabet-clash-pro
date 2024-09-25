// system -1
// function play() {
//     const homeSection = document.getElementById('home-section')
//     homeSection.classList.add('hidden');

//     const playGroundSection = document.getElementById('play-ground')
//     playGroundSection.classList.remove('hidden')
// }


document.addEventListener('keyup', handleKeyBoardPress)

function continueGame() {
    const alphabet = getRandomAlphabet();
    console.log(alphabet);
    const currentAlphabet = document.getElementById('current-alphabet');
    currentAlphabet.innerText = alphabet;
    setBackgroundColorById(alphabet);
}
// system -2
function play() {
    hideElementById('home-section')
    hideElementById('final-score')
    showElementById('play-ground')

    getTextElementValueById('current-life', 5);
    getTextElementValueById('current-score', 0);
    continueGame();
}
function handleKeyBoardPress(event) {
    const playerPressed = event.key;
    // console.log(playerPressed);

    // If player pressed ESC then game-over
    if (playerPressed === 'Escape') {
        gameOver();
    }

    const CurrentalphabetElement = document.getElementById('current-alphabet')
    const currentAlphabet = CurrentalphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLocaleLowerCase();
    // console.log(expectedAlphabet, playerPressed);

    // condition
    if (playerPressed === expectedAlphabet) {
        const currentScoreElement = getTextElementById('current-score');
        const updatedScore = currentScoreElement + 1;
        getTextElementValueById('current-score', updatedScore);


        // -----------------------------------------------------------------------------
        // Another system
        // console.log('you get a point');
        // const currentScoreElement = getTextElementById('current-score');
        // const currentScoreText = currentScoreElement.innerText;
        // const currentScore = parseInt(currentScoreText);
        // const newScore = currentScoreElement + 1;
        // currentScoreElement.innerText = newScore;

        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    }
    else {
        const currentLife = getTextElementById('current-life');
        const updatedLife = currentLife - 1;
        getTextElementValueById('current-life', updatedLife);

        // ---------------------------------------------
        // console.log('you lose');
        // const currentLifeElement = document.getElementById('current-life');
        // const currentLifeText = currentLifeElement.innerText;
        // const currentLife = parseInt(currentLifeText);
        // const newLife = currentLife - 1;
        // currentLifeElement.innerText = newLife;

        if (updatedLife === 0) {
            gameOver();
        }
    }
}
