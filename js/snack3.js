/*
Il software deve chiedere per 10 volte all’utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti.
*/

// Inizializzo una variabile per sommare
let sum = 0;

// Chiedo 10 volte all' utente

for (let i = 0; i < 10; i++) {
    const number = parseInt(prompt('Inserisci un numero', '5'));
    sum = sum + number;
}

console.log(sum);