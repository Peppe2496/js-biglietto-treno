// Questo è il file che contiene tutto il codice JS della pagina web

// Questo è il file che contiene tutto il codice JS della pagina web

// 1. Chiedere numero di km ed età del passeggero
// 2. Calcorare il prezzo totale del viaggio 
// 3. Il prezzo varia in base ai km (0.21 euro al km)
// 4. Sconto del 20% per minorenni.
// 5. Sconto del 40% per over 65


let kilometersTodo = prompt("Inserisci il numero di chilometri da percorrere");
let userAge = prompt("Inserisci la tua età");


if (isNaN(userAge) || isNaN(kilometersTodo)) {
    alert("I dati inseriti non sono corretti")
}
 else {
    let baseTicketPrice = kilometersTodo * 0.21;

    if(userAge<18) {
        let reducedTicket18 = baseTicketPrice-((baseTicketPrice*20)/100);
        reducedTicket18 = (reducedTicket18.toFixed(2));
        document.getElementById("finalprice").innerHTML=reducedTicket18;
        
    
    } else if (userAge>65){
        let reducedTicket65 = baseTicketPrice-((baseTicketPrice*40)/100);
        reducedTicket65 = (reducedTicket65.toFixed(2));
        document.getElementById("finalprice").innerHTML=reducedTicket65;
        
    } else{
        baseTicketPrice = (baseTicketPrice.toFixed(2));
        document.getElementById("finalprice").innerHTML=baseTicketPrice
    }
 }
 




