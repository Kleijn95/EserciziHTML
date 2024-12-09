/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

function area(l1, l2) {
    return (l1 * l2)
}

console.log("L'area del rettangolo sara: " + area(5, 7))


/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

function crazySum(x, y) {                                       // posso anche dare dei valori all'interno facendo tipo x=1 e y=1
    if (x !== y) {
        return x + y
    }
    else {
        return (x + y) * 3
    }

}


console.log(crazySum(1, 1))

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

function crazyDiff(z = 17, g = 19) {
    if (z > g) {
        return (z - g) * 3;
    }
    else if (z < g) { return Math.abs(z - g); }
    else { return (z - g) }
}

console.log(crazyDiff())


/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

function boundary(n) {
    if (20 < n && n <= 100 || n == 400) { return (true) }
    else {
        return (false)
    }
}

console.log(boundary(1))
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

function epify(str) {
    if (str.startsWith("EPICODE")) {
        return (str)
    }
    else {
        return ("EPICODE" + " " + str)
    }

}

console.log(epify("ciao belli"))
console.log(epify("EPICODE e na bomba"))

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

// function check3and7(num) {
//     if (num % 3 === 0 || num % 7 === 0)
//         return ("Il numero e divisibile per 3 o per 7")
//     else return ("Il numero non e disivibile per 3 o per 7")

// }

function check3and7(num) {
    if (num <= 0) { return ("INSERISCI NUMERO POSITIVO") }

    if (num % 3 === 0 && num % 7 === 0) { return ("Il numero e divisibile sia per 3 che per 7") }
    else if (num % 3 === 0) {
        return ("Il numero e divisibile per 3")
    }
    else if (num % 7 === 0) { return ("Il numero e disivibile per 7") }
    else { return "Il numero non e divisibile ne per 3 ne per 7" }
}

console.log(check3and7(-5))
console.log(check3and7(6))
console.log(check3and7(14))
console.log(check3and7(21))
console.log(check3and7(10))

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/
function reverseString(testo) {
    return testo.split('').reverse().join('');
}

console.log(reverseString("EPICODE"))


/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

// function upperFirst(str) {
//     return str.replace(/\b\w/g, char => char.toUpperCase());
// }
// console.log(upperFirst("Ciao mi chiamo Antonio"))

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

function cutString(str) {
    return str.slice(1, -1)

}

console.log(cutString("Ciao a tutti, mi chiamo Antonio"))

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/
// function giveMeRandom(n) {
//     let arrayNumeri = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]              // cosi ho creato un array con numeri non casuali 
//     return arrayNumeri
// }

// console.log(giveMeRandom(12))


function giveMeRandom(n) {
    let arrayNumeri = []
    for (let i=0; i<n; i++) {
        let numeri = Math.floor(Math.random()*11);
        arrayNumeri.push(numeri);
    }
    return arrayNumeri
}

console.log(giveMeRandom(12))
console.log(giveMeRandom(7))
console.log(giveMeRandom(6))

/* SCRIVI QUI LA TUA RISPOSTA */
