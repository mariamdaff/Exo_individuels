// Exo "bonjour javaScript"
let message = "Bonjour !";         // declaration d'une variable 
let hour = new Date().getHours(); // recupere l'heure actuelle
 const h1 =document.querySelector('h1')  // recupere le titre h1
 let firstName; 

 function demanderUtilisateur() {         //declaration d'une fonction qui demande à l'utilisateur
    do {                                  // do veut dire fait
        firstName = prompt('Entrez votre prénom :').trim(); // demande à l'utilisateur de rentrer un prenom
    } while (!firstName || !isNaN(firstName)); // tant que  l'entrée est vide ou est un nombre (invalide)
    return firstName;  // sinon retoune le prenom ( valide)
}

function sayHello(firstName, hour){  // fonction qui dit bonjour 
    if(hour >= 18){                  // si l'heure est superieure ou egale à 18
        message = `Bonsoir ${firstName} !`; // dit bonsoir firsname
        h1.innerText = message;
        console.log(message);
        return message;
    }else{                                    // sinnon 
        message = `Bonjour ${firstName} !`;   // dit bonjour
         console.log(message)
        h1.innerText = message; // injecte dynamiquement du texte dans h1
    }
}
firstName = demanderUtilisateur();  //reassignation de la variable firsname
sayHello(firstName, hour);         // appelle de la fonction sayHello
// mettre un peu de syle sur ma page
h1.style.textAlign = 'center';
h1.style.fontSize = '3em';
h1.style.animation = 'fadeIn 5s ease-in-out';
document.querySelector('body').style.background = 'linear-gradient(135deg,rgb(151, 220, 250),rgb(15, 155, 202),rgb(7, 91, 128))';



