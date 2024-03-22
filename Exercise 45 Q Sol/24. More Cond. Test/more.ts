//Exercise 24

let string1: string = 'Rose';
let string2: string = 'Tulip';

console.log("Are strings equal? I predict False.");
console.log(string1 === string2);

console.log("Are strings not equal? I predict True.");
console.log(string1 !== string2);

let upperCaseString: string = 'QUAID-E-AZAM';

console.log("Is the string in lowercase? I predict False.");
console.log(upperCaseString.toLowerCase() === upperCaseString);

let num1: number = 100;
let num2: number = 50;

console.log("Are numbers equal? I predict False.");
console.log(num1 === num2);

console.log("Is num1 greater than num2? I predict True.");
console.log(num1 > num2);

console.log("Is num1 less than or equal to num2? I predict False.");
console.log(num1 <= num2);

let boolean1: boolean = true;
let boolean2: boolean = false;

console.log("Are both booleans true? I predict False.");
console.log(boolean1 && boolean2);

console.log("Is at least one boolean true? I predict True.");
console.log(boolean1 || boolean2);

let fruits: string[] = ['Mango', 'Pine Apple', 'Cheeko'];

console.log("Is 'Mango' in the array? I predict True.");
console.log(fruits.includes('Mango'));

console.log("Is 'grape' not in the array? I predict True.");
console.log(!fruits.includes('grape'));
