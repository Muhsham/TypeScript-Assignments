//Exercise 24
var string1 = 'Rose';
var string2 = 'Tulip';
console.log("Are strings equal? I predict False.");
console.log(string1 === string2);
console.log("Are strings not equal? I predict True.");
console.log(string1 !== string2);
var upperCaseString = 'QUAID-E-AZAM';
console.log("Is the string in lowercase? I predict False.");
console.log(upperCaseString.toLowerCase() === upperCaseString);
var num1 = 100;
var num2 = 50;
console.log("Are numbers equal? I predict False.");
console.log(num1 === num2);
console.log("Is num1 greater than num2? I predict True.");
console.log(num1 > num2);
console.log("Is num1 less than or equal to num2? I predict False.");
console.log(num1 <= num2);
var boolean1 = true;
var boolean2 = false;
console.log("Are both booleans true? I predict False.");
console.log(boolean1 && boolean2);
console.log("Is at least one boolean true? I predict True.");
console.log(boolean1 || boolean2);
var fruits = ['Mango', 'Pine Apple', 'Cheeko'];
console.log("Is 'Mango' in the array? I predict True.");
console.log(fruits.includes('Mango'));
console.log("Is 'grape' not in the array? I predict True.");
console.log(!fruits.includes('grape'));
