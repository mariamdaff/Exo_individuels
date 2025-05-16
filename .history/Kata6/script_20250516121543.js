function fizzbuzz(nombre) {
    let answer = [];
    for (let i = 1; i <= nombre; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            answer.push("FizzBuzz");
        } else if (i % 3 === 0) {
            answer.push("Fizz");
        } else if (i % 5 === 0) {
            answer.push("Buzz");
        } else {
            answer.push(`${i}`);
        }
    }
    return answer;
}

console.log(fizzbuzz(3));
console.log(fizzbuzz(5));
console.log(fizzbuzz(15));

function twoSum(nombre, target){
    for(let i = 0; i < nombre; i++){
        for(let j = 1; j < nombre ; i++){
            if(nombre[i]+nombre[j]===target){
                console.log(`[${i},${j}] `)
            }
        } 
    }

}

// Exemple 1
const numbers1 = [2, 7, 11, 15];
const target1 = 9;

twoSum(numbers1, target1);
// retourne [0, 1]
// Explication : 2 (à l’indice 0) + 7 (à l’indice 1) = 9


// Exemple 2
const numbers2 = [3, 2, 4]
const target2 = 6
twoSum(numbers2, target2);
// retourne [1, 2]


// Exemple 3
const numbers3 = [3, 3]
const target3 = 6
twoSum(numbers3, target3);
// retourne [0, 1]

