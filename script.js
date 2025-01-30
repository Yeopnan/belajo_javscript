console.log("Lesson no 1 - Variable");

// container - letak barang dalam tu
// container warna kuning, and kita kucing dalam tu. container kuning = kucing
// naming convention for variable -> camelCase
// setiap variable ada value

var yellowContainer = "Bola";
console.log(yellowContainer);
// console.log(yellowContainer);
var firstName = "yeop";
console.log(firstName);

// modern way utk variable
let lastName = "nan";
console.log(lastName);
// console.log(lastName);
const anak = "sulong";
console.log(anak);
// console.log(pi);

// REASSIGMENT
// only for var and let
yellowContainer = "bolasepak";
console.log(yellowContainer);
// console.log(yellowContainer);
lastName = "nan";
console.log(lastName);
// console.log(lastName);

// VALUE
// Data type
//  1. string
//  2. number
//  3. boolean
//  4. undefined
//  5. null
//  6. object

console.log(typeof yellowContainer);
console.log(typeof firstName);
console.log(typeof anak);

let num1 = "1";
let num2 = 2;
console.log(typeof num1, typeof num2);
// concatenation = string + number
let fullName = firstName + " " + lastName;
let total = num1 + num2;
console.log(total);
console.log(fullName);

let num3 = 2;
let num4 = 2;
// operation
let total2 = num3 + num4;
console.log(typeof num3, typeof num4);
console.log(total2);

let isAtifHasGirlfriend = false;
console.log(typeof isAtifHasGirlfriend);

let atifGirlfriend = undefined;
console.log(typeof atifGirlfriend);

let animals = ["cat", "tiger", "lion"];
console.log(animals);
console.log(typeof animals);
