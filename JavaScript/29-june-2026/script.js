// JavaScript operators

/* Arithmetic Operators */

console.log("========== Arithmetic Operators ==========");

let num1 = 25;
let num2 = 4;

console.log("Addition :", num1 + num2);
console.log("Subtraction :", num1 - num2);
console.log("Multiplication :", num1 * num2);
console.log("Division :", num1 / num2);
console.log("Modulus :", num1 % num2);
console.log("Exponent :", num1 ** num2);

console.log("Pre Increment :", ++num1);
console.log("Pre Decrement :", --num1);
console.log("Post Increment :", num1++);
console.log("Value After Post Increment :", num1);
console.log("Post Decrement :", num1--);
console.log("Value After Post Decrement :", num1);


/* Assignment Operators */

console.log("\n========== Assignment Operators ==========");

let marks = 50;

marks += 20;
console.log("+= :", marks);

marks -= 10;
console.log("-= :", marks);

marks *= 2;
console.log("*= :", marks);

marks /= 4;
console.log("/= :", marks);

marks %= 6;
console.log("%= :", marks);

marks **= 2;
console.log("**= :", marks);


/* Comparison Operators */

console.log("\n========== Comparison Operators ==========");

let a = 15;
let b = "15";

console.log("a == b :", a == b);
console.log("a === b :", a === b);
console.log("a != b :", a != b);
console.log("a !== b :", a !== b);
console.log("a > b :", a > b);
console.log("a < b :", a < b);
console.log("a >= b :", a >= b);
console.log("a <= b :", a <= b);


/* Logical Operators */

console.log("\n========== Logical Operators ==========");

let isStudent = true;
let feesPaid = true;

console.log("AND :", isStudent && feesPaid);
console.log("OR :", isStudent || feesPaid);
console.log("NOT :", !isStudent);


/* Real Life Example */

console.log("\n========== Student Eligibility ==========");

let attendance = 80;
let examFeesPaid = true;

let eligible = attendance >= 75 && examFeesPaid;

console.log("Attendance :", attendance);
console.log("Fees Paid :", examFeesPaid);
console.log("Eligible For Exam :", eligible);