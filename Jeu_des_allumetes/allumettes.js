//Faire une fonction qui prend en paramètre le nombre d'allumettes à enlever du reste.

let nombreTotalAllumettes = 50; //je déclare une variable qui contient le nbre total d'allumettes
let allumettesRestant = nombreTotalAllumettes; // declaration d'une variable qui stocke les allumettes restantes
let demanderUnNombre;
let joueurs = ["Mariam","Binta", "Ibrahim", "Ousmane","Rougui"];
let positionJoueurActuel = 0 ;
function nombreAllumettesQuiReste(nombreTotalAllumettes, nombreAllumettesAEnlever) {
    return nombreTotalAllumettes - nombreAllumettesAEnlever; // retourne le nombre d'allumettes restant
};

   const multiJoueurs =parseInt(prompt("combien il y a de joueur?"))
    while(isNaN(multiJoueurs)){
    if(multiJoueurs < 0 ||multiJoueurs>5){
        alert("Erreur! Choisissez entre 1 et 5");
  }if(multiJoueurs>0 && multiJoueurs<=5){

  }
  break;

} 

while (allumettesRestant > 0) {    // Boucle tant qu'il reste des allumettes
     demanderUnNombre = parseInt(prompt(`${joueurs[positionJoueurActuel]}, Combien d'allumettes veux-tu retirer ? (entre 1 et 6)"`));
    if (!isNaN(demanderUnNombre) && demanderUnNombre>= 1 && demanderUnNombre <= 6) { // condition qui vérifie si le nombre est entre 1 et 6
        allumettesRestant = nombreAllumettesQuiReste(allumettesRestant, demanderUnNombre); // Mets à jour le nombre d'allumettes restantes
        positionJoueurActuel++;
        if(positionJoueurActuel=== joueurs.length){
            positionJoueurActuel=0
        }
        console.log("Il reste " + allumettesRestant + " allumettes.");
       if (allumettesRestant <= 0) { // Si le nombre d'allumettes est à 0 ou moins
        console.log(`Bravo ${joueurs[positionJoueurActuel]} vous avez gagné.`);
            document.body.innerHTML += `<p>Bravo ${joueurs[positionJoueurActuel]} vous avez gagné.</p>` ;
            break; // Sort de la boucle
        }
    } else {
        alert("Erreur, ntrez un nombre entre 1 et 6!"); // Message d'erreur si le nombre n'est pas entre 1 et 6
    }
   
};

//Rajouter un 2eme joueur à votre jeu(fait)
//Proposer un mode multi-joueur. Demander à l’utilisateur, combien il y a de joueur et gérer la partie en conséquence.
