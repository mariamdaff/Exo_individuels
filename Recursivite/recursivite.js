//Contexte general
import {dossierPrincipal} from './object.js';

//Contexte afficherDossiers
function afficherDossiers(dossierAAfficher) {
  //  let resultat = dossierAAfficher.nom;
   console.log('> 🗂️'+dossierAAfficher.nom);
  // return resultat
}

//Contexte afficherDossierIteratif
function afficherDossierIteratif(dossierIteratif) {
    afficherDossiers(dossierIteratif);
    for(let i = 0; i < dossierIteratif.contenu.length; i++){
        console.log( dossierIteratif.contenu[i].nom);
       const dossier = dossierIteratif.contenu[i] ;
       
       console.log(dossier.nom) ;
       console.log(dossier.contenu) ;
    }
}
 //Contexte general
 afficherDossierIteratif(dossierPrincipal)

function afficherDossierRecursif(dossierRecursif) {
    afficherDossiers(dossierRecursif);
    if (dossierRecursif.contenu ) {
        for (let i = 0; i < dossierRecursif.contenu.length; i++) {
            const element = dossierRecursif.contenu[i];
            console.log(element.nom);

            // if (element.type === "dossier") {
            //     afficherDossierRecursif(element);
            // }
        }
    }
}
afficherDossierRecursif(dossierPrincipal) 



// const dossierSimplifier = {
//     nom: 'Ada',
//     contenu: {
//         nom: 'Projets collectifs Ada'}}

// //afficherDossierRecursifSimplifier(dossierSimplifier)

// //Ada
// //Projets collectifs Ada
// //Recursif
// //1 seul console.log
// function afficherDossierRecursifSimplifier(dossierSimplifier){
//   const dossier = dossierSimplifier.nom
//   console.log(dossier)
  
//     for(let i = 0; i < dossier.contenu; i++ ){
//         if (dossier.contenu)
//          afficherDossierRecursifSimplifier(dossier)
//     }
// }
// afficherDossierRecursifSimplifier(dossierSimplifier)

