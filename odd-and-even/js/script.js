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

    if (userChoice === result) {
        resultElement.innerHTML += "<p>Hai vinto!</p>";
        resultElement.style.color = 'green';
    } else {
        resultElement.innerHTML += "<p>Hai perso!</p>";
        resultElement.style.color = 'red';
    }
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}