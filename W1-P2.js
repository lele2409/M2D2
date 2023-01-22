/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/
/*Essi sono:
1)string: una serie di caratteri racchiusi tra apici singoli (') o doppi ("). Ad esempio:*/

let color = "red" ;
let name = 'Giorgio';

/*
2)number: rappresenta un numero, senza distinzioni tra interi e decimali. Ad esempio:
*/
let intero = 25; //numero intero
let decimale = 15.8; // numero decimale
let divisione = intero / decimale;

/*3) boolean: è un operatore logico e quindi può avere soltanto due valori: true o false. Come se fosse un interruttore "acceso" o "spento".  
*/
let x = 2;
let y = 3;
let z = 3;
console.log(x == y) // restituirà false
console.log(y == z) // restituirà true

/* 4) undefined: sta ad indicare che ad una variabile non è stato ancora assegnato alcun valore. Ad esempio: 
*/
let a; // la variabile "a" al momento è undefined

/* 5) null: indica che la variabile non contiene nulla, azzerando il suo contenuto. Ad esempio:*/
let pieno = 10; // qui la variabile contiene il valore 10
pieno = null; // qui invece viene svuotata del suo contenuto

/* ESERCIZIO 2
 Descrivi cos'è un oggetto in JavaScript, con parole tue.
*/
/*un oggetto è una raccolta di coppie chiave-valore; o gruppi di variabili che descrivono la stessa entità. Possono contenere dati di persone, tipi di auto, ecc. Come: */
let studente = {
    nome : 'andrea',
    cognome : 'rossi',
    anni: 18,
}

let auto = {marca : 'fiat', modello : 'bravo'}

/* ESERCIZIO 3
 Scriti il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

let b = 12;
let c = 20;
let somma = b + c;
console.log(somma);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

let x = 12;

/* ESERCIZIO 5
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

let nome = 'raffaele';
console.log('Ciao mi chiamo' + nome) // stampa il messaggio "Ciao mi chiamo raffaele"

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

let sottrazione = x - 4;

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 Infine, verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
 NON HAI BISOGNO DI UN BLOCCO IF/ELSE. E' sufficiente utilizzare console.log().
*/

let name1 = 'john';
let name2 = 'John';
console.log(name1 == name2) //stampa false
console.log(name1.toLowerCase() == name2.toLowerCase()) // stampa true
