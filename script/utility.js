function hideElementById(elementid) {
    const elementId = document.getElementById(elementid);
    elementId.classList.add('hidden');
}
function showElementById(elementid) {
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

function getElementTextById(elementId) {
    const element = document.getElementById(elementId);
    const text = element.innerText;
    return text;
}

function setBackgroundColorById(elementid) {
    const element = document.getElementById(elementid);
    element.classList.add('bg-blue-600');
}
function removeBackgroundColorById(elementid) {
    const element = document.getElementById(elementid);
    element.classList.remove('bg-blue-600');
}



function getTextElementById(elementid) {
    const element = document.getElementById(elementid);
    const elementTextValue = element.innerText;
    const value = parseInt(elementTextValue);
    return value;

}

function getTextElementValueById(elementId, value) {
    const element = document.getElementById(elementId);
    element.innerText = value;
}

function gameOver() {
    hideElementById('play-ground')
    showElementById('final-score')
    const lastScore = document.getElementById('current-score');
    const finalResult = lastScore.innerText;
    getTextElementValueById('last-score', finalResult);

    const currentAlphabet = getElementTextById('current-alphabet');
    removeBackgroundColorById(currentAlphabet);

}