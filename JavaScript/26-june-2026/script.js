// null 

/*
    -null ka matlab hota hai koi value nahi hai, aur ye value programmer khud deta hai.
*/

console.log("=========== null =============");

let user = null;
console.log(user);


let currentUser = null;

console.log(currentUser);

// typeof

console.log(typeof null);


// isNaN()

/* 
    - Ye check karta hai ki value number hai ya nahi
    - agar Number nahi bana sakta to "ture" return hoga
*/

console.log("============ isNaN ===========");


console.log(isNaN("hello"));

console.log(isNaN("123"));

console.log(isNaN(100));

console.log(isNaN("10abc"));


// Number.isNaN()

/* 
    - modern method , asli NaN check kart hai 
*/

console.log("=========== Number.isNaN() ============");


console.log(Number.isNaN(NaN));

console.log(Number.isNaN("Hello"));


// NaN

/*
    - NaN ka full Form: Not a Number 
*/

console.log("============ NaN ============");

console.log(0 / 0);

console.log(parseInt("Hello"));

console.log(Math.sqrt(-1));

console.log(typeof NaN);

console.log(NaN === NaN);

console.log(Number.isNaN(NaN));


// undefined and null 

console.log("=================== undefined and null =============");

let age;

console.log(age);


let name = null;

console.log(name);

let number;

console.log(number);


let id = null;

console.log(id);


// Infinity and -Infinity

/* 
    -Jab number bahut bada ya bahut chhota ho jaye.
*/

console.log("============= infinity and -infinity ================");


console.log(1 / 0);


console.log(-1 / 0);

console.log(Infinity + 10);

console.log(typeof Infinity);


// Number Constants

/* 
    - JavaScript mein Number object ke andar kuch predefined constants hote hain.
*/
console.log("================== number constant ================");

console.log(Number.MAX_VALUE);

console.log(Number.MIN_VALUE);

console.log(Number.MAX_SAFE_INTEGER);

console.log(Number.MIN_SAFE_INTEGER);

console.log(Number.POSITIVE_INFINITY);

console.log(Number.NEGATIVE_INFINITY);

console.log(Number.EPSILON);
