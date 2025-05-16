function now() {
    return performance.now(); 
  }


function add(n1, n2){
    return n1 + n2;
  }  

function add_array(arr, n)  {
    return arr.map(x => x + n);
  };
  console.log(add_array([3, 4, 1, 10], 1));

 
function factorielle(n){
    return (n != 1) ? n * factorielle(n - 1) : 1;  
}
function mesurerExecution(nom, fonction, ...args) {
    let debut = now();
    let resultat = fonction(...args);
    let fin = now();
    console.log(`${nom}(${args}) = ${resultat}`);
    console.log(`Durée : ${(fin - debut).toFixed(4)} ms\n`)
}
  
mesurerExecution("add", add, 5, 10);
mesurerExecution("add_array", add_array, [3, 4, 1, 10], 1);
mesurerExecution("factorielle", factorielle, 5);
  // La comparaison visuelle montre que python est beaucoup plus rapide que javaScript

  