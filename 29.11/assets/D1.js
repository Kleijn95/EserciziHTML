/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
 I principali datatype di JavaScript sono stringe, numeri e booleani.
 Il datatype stringhe si scrive tra apici e puo racchiudere sia numeri,che testo, esempio :"Questo e 1 esempio di stringa".
 Il datatype numerico si scrive senza apici, esempio: const numero = 12345
 Il datatype booleano ammette solo due valori che sono true (vero) o false (falso), esempio: const veroOFalso = true
 Ce ne sarebbero altri come undefined o null ma questi sono i principali.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/
let myName = "Antonio";
console.log (myName);

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/
let a = 12;
let b = 20;
let ab = a+b; 
console.log (ab);
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/
let x = 12
console.log (x)
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/
myName = "Kleijn Hesselink"
console.log (myName)

// const myName2 = "Antonio"
// console.log (myName2)

// myName2 = "Kleijn Hesselink"
// console.log (myName2)
// facendo questo in console scrive: Uncaught TypeError: Assignment to constant variable.

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/
let c = 4
let sottrazione = c - x
console.log (sottrazione)
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/
let name1 = "john"
let name2 = "John"

console.log (name1===name2)
console.log (name1!=name2)

name1= name1.toLowerCase()
name2= name2.toLowerCase()

console.log (name1===name2)

/* SCRIVI QUI LA TUA RISPOSTA */
