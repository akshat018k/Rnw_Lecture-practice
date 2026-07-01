/* ===============================
   JavaScript Operators Practice - 2
================================= */


/* String Operator */

console.log("========== String Operator ==========");

let firstName = "Akshat";
let lastName = "Kumbhani";

let fullName = firstName + " " + lastName;

console.log(fullName);

let message = "Welcome ";
message += fullName;

console.log(message);


/* Template Literal */

console.log("\n========== Template Literal ==========");

console.log(`Hello, ${fullName}!`);
console.log(`Your name has ${fullName.length} characters.`);


/* Ternary Operator */

console.log("\n========== Ternary Operator ==========");

let score = 75;

let result = score >= 50 ? "Pass ✅" : "Fail ❌";

console.log(result);

let age = 17;

let status = age >= 18 ? "Eligible for Voting" : "Not Eligible";

console.log(status);


/* Typeof Operator */

console.log("\n========== Typeof Operator ==========");

console.log(typeof 100);
console.log(typeof "JavaScript");
console.log(typeof false);
console.log(typeof undefined);
console.log(typeof null);
console.log(typeof [10, 20, 30]);
console.log(typeof { city: "Surat" });
console.log(typeof function () {});


/* Optional Chaining */

console.log("\n========== Optional Chaining ==========");

let employee = {
    name: "Rohan",
    company: {
        name: "Google",
        location: "India"
    }
};

console.log(employee.name);
console.log(employee?.company?.name);
console.log(employee?.company?.location);
console.log(employee?.salary);
console.log(employee?.address?.city);


/* Bitwise Operator */

console.log("\n========== Bitwise Operator ==========");

let a = 8;
let b = 5;

console.log(a & b);
console.log(a | b);
console.log(a ^ b);


/* Spread Operator */

console.log("\n========== Spread Operator ==========");

let numbers = [10, 20, 30];

let newNumbers = [...numbers, 40, 50];

console.log(numbers);
console.log(newNumbers);

let student = {
    name: "Akash",
    age: 21
};

let studentDetails = {
    ...student,
    city: "Surat"
};

console.log(student);
console.log(studentDetails);


/* Rest Parameter */

console.log("\n========== Rest Parameter ==========");

function total(...marks) {
    return marks.reduce((sum, mark) => sum + mark, 0);
}

console.log(total(20, 30, 40));
console.log(total(5, 10, 15, 20, 25));


/* Operator Precedence */

console.log("\n========== Operator Precedence ==========");

console.log(4 + 6 * 2);
console.log((4 + 6) * 2);
console.log(20 - 5 + 3);
console.log(18 / 3 + 4);

console.log(true && false || true);
console.log(false || true && false);
console.log((true || false) && true);