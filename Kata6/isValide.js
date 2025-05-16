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