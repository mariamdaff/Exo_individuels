function verifieFormatDate(dateString) {           //fx qui verifie le format de la chaine de caractere correspond à "dd/mm/aaaa"
    const regex = /^(\d{2})\/(\d{2})\/(\d{4})$/;   // Expression régulière (regex) pour valider le format de la date 
    return regex.test(dateString);                 //La méthode test() retourne true si `dateString` correspond à la regex, sinon false
};

function verifieSiLaDateValide(dateString) {       // Fx qui vérifie si une date donnée sous forme de chaîne `dateString` est valide
       if (!verifieFormatDate(dateString)) {       // Vérifie d'abord si le format de la date est correct (format "dd/mm/yyyy")
        return false;                              // Si le format est incorrect, retourne  false
    }
    const [jour, mois, annee] = dateString.split("/").map(Number); // convertie la date en jr, mois et année puis  en nbr(.map(Number))
    const date = new Date(annee, mois - 1, jour);                  // Crée un objet `Date` en utilisant les valeurs obtenues
    return (
        date.getFullYear() === annee &&                             // Vérifie que l'année correspond
        date.getMonth() === mois - 1 &&                             // Vérifie que le mois correspond 
        date.getDate() === jour                                     // Vérifie que le jour correspond
    );
    // Si toutes les conditions sont vraies, la date est valide
}

function isPalindrome(dateString) {           // Fx qui vérifie si une date est un palindrome

    if (!verifieSiLaDateValide(dateString)) {  // Si la date n'est pas valide, retourne false
        return false;
    }

    const cleanDate = dateString.replace(/\//g, "");                    // Supprime les /  pr obtenir une chaîne  ("ddmmyyyy")
    const reversedDate = cleanDate.split("").reverse().join("");       // Renverse la chaîne obtenue
    return cleanDate === reversedDate;                               // Comparaison entre les deux. Retourne true si elles sont identiques.
}

function formatDate(date) {                                       // Fonction qui formate un objet `Date` en chaîne au format "dd/mm/yyyy"

    const day = String(date.getDate()).padStart(2, "0");         // Récupère le jour et le formate sur 2 chiffres (ex : "01" pour le 1er)
    const month = String(date.getMonth() + 1).padStart(2, "0");  // Récupère le mois (ajoute +1 car indexé à 0) et le formate sur 2 chiffres
    const year = date.getFullYear();                             // Récupère l'année en entier
    return `${day}/${month}/${year}`;                            // Combine jour, mois et année dans une chaîne formatée
}

function getNextPalindromes(x) {                                // Fonction qui génère les x prochaines dates palindromes à partir d'aujourd'hui

    const palindromes = [];                                     // Tableau pour stocker les dates palindromes trouvées
    let currentDate = new Date();                               // Initialise la date de départ avec la date actuelle

    while (palindromes.length < x) {                            // Continue la boucle jusqu'à trouver x palindromes

        currentDate.setDate(currentDate.getDate() + 1);         // Avance à la date suivante
        const formattedDate = formatDate(currentDate);          // Formate la nouvelle date au format "dd/mm/yyyy"

        if (isPalindrome(formattedDate)) {                     // Vérifie si la date est un palindrome
            palindromes.push(formattedDate);                   // Si oui, ajoute la date au tableau `palindromes`
        }
    }

    return palindromes;                                       // Retourne le tableau contenant les x dates palindromes trouvées
}

// Test
console.log(getNextPalindromes(10));                          // Appelle la fonction pour trouver les  prochaines dates palindromes
const dateliste= document.getElementById('date-liste')        // recupere l'element html ayant l'id 'date-liste'
const prochainDatePalindrome = (getNextPalindromes(10));      // variable qui stocke l'appelle de la fx
prochainDatePalindrome.forEach(dat =>{                        // parcourt ce tableau et pour chaque element,
const listeDate = document.createElement('li');               //'crée un emplacement li'
listeDate.textContent=dat;                          //cet emplacement 'li'qu'on a créé ci dessus contiendra l'element 'dat'du tableau qu'on parcourt
dateliste.appendChild(listeDate);                  // on  ajoute un enfant 'listeDate' a notre dateListe
});

