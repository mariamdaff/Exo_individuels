/*Dans ton fichier script.js, ajoute au tout début du fichier la fonction prompt() 
Cette fonction retourne la valeur saisie dans le formulaire.
Ici nous souhaitons récupérer le prénom pour personnaliser le titre en fonction du prénom saisi.*/

let inputUserName = prompt("Entrez votre prenom !");

 console.log("Bonjour " + inputUserName) ;

 
// Crée une variable message qui stocke "Bonjour !"
let message = "bonjour !";                
console.log(message);  //Affiche le message ds la console

//  Crée une seconde variable firstname avec le prénom "Beyonce"
let firstName = "Beyoncé";               
message = "Bonjour "+ firstName+" ! ";  // Modifie la variable message pour afficher "Bonjour Beyonce !"
console.log(message);      // Affiche de nouveau le message dans la console              
   
// encapsule le code precedent ds une fonction sayHello
 function sayHello()             
{
    let firstName = "Beyoncé";
    let message = "Bonjour "+ firstName+" ! "; 
    console.log(message) ;                         
 
 }   
sayHello("Beyoncé") ;  

//Déplace la variable firstname pour qu’elle devienne un paramètre de la fonction sayHello()
function sayHello(firstName)
{
    let message = "Bonjour "+ firstName + " ! ";
    console.log(message);
}
 sayHello();

 //Corrige l’appel de fonction pour retrouver de nouveau le message Bonjour Beyonce !
 function sayHello(firstName)
 {
    let message = "Bonjour "+ firstName +" ! ";
    console.log(message);
 }
 sayHello("Beyoncé");

 
 /*Ajoute un second paramètre hour à la fonction sayHello()
 Ajoute une condition dans ta fonction pour que lorsque hour est supérieur ou égal à 18H,
  on dise Bonsoir plutôt que Bonjour dans le message*/

  function sayHello(firstName, hour){
   if(hour >= 18){
    let messageAAfficher = "Bonsoir " + firstName + " ! ";
    //console.log("messageAAfficher");
    document.querySelector('h1').innerText = messageAAfficher;
   } else {
    let messageAAfficher = "Bonjour " + firstName + " ! ";
    //console.log("messageAAfficher");
    document.querySelector('h1').innerText = messageAAfficher;
   }
   
  }
  sayHello(inputUserName, 8);

  // Je mets un peu de couleur
  const body = document.querySelector("body");
  body.style.textAlign = "center";
  body.style.animation = "forwards";
  body.style.color ="hotpink"
body.style.background = "linear-gradient(to right, #a1c4fd, #c2e9fb) "

 




