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
    const userNumber = parseInt(prompt("Inserisci un numero da 1 a 5:"));
    if (isNaN(userNumber) || userNumber < 1 || userNumber > 5) {
        alert("Numero non valido. Per favore, inserisci un numero da 1 a 5.");
        return;
    }
    const computerNumber = getRandomNumber(1, 5);
    const sum = userNumber + computerNumber;
    const result = (sum % 2 === 0) ? 'pari' : 'dispari';

    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `
        <p>Hai scelto: ${userChoice}</p>
        <p>Il tuo numero: ${userNumber}</p>
        <p>Numero del computer: ${computerNumber}</p>
        <p>Somma: ${sum} (${result})</p>
    `;