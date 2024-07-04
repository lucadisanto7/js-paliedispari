// PALINDROMA

function checkPalindrome() {
    const word = document.getElementById('wordInput').value;
    const len = word.length;
    let isPalindrome = true;

    for (let i = 0; i < len / 2; i++) {
        if (word[i] !== word[len - 1 - i]) {
            isPalindrome = false;
        }
    }

    const resultElement = document.getElementById('result');
    if (isPalindrome) {
        resultElement.textContent = `"${word}" è una parola palindroma.`;
        resultElement.style.color = 'green';
    } else {
        resultElement.textContent = `"${word}" non è una parola palindroma.`;
        resultElement.style.color = 'red';
    }
}



// PARI E DISPARI

function playGame() {
    const userChoice = prompt("Scegli 'pari' o 'dispari':").toLowerCase();
    if (userChoice !== 'pari' && userChoice !== 'dispari') {
        alert("Scelta non valida. Per favore, scegli 'pari' o 'dispari'.");
        return;
    }
