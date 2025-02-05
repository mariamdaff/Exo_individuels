const supprimer =document.querySelector('.grid-supp')
const resultat = document.querySelector('.grid-result')
document.querySelectorAll('.grid-item').forEach(bouton => {
    bouton.addEventListener('click', () => {
        if(bouton.innerHTML ==="suppr"){
            resultat.innerHTML = ' '
        }
        else if(bouton.innerHTML ==="="){
        resultat.innerHTML = effectuerMultiplication()
       }else{
        resultat.innerHTML += bouton.innerHTML
       }
    });
});


const toNumber = (membre)=>{
        return Number(membre)
      }

function effectuerMultiplication(){
    const calcul = resultat.innerHTML// calcul = 5+3*4
    let resultatDuCalculPrecedent = 1
    const membres = calcul.split("*") // 5+3,4
        .forEach((membre)=>{
            const resultatAddition =  effectuerAddition(membre)

            resultatDuCalculPrecedent = resultatDuCalculPrecedent * resultatAddition
        
        })

    return resultatDuCalculPrecedent
    
}

 
function effectuerAddition(calcul) {
    let resultatDuCalculPrecedent =0

    const membres = calcul.split("+")
        .map(toNumber)
        .forEach((membre)=>{
            resultatDuCalculPrecedent = membre + resultatDuCalculPrecedent


        })

    return resultatDuCalculPrecedent
    
}

 
