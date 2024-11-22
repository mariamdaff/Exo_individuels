
// Créer une fonction qui demande un nombre à l’utilisateur à l’aide d’un prompteur. (Attention tous les compilateurs en ligne ne permettent pas 
// la prise d’input, prendre celui dans l’énoncé si besoin).
// Stocker sa réponse dans une variable de type adéquat nommée givenNumber.
let givenNumber = parseInt(prompt("Entrez un nombre"),10); // on crée une variable dans laquelle on stocke notre fonction prompt
const secretNumber = 22; // je crée une constante "secretNumber" initialisé à 22
function enterANumber(){ // 

    if(isNaN(givenNumber) || givenNumber ==="" ||givenNumber==="string"){
        console.log("Not a number!");
        return "entrer un nombre"
    }else{
        console.log(givenNumber);
        return givenNumber
    }

}


/*Pour le moment nous allons considérer que le nombre à deviner est 22.

    Écrire une fonction qui prend en paramètre givenNumber et qui se nommera didIWin
        Si le nombre est plus petit que 22, on affichera à l’utilisateur “Plus grand”.
        Si le nombre est plus quand que 22 on affichera à l’utilisateur “Plus petit”.
        Si le nombre est 22 on affichera “Bravo ! Vous avez deviné le nombre”.

    L’ordre dans lequel vous ferez vos conditions est important, le but est d’exécuter le moins de code possible.
     Demandez-vous ce qu’il faut vérifier en premier.
    ⚠️ Attention : le prompt() bloque l’exécution de la page et stoppe l’affichage du rendu. Pour afficher des informations à la suite d’un prompt(),
     utilisez alert().*/

function didIWin(givenNumber){
    
    if( givenNumber !==secretNumber ){
      alert("Deviner un nombre")
      return false;
  
    }else{
        alert("Bravo ! Vous avez deviné le nombre")
        return true;
    }
};


/*Créer une fonction gamePlay qui gérera vos appels de fonctions et la transmission de votre variable d’une fonction à une autre.
 Désormais la fonction didIWin devra retourner true si l’utilisateur a trouvé le chiffre, false sinon.
    Dans la fonction gamePlay, si didIWin a retourné true, on arrete le jeu. En revanche, si elle a retourné false, on redemande un chiffre à l’utilisateur.
*/

function gamePlay(){
   
  //enterANumber();
    while (givenNumber !==secretNumber){
        let givenNumber = parseInt(prompt("Désolé, reessayez !"),10);
        //alert("reesayez");
        enterANumber();
        if(givenNumber === secretNumber){
        alert(" Bravo ! Vous avez gagné. Le jeu est fini ! "); 
        break; 
        }
       
    }    
};
gamePlay();


/*Maintenant on va considérer que l’on a pas un seul joueur mais 2 🧑‍🤝‍🧑.

    Créer une fonction qui demande au joueur 1 de fournir un nombre à deviner compris entre 0 et 50 tant qu’il ne respecte pas ce range.
    La fonction didIWin doit prendre désormais un autre paramètre, le nombre à deviner.
    Reprenez la logique 1, 2 et 3 pour gérer la partie et lui indiquer s’il doit continuer à jouer ou s’il a gagné.*/

    
