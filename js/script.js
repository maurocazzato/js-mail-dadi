// Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.

// creo il bottone
const bottonvai = document.getElementById("clickmail");

// email
const emailArray = ("mauro@example.it","andrea@example.it","mario@example.it");

bottonvai.addEventListener("click", function(){

let trovato = false;

const emailUser = document.getElementById("email").value;

// controllo se email presente

for( let i = 0; i < emailArray.length; i++){

    // I-ESIMO ELEMENTO DI array
    const email = emailArray[i];
    console.log(email);

    // confronto con elemento inserito

    if (email.toLowerCase() === emailUser.toLowerCase()){
        trovato = true;
    }
}

    if(trovato == true) {
        confirm("accesso eseguito");
    } else{
        confirm("accesso negato. ritenta");
    }
})
