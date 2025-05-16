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



function isValid(str) {

  }
  const str1 = "()"
console.log(isValid(str1));
// retourne `true`
    
const str2 = "()[]{}"
console.log(isValid(str2));
// retourne `true`
    
const str3= "(]"
console.log(isValid(str3));
// retourne `false`
    
const str4 = "([])"
console.log(isValid(str4));
// retourne `true`
  
