/*
RACCOLTA DATI:

-1)Chiedere all'utente il numero di chilometri che vuole percorrere; (FATTO)
-2)Chiedere all'utente l'età;(FATTO)

// CONSIDERAZIONI: 
- prezzo del biglietto costa 0.21€ al KM
- 20% sconto per i <18 (minorenni)
- 40% per >65 (over65)

- (calcolo: ticket x userKm / 100)


*/

// KM DA PERCORRERE // 
const userKmStr = prompt("Quanti chilometri vuoi percorrere?")
const userKm = parseInt(userKmStr)
console.log(userKm);

// ETA' DEL'UTENTE // 
const userAgeStr = prompt("Mi ricordi quanti anni hai?")
const userAge = parseInt(userAgeStr)
console.log(userAge);

// MINORENNE / OVER65 // 

const  userMinorenneStr = prompt (userAge < 18)
const userMinorenne = parseInt (userMinorenneStr)

console.log(userMinorenne);

const  userMaggiorenneStr = prompt (userAge > 18)
const userMaggiorenne = parseInt (userMaggiorenneStr)
console.log(userMaggiorenne);

const  userUnder65Str = prompt (userAge < 65)
const userUnder65 = parseInt (userUnder65Str)
console.log(userUnder65);

const userOver65Str = prompt (userAge > 65)
const userOver65 = parseInt (userOver65Str)
console.log (userOver65);



// ESECUZIONE LOGICA // 

// BIGLIETTO //
const ticket = (0.21 * userKm)
console.log(ticket);

// SCONTO BIGLIETTO // 
const saleTicket = (ticket * 80) / 100;
console.log(saleTicket);

// MINORENNE / OVER65 // 

if (userMinorenne) {
    message: "Hai diritto al 20% di sconto";
   }
else if (userMaggiorenne, userUnder65) {
    message: "Non hai diritto a nessuno sconto";
}
else (userOver65) {
    message "Hai diritto al 40% di sconto";
}

console.log(userMinorenne, userMaggiorenne, userUnder65, userOver65);






