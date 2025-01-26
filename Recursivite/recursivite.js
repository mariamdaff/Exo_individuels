//Contexte general
import { dossierPrincipal } from './object.js';

function afficherDossiers(dossier) {
    const dossierAAfficher = dossier.nom; 
    console.log('>🗂️ ' + dossierAAfficher); 
}

function afficherDossierIteratif(dossier) {
    afficherDossiers(dossier); 
    const contenuDossier = dossier.contenu; 

    for (let i = 0; i < contenuDossier.length; i++) {
       
        if (contenuDossier[i].contenu && Array.isArray(contenuDossier[i].contenu)) {
            console.log(' 📁 ' + contenuDossier[i].nom); 
        } else {
            console.log(' 📄 ' + contenuDossier[i].nom); 
        }

        if (contenuDossier[i].contenu && Array.isArray(contenuDossier[i].contenu)) {
            const sousDossier = contenuDossier[i].contenu;
        for (let j = 0; j < sousDossier.length; j++) {
               
        if (sousDossier[j].contenu && Array.isArray(sousDossier[j].contenu)) {
                    console.log(' 📁 ' + sousDossier[j].nom); 
        } else {
                    console.log(' 📄 ' + sousDossier[j].nom); 
                }

        if (sousDossier[j].contenu && Array.isArray(sousDossier[j].contenu)) {
                    const sousSousDossier = sousDossier[j].contenu;
         for (let k = 0; k < sousSousDossier.length; k++) {
                        console.log(' 📄 ' + sousSousDossier[k].nom); 
                    }
                }
            }
        }
    }
}
afficherDossierIteratif(dossierPrincipal);


function afficherDossierRecursif(dossier){
    afficherDossiers(dossier)
    if(dossier.contenu && Array.isArray(dossier.contenu) )
        dossier.contenu.forEach(element => {
           afficherDossierRecursif(element) 
        });    
}
afficherDossierRecursif(dossierPrincipal );
 

