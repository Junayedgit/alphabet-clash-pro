// system -1
// function play() {
//     const homeSection = document.getElementById('home-section')
//     homeSection.classList.add('hidden');

//     const playGroundSection = document.getElementById('play-ground')
//     playGroundSection.classList.remove('hidden')
// }




function continueGame() {
    const alphabet = getRandomAlphabet();
    console.log(alphabet);

    const currentAlphabet = document.getElementById('current-alphabet');
    currentAlphabet.innerText = alphabet;
}
// system -2
function play() {
    hideHomeScreen('home-section')
    showPlayGround('play-ground')
    continueGame();
}