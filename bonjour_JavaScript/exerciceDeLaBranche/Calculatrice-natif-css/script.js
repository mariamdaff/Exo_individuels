const resultat = document.querySelector('.grid-item1')
document.querySelectorAll('.grid-item').forEach(bouton => {
    bouton.addEventListener('click', () => {
       if(bouton.innerHTML ==="="){
        resultat.innerHTML = effectuerUnCalcul()
       }else{
        resultat.innerHTML += bouton.innerHTML
       }
    });
});
const toNumber = (membre)=>{
        return Number(membre)
      }

function effectuerUnCalcul(){
    const calcul = resultat.innerHTML
    console.log("effectuerUnCalcul")

    let resultatDuCalculPrecedent= 0
    
    const membres = calcul.split('+')
        .map(toNumber)
        .forEach((membre)=>{
            resultatDuCalculPrecedent = membre + resultatDuCalculPrecedent
        })

    return resultatDuCalculPrecedent
    
}
