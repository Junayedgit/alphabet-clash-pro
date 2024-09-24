function hideHomeScreen(elementid) {
    const elementId = document.getElementById(elementid);
    elementId.classList.add('hidden');
}
function showPlayGround(elementid) {
    const elementId = document.getElementById(elementid);
    elementId.classList.remove('hidden');
}

function getRandomAlphabet() {
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');
    // console.log(alphabets);

    // get a random index 0-25
    const randomNumber = Math.random() * 25;
    const index = Math.round(randomNumber);
    // console.log(index);

    const alphabet = alphabets[index];
    // console.log(index, alphabet);
    return alphabet;
}