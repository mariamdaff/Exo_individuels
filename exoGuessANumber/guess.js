
const bouton = document.getElementById('monBouton');
const validerBtn = document.getElementById('valider');
bouton.type = "number";
bouton.min = 0;
bouton.max = 50;
bouton.placeholder = "Joueur 1, proposer en nombre entre 0 et 50";

let secretNumber;
function getSecretNumber() {
    do {
        secretNumber = Number(bouton.value);
        // Vous pouvez également ajouter un message d'erreur ici si nécessaire
    } while (secretNumber < 0 || secretNumber > 50 || isNaN(secretNumber));
    
    console.log("Le nombre secret est : " + secretNumber);  // Affichage du nombre secret

}

// Ajouter un événement sur le bouton "Valider"
validerBtn.addEventListener('click', function() {
    getSecretNumber();  // Appel de la fonction pour récupérer et valider le nombre
});


// Fonction pour valider le nombre donné par l'utilisateur
function enterANumber() {
    let number;
    do {
        number = prompt("Devinez un nombre entre 0 et 50");
        if (number === null){return null}; 
        number = Number(number);
    } while (isNaN(number) || number < 0 || number > 50);

    return number;
}

// Fonction principale pour deviner le nombre
function gamePlay() {
    let guess;

    while (true) {
        guess = enterANumber();

        if (guess === null) {
            alert("Jeu annulé.");
            break;
        }

        if (guess === secretNumber) {
            alert("Bravo ! Vous avez deviné le nombre !");
            break;
        } else if (guess < secretNumber) {
            alert("Trop petit ! Essayez encore.");
        } else {
            alert("Trop grand ! Essayez encore.");
        }
    }
}

// Lancer le jeu
gamePlay();


 