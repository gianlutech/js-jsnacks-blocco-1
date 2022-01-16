/*
L’utente inserisce due parole in successione, con due prompt. Il software stampa prima la parola più corta, poi la parola più lunga.
*/

const longName = prompt('Inserisci una parola', 'pippo');
const shortName = prompt('Inserisci un altra parola', 'cavalletta');

console.log(longName);
console.log(shortName);

let message = 'la parola più lunga è ';
if (longName > shortName) {
    message += longName;
} else if (longName < shortName) {
    message += shortName
} else {
    message = 'Le parole sono uguali';
}

console.log(message);
