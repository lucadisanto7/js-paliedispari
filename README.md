Palidroma
Chiedere all’utente di inserire una parola.
Creare una funzione per capire se la parola inserita è palindroma
Pari e Dispari
L’utente inserisce prima  "pari" o "dispari" poi inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
Numero di push: 10 circa minimo
Errori da evitare
1 - Non effettuare la chiamata di funzione;
2 - Effettuare la chiamata di funzione in un console.log o in un alert ed assegnarlo ad una variabile
3 - Se la funzione ha il return non assegnare la chiamata di funzione ad una variabile
Consigli del giorno
Scriviamo sempre in italiano i passaggi che vogliamo fare
Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.


PALINDROMA

Dichiarare una funzione checkPalindrome
dichiarare una costante word e assegnarne il valore
dichiarare una costante lunghezza = lunghezza parola
dichiarare una variabile isPalindrome = true

creo un ciclo for con un contatore
Se word[i] diverso dalla lunghezza della parola - 1 - i 
    Allora la parola non e' palindroma

dichiaro una costante risultato
Se isPalindrome

allora la parola e' palindroma

altrimenti la parola non e' palindroma



PARI E DISPARI 

Dichiaro una funzione 
dichiaro una costante che verifica il numero scelto dall'utente 
Se il numero non e' ne pari ne dispari
    allora
    inserisci un altro numero
Dichiaro una costante con parseint per far inserire un numero da 1 a 5
Se il numero non e' compreso o uguale tra 1 e 5
    allora
    inserisci un altro numero

Dichiaro una costante per il numero del computer compreso tra 1 e 5
dichiaro una costante somma data dalla somma tra il numero dell utente e del computer
dicchiaro una costante risultato 
    SE il resto della somma = 0
        allora 
        risultato = pari
        altrimenti
        risultato = dispari

dichiaro una costante risultato dell'elemento

Se la scelta dell'utente e' uguale al risultato 
    allora
    vince l'utente
    altrimenti 
    vince il computer
Dichiaro una funzione getRandomNumber
return mathfloor * (max - min + 1) + min