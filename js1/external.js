console.log("Hello World");
// console.log() is a function to display the text
// in the browser's console.

// Outputting text in console

// 1. Concatenation of strings
let firstName = "Ayush";
console.log(firstName + " AccioJob");

// 2. Template Literals
let population = 8.5;
let city = "Delhi";
console.log(`${city} has a population of ${population} crores. - ${firstName}`);

// 3. Mathematical Calculations
let radius = 5;
let perimeter = 2 * Math.PI * radius;
console.log(2 * Math.PI * radius);

//4. Boolean expressions
let num1 = 20;
let num2 = 10;

console.log(num1 > num2);

// DATA TYPES
// 1. String
let lastName = "Ayush Bansal";
console.log(typeof lastName);

// 2. Number
let age = 25.23456789;
console.log(typeof age, age);

// 3. Boolean
let isStudent = true;
console.log(typeof isStudent);

// 4. Null
let address = null;
// This address variable stores a null value,
// indicating the absence of a value. (imp)
// It is commonly used to represent an intentionally empty
// non existent value;

// 5. Undefined
let phoneNumber;
console.log(phoneNumber);
// This variable is declared but not assigned a values,
// resulting in an undefined data type.
// It represent the absence of an assigned value;

// 6. Object
let person = {
  name: "Ayush Bansal",
  employee_age: 22,
  ismillionare: false,
};

// 7. Array
let fruits = ["Mango", "kiwi", "orange"];
console.log(fruits);

// 8. Date
let date = new Date();
console.log(date);

// 9. BigInt
let largeNumber = 567898778908765436789765437890876543789n;
console.log(largeNumber);

// 4. Artithmetic operations

// 1. Addition
let sum = 5 + 10;
// 2. Subtraction
let diff = 10 - 2;
// 3. Mutliplication
let product = 5 * 11;
// 4. Division
let quotient = 15 / 2;
// 5. Remainder(modulo)
let remainder = 10 % 3;
console.log(remainder);
// 6. Increment
let number = 5;
// post increment
// console.log(number++);
// pre increment
// console.log(++number);

// 7. Decrement

// post decrement
// console.log(number--);

// pre decrement
// console.log(--number);

// 8. Exponentiation

let num3 = 2 ** 4;
// 2^4
console.log(num3);

// 9. Unary Plus
// converts a string into a number

let a = "a";
let b = +a;
console.log(b, "valeu of b");
console.log(2 + 2);
console.log(2 + "2");
// console.log(2++2)
console.log(2 + +"2");

// 10. Unary Negation
let num4 = -10;
let num5 = -num4;
console.log(num5);

// Conditionals

// 1. If Statement:
if (5 > 20) {
  console.log("5 is greater than 2");
}

// 2. If Else statement
if (5 > 20) {
  // if the conditional written stand true
  console.log("5 is greater than 2");
} else {
  // if the condition stands false
  console.log("Ayush AccioJob");
}

let myage = 8;

if (myage >= 18) {
  console.log("you are eligible to vote.");
} else {
  console.log("You are no eligible to vote");
}

// 3. if-else if-else statement
let man_age = 4;
if (man_age > 65) {
  console.log("You are a senior citizen");
} else if (man_age > 18) {
  console.log("You are a young adult");
} else {
  console.log("You are a kid.");
}

// 4. Ternary Operator

5 > 20 ? console.log("5 is greater than 2") : console.log("Ayush AccioJob");
let israining=false;
israining?console.log("Take an umbrella"):console.log("Enjoy the weather");

// 5. Switch Case
let day=3;
let dayname;
switch(day){
	case 1: dayname="Monday";
		break;

	case 2: dayname="tuesday";
		break;

	case 3: dayname="wednesday";
		break;

	case 4: dayname="thursday";
		break;

	case 5: dayname="friday";
		break;

	case 6: dayname="saturday";
		break;

	case 7: dayname="sunday";
		break;
	default:
	dayname="unknown input";
}
console.log(dayname);


// Nested If statement

let x=5;

if(x>0){
    if(x%2==0){
        console.log(`${x} is a positive even number.`)
    }else{
        console.log(`${x} is a positive odd number.`)
    }
}


// Logical AND (&&) operator:

let age1=26;
let hasLicense=false;

if(age1>18 && hasLicense){
    console.log("You can drive.")
}

// Logical OR (||) operator:
if(age1>18 || hasLicense){
    console.log("You can drive.")
}


// Nullish coalescing Operator (??)

let username=null;
let displayName=username?? "User";
console.log(displayName);
