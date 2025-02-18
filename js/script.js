/*
RACCOLTA DATI:

-1)Chiedere all'utente il numero di chilometri che vuole percorrere; (FATTO)
-2)Chiedere all'utente l'età;(FATTO)

// CONSIDERAZIONI: 
- prezzo del biglietto costa 0.21€ al KM (fatto)
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
const saleTicketUnder18Str = (ticket * 80) / 100;
const saleTicketUnder18 = parseInt (saleTicketUnder18Str);
console.log(saleTicketUnder18);

const saleTicketOver65Str = (ticket * 60) / 100
const saleTicketOver65 = parseint (saleTicketOver65Str);
console.log(saleTicketOver65);

const saleTicketAdultStr = 0;
const saleTicketAdult = parseint (saleTicketAdultStr);
console.log(saleTicketAdult);


// USER AGE SCONTO + SCONTO BIGLIETTO // 
if (userAge < 18){
    message: "Hai diritto al 20% di sconto";
    console.log(saleTicketUnder18);
}
else if (userAge > 65){
    message: "Hai diritto al 40% di sconto";
    console.log(saleTicketOver65);
}

else if (userAge >= 18 <= 65){
    console.log(saleTicketAdult);
}










