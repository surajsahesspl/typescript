// Tuple is a typed array with a pre-defined length and types for each index

let myTup: [number, string, boolean] = [1, "Hello", true]
console.log(myTup)

// Tuple operations
let myTup1: [number, string, boolean] = [1, "Hello", true]
// Push
myTup1.push(2) // Allowed, but not recommended

// Pop
let poppedValue = myTup1.pop() // Allowed, but not recommended

// Updating element
myTup1[0] = 10 // Allowed

// Length
const len = myTup.length;

// Spread operator
let newTup = [...myTup, 2, "World", false]
console.log("new tuple: ", newTup)

// Accessing elements
let firstElement = myTup[0] // number
let secondElement = myTup[1] // string
let thirdElement = myTup[2] // boolean

// Destructuring
let [id, greeting, isValid] = myTup
console.log("id: ", id, "greeting: ", greeting, "isValid: ", isValid)

// Named tuple
let namedTup: [id: number, fullName: string, isEligible: boolean] = [1, "Suraj Kumar Sah", true];
console.log("named tuple: ", namedTup)
console.log(namedTup[0]); 


// Readonly tuple
let readonlyTup: readonly [number, string, boolean] = [1, "Hello", true]
console.log("readonly tuple: ",readonlyTup)
// readonlyTup[0] = 2 // Error: Cannot assign to '0' because it is a read-only property

// Note: A good practice is to keep tuple readonly