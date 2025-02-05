const supprimer =document.querySelector('.grid-supp')
const resultat = document.querySelector('.grid-result')
document.querySelectorAll('.grid-item').forEach(bouton => {
    bouton.addEventListener('click', () => {
        if(bouton.innerHTML ==="suppr"){
            resultat.innerHTML = ''
        }
        else if(bouton.innerHTML ==="="){
        resultat.innerHTML = effectuerAddition(resultat.innerHTML)
       }else{
        resultat.innerHTML += bouton.innerHTML
       }
    });
});


const toNumber = (membre)=>{
        return Number(membre)
      }

function effectuerMultiplication(calcul){
    let resultatDuCalculPrecedent = 1
    const membres = calcul.split("*") // 5+3,4
        .forEach((membre)=>{
          
         resultatDuCalculPrecedent = membre* resultatDuCalculPrecedent 
         
        })

    return resultatDuCalculPrecedent
    
}

 
function effectuerAddition(calcul) {
    let resultatDuCalculPrecedent =0

    const membres = calcul.split("+")
    
        .forEach((membre)=>{

             const resultatMultiplication = effectuerMultiplication(membre)

            resultatDuCalculPrecedent = resultatMultiplication + resultatDuCalculPrecedent


        })

    return resultatDuCalculPrecedent
    
}

 function effectuerSoustraction(calcul) {

 }
