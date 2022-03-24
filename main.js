//funzione mail
function mail(){

    let emailUtente;
    const listaEmail = ["matteo@gmail.com", "fabio@gmail.com", "pietro@gmail.com", "anna@gmail.com"];
    let flag = 0;

    do {
        emailUtente = prompt("Inserisci un'email valida");

        for(let i = 0; i < listaEmail.length; i++) {

            if (listaEmail[i] === emailUtente){
                
                flag = 1;
                break;
            }
        }

        if (flag == 1) {
            alert ("Email accettata.");
        } else {
            alert ("Email NON accettata. Riprova.");
        }

    } while (flag == 0);
}

//Funzione dadi

function casuale(min, max) {
	
    let giocatore = 0;
    let computer = 0;
	
    giocatore = Math.floor(Math.random() * (max - min)) + min;
    computer = Math.floor(Math.random() * (max - min)) + min;
    
    document.getElementById('risultati').innerHTML = "Il tuo numero:" + giocatore + "\nIl numero dell'avversario:" + computer;


	if(giocatore > computer) {
        document.getElementById('Vittoria').innerHTML = " Hai vinto! :D ";
    } else if (giocatore == computer) {
	    document.getElementById('Vittoria').innerHTML = " Pareggio! ";
    } else {
        document.getElementById('Vittoria').innerHTML = " Hai perso! :(";
    }
}