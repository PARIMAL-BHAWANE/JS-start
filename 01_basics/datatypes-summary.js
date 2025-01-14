//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3

//***************************************************************************** Notes *****************************************************************************

// ** The typeof Operator ** //
// -> The typeof operator returns a string indicating the type of the unevaluated operand.

 // Primitive types //

// Undefined "undefined" -> typeof instance === "undefined"
// Null "object" -> typeof instance === "object"
// Boolean "boolean" -> typeof instance === "boolean"
// Number "number" -> typeof instance === "number"
// BigInt "bigint" -> typeof instance === "bigint"
// String "string" -> typeof instance === "string"
// Symbol "symbol" -> typeof instance === "symbol"
// Function object "function" -> typeof instance === "function"
// Any other object "object" -> typeof instance === "object"

 // Non-primitive types //

// Object "object" -> typeof instance === "object"
// Array "object" -> typeof instance === "object"
// Date "object" -> typeof instance === "object"
// RegExp "object" -> typeof instance === "object"
// Error "object" -> typeof instance === "object"
// Math "object" -> typeof instance === "object"
// JSON "object" -> typeof instance === "object"


