// Etape 1, 2 et 3
let message = "Bonjour !";         // declaration d'une variable 
let hour = new Date().getHours();
 const h1 =document.querySelector('h1')
 let firstName; //= prompt('Entrez votre prénom :');

 function demanderUtilisateur() {
    let firstName;
    do {
        firstName = prompt('Entrez votre prénom :').trim();
    } while (!firstName || !isNaN(firstName)); // Vérifie si l'entrée est vide ou un nombre
    return firstName;
}



function sayHello(firstName, hour){
    if(hour >= 18){
        message = `Bonsoir ${firstName} !`; //réassignation de la variable message
        h1.innerText = message;
        console.log(message);
        return message;
    }else{
        message = `Bonjour ${firstName} !`;
         console.log(message)
        h1.innerText = message;
    }
}
firstName = demanderUtilisateur();
sayHello(firstName, hour);
h1.style.textAlign = 'center';
h1.style.fontSize = '3em';
h1.style.animation = 'fadeIn 5s ease-in-out';

document.querySelector('body').style.background = 'linear-gradient(135deg,rgb(151, 220, 250),rgb(15, 155, 202),rgb(7, 91, 128))';



