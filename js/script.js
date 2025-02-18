/*
RACCOLTA DATI:

-1)Chiedere all'utente il numero di chilometri che vuole percorrere; (FATTO)
-2)Chiedere all'utente l'età;(FATTO)

// CONSIDERAZIONI: 
- prezzo del biglietto costa 0.21€ al KM (fatto)
- 20% sconto per i <18 (under18)
- 40% sconto per >65 (over65)
- 0% sconto per >18 e <65 (adulti)

*/

// KM DA PERCORRERE // 
const userKmStr = prompt("Quanti chilometri vuoi percorrere?")
const userKm = parseInt(userKmStr)
console.log(userKm);


// ETA' DEL'UTENTE // 
const userAgeStr = prompt("Mi ricordi quanti anni hai?")
const userAge = parseInt(userAgeStr)
console.log(userAge);


// BIGLIETTO //
const baseTicketForKm = 0.21;
const ticket = (0.21 * userKm)
console.log(ticket);

// ESECUZIONE LOGICA //

// USER AGE SCONTO + SCONTO BIGLIETTO // 
let saleTicket = 0; /* QUESTO INCLUDE AUTOMATICAMENTE ELSE */
if (userAge < 18) {
    saleTicket = 20;
}
else if (userAge > 65) {
    saleTicket = 40;
}

/* SI AGGIUNGE Else finale solo nel momento in cui c'è una condizione che non vi è inclusa nelle altre 2 */


// SCONTO BIGLIETTO // 
const finalPrice = baseTicketForKm - (baseTicketForKm * saleTicket / 100)

// MESSAGGIO SCONTO //
const message = `Il prezzo base è €${baseTicketForKm.toFixed(2)}. Visto che il passeggero ha ${userAge} anni, hai il diritto allo sconto ${saleTicket}%. Quindi il prezzo finale è €${finalPrice.toFixed(2)}`













