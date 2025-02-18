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


// ESECUZIONE LOGICA // 



// BIGLIETTO //
const ticket = (0.21 * userKm)
console.log(ticket);

// SCONTO BIGLIETTO // 
const saleTicket = (ticket * 80) / 100;
console.log(saleTicket);








