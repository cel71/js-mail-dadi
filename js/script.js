// // Esercizio Email
// // Chiediamo agli utenti la loro email
alert("CONVALIDA LA TUA EMAIL PER EFFETTUARE L'ACCESSO !");
var emailUtenti = prompt("Inserisci la tua Email");
// creiamo la lista
var listaEmail = ["mattia@gmail.com", "miaemail@gmail.com", "sabrina@gmail.com", "stefano@gmail.com", "lara@gmail.com", "francesco@gmail.com" ];
var listaCheck = false;
for (var i = 0; i < listaEmail.length; i++) {
    if (listaEmail[i] === "miaemail@gmail.com") {
        listaCheck = true;
        break;
    }
}

if (listaCheck) {
    alert("EMAIL CONFERMATA");
    document.getElementById("email").innerHTML = "ACCESSO EFFETTUATO";
} else {
    alert("EMAIL SCORRETTA, RIPROVA !");
    document.getElementById("email").innerHTML = "ACCESSO NON EFFETTUATO";
}



// Esercizio Dadi

var numeroUtente = Math.floor(Math.random() * 6);
document.getElementById("utente").innerHTML = numeroUtente + ": Risultato lancio dadi Utente.";
var numeroComputer = Math.floor(Math.random() * 6);
document.getElementById("computer").innerHTML = numeroComputer + ": Risultato lancio dadi Computer.";
if (numeroUtente > numeroComputer) {
    document.getElementById("risultato").innerHTML = "Risultato: Vince l'Utente.";
} else if (numeroUtente < numeroComputer) {
    document.getElementById("risultato").innerHTML = "Risultato: Vince il Computer.";     
} else if (numeroUtente === numeroComputer) {
    document.getElementById("risultato").innerHTML = "Risultato:  Parità.";     
}





