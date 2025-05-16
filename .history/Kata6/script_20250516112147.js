function fizzbuzz(nombre){
    let answer = [];
    for(let i = 1; i < nombre; i++){
        if(i % 3 === 0 && i % 5 === 0){
            answer[i] = "FizzBuzz";
        } else if (i % 3 === 0) {
            answer[i] = "Fizz";    
        } else if (i % 5 === 0) {
            answer[i] = "Buzz";
        } else {
            answer[i] = i
        }
    } return answer;
}

console.lof(fizzbuzz(20));

