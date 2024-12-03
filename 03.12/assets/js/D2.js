/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/
let numero1 = 10    // definisco la prima variabile numero
let numero2 = 20   // definisco la seconda variabile numero
if (numero1 > numero2) {
  console.log("Il numero più grande è: " + numero1); // uso una struttura condizionale per eseguire un codice solo se una condizione e vera.
} else if (numero2 > numero1) {
  console.log("Il numero più grande è: " + numero2); // else if e else sono condizioni alternative se la prima condizione if fosse falsa.
} else {
  console.log("I due numeri sono uguali.");
}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/
let numero3 = 9               // definisco una variabile numero
if (numero3 !== 5) {          // uso una struttura condizionale dove uso la variabile numero e dico che e diverso da 5
  console.log ("not equal")   // se la condizione e vera in console uscira not equal
}
  else {
    console.log ("equal")
  }


/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/
let numero4 = 20          // definisco una variabile numero
if (numero4 % 5 === 0) {  // uso una struttura if usando all'interno l'operatore di modulo per vedere se il numero e perfettamente divisibile
  console.log ("divisibile per 5")   // se l'affermazione dovesse essere vera in console uscira "divisibile per 5"
}
else {                               // uso la struttura else per far uscire in console "non divisibile per 5" nel caso la prima affermazione fosse falsa.
  console.log ("non divibisile per 5")
}
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/
let numero5 = 14       // definisco un numero
let numero6 = 6       // definisco un numero

if (numero5 == 8 || numero6 == 8) {               // uso struttura if per definire la condizione se uno dei due numeri sia uguali a 8
  console.log (true)
}
else if (numero5+numero6 == 8 || numero5-numero6 == 8) {  // uso struttira if per definire la condizione se la somma/sottrazione dei due numeri sia uguale a 8.
  console.log (true)
}
else {                                                      // uso struttura else per definire la condizione nel caso i primi due IF siano errati
  console.log (false)
}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

let totalShoppingCart = 60                            
let spedizione = 0                                        
let scontoBlackFriday = totalShoppingCart *0.20
let prezzoScontato = totalShoppingCart - scontoBlackFriday
console.log (prezzoScontato)
if (prezzoScontato > 50) {                         
  spedizione = 0                                      
}
else {
  (prezzoScontato < 50)
  spedizione = 10
}
let spesatotale = prezzoScontato + spedizione 
console.log ("Prezzo Da Pagare = " + spesatotale)
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/







/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

let a = 5
let b = 7
let c = 6


const arrayNumeri = [a,b,c]
console.log (arrayNumeri)

arrayNumeri.sort()
console.log (arrayNumeri)





/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/
let valore = 44                         // definisco variabile inserendo un numero

if (typeof valore === "number") {           // uso struttura condizionale inserendo typeof uguale a numero
  console.log ("Il valore fornito e un numero")
}
else {                        // uso else nel caso non fosse un numero
  console.log ("Il valore fornito non e un numero")
}
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/
let x = 10
let y = 15

if (x % 2 === 0) {
  console.log ("Il numero e pari")
}
else {
 console.log ("Il numero e dispari")
}

if (y % 2 === 0) {
  console.log ("Il numero e pari")
}
else {
 console.log ("Il numero e dispari")
}


/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.*/

  let val = 4                                                 // l'errore era nel mettere minore di 10 prima di minore di 5 nella struttura condizionale, dando la prima per vera (minore di 10)
  if (val < 5) {                                              //  la seconda (minore di 5) nonostante sia vera non verra mai presa in considerazione
      console.log("Meno di 5");
    } else if (val < 10) {
      console.log("Meno di 10");
    } else {
      console.log("Uguale a 10 o maggiore");
    }






/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {                                                
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

me.City = "Toronto"                             //me per selezionare l'array e poi .valore per aggiungere una proprieta a quelle esistenti
console.log(me)
delete me.lastName                             // delete seguito da selezione array.PROPRIETA che si vuole cancellare
console.log(me)
me.skills.pop()                               // selezionare l'erray e poi cosa si vuol eliminare seguito da .pop (eliminera solo l'ultimo ELEMENTO della proprieta selezionata)
console.log(me)

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/




/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

const numeri = [1,2,3,4,5,6,7,8,9,10]                             // un array si crea con let o const valore = []
console.log (numeri)


/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

numeri.splice (9,1, 100)                      // per sostituire un numero in un determinato posto si usa la funziona .splice (POSTO DI PARTENZA, QUANTI ELEMENTI, CON COSA)
console.log (numeri)


/* SCRIVI QUI LA TUA RISPOSTA */
