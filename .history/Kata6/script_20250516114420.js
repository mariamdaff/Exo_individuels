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

