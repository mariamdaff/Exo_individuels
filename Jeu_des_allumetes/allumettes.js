document.addEventListener("DOMContentLoaded", () => {
    // Ton code ici

    document.addEventListener("DOMContentLoaded", () => {
        // Déclaration des variables
        let nombreTotalAllumettes = 50; // Nombre total d'allumettes
        let allumettesRestant = nombreTotalAllumettes; // Allumettes restantes
        const joueurs = ["Mariam", "Binta", "Ibrahim"]; // Liste des joueurs
        let positionJoueurActuel = 0; // Index du joueur actuel
    
        // Fonction pour calculer les allumettes restantes
        function nombreAllumettesQuiReste(nombreTotalAllumettes, nombreAllumettesAEnlever) {
            return nombreTotalAllumettes - nombreAllumettesAEnlever; // Retourne le nombre d'allumettes restant
        }
    
        // Récupération des éléments HTML
        const input = document.querySelector("#input");
        const bouton = document.querySelector("#bouton");
        const resultat = document.querySelector("#resultat");
        const joueurActuelAffichage = document.querySelector("#joueur-actuel");
    
        // Vérifie si l'élément #joueur-actuel existe
        if (!joueurActuelAffichage) {
            console.error("L'élément #joueur-actuel est introuvable dans le DOM.");
            return; // Arrête le code si l'élément est manquant
        }
    
        // Affiche le joueur actuel au début
        joueurActuelAffichage.innerText = `${joueurs[positionJoueurActuel]}, c'est votre tour.`;
    
        // Gestionnaire d'événement pour le bouton
        bouton.addEventListener("click", () => {
            let demanderUnNombre = parseInt(input.value); // Récupère et convertit la valeur saisie
    
            // Vérifie si l'entrée est valide (entre 1 et 6)
            if (!isNaN(demanderUnNombre) && demanderUnNombre >= 1 && demanderUnNombre <= 6) {
                // Met à jour les allumettes restantes
                allumettesRestant = nombreAllumettesQuiReste(allumettesRestant, demanderUnNombre);
                console.log("Il reste " + allumettesRestant + " allumettes.");
    
                // Vérifie si la partie est terminée
                if (allumettesRestant <= 0) {
                    let gagnant = positionJoueurActuel === 0 ? joueurs[joueurs.length - 1] : joueurs[positionJoueurActuel - 1];
                    console.log(`Bravo ${gagnant}, vous avez gagné.`);
                    resultat.innerHTML = `<p>Bravo ${gagnant}, vous avez gagné.</p>`;
                    bouton.disabled = true; // Désactive le bouton
                    return;
                }
    
                // Passe au joueur suivant
                positionJoueurActuel++;
                if (positionJoueurActuel === joueurs.length) {
                    positionJoueurActuel = 0;
                }
    
                // Mise à jour de l'affichage du joueur actuel
                joueurActuelAffichage.innerText = `${joueurs[positionJoueurActuel]}, c'est votre tour.`;
    
                // Réinitialise le champ input
                input.value = "";
            } else {
                alert("Erreur, entrez un nombre entre 1 et 6!"); // Message d'erreur en cas de saisie invalide
            }
        });
    });
    

});