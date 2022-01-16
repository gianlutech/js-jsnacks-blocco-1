/*
L’utente inserisce due parole in successione, con due prompt. Il software stampa prima la parola più corta, poi la parola più lunga.
*/

const firstWord = prompt('Inserisci una parola', 'pippo').trim();
const secondWord = prompt('Inserisci una parola', 'paperino').trim();
let message;
// VALIDAZIONE
if (firstWord.lenght === 0 || secondWord === 0) {
} else {
    // Controllo quale parola è più lunga
    if (firstWord.length > secondWord) {
        message = secondWord + ' ' + firstWord;
    } else if (firstWord.length < secondWord.length) {
        message = firstWord + ' ' + secondWord;
    } else {
        message = 'Le due parole hanno uguale lunghezza';
    }
}

console.log(message);
document.getElementById('display').innerText = message;
