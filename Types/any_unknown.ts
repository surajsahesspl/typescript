// Any type
// "opt out of the type checking" and allow the value to pass through the compile-time check.

console.log("*** Any type ***");

let notSure: any;
notSure = 4;
console.log("notSure: ", notSure, ",  type: ", typeof(notSure));

notSure = "maybe a string instead";
console.log("notSure: ", notSure, ",  type: ", typeof(notSure));

notSure = false;
console.log("notSure: ", notSure, ",  type: ", typeof(notSure));

notSure = 4 + "string";
console.log("notSure: ", notSure, ",  type: ", typeof(notSure));

let val:any;
val = [1, 2, 3, 4, 5];
console.log("Values: ", val, ",   type: ", typeof (val));

let sum = val.reduce((a:any, b:any) => a + b, 0);
console.log("Sum: ", sum, ", type: ", typeof (sum));
console.log("\n\n")


// Unknown type
// Similar to 'any', but safer because you "must perform some type of checking before performing most operations" on values of type 'unknown'.
console.log("*** Unknown type ***");

let value: unknown;
value = true;
console.log("value: ", value, ",  type: ", typeof(value));

value = 42;
console.log("value: ", value, ",  type: ", typeof (value));

value = "Hello World";
console.log("value: ", value, ",  type: ", typeof (value));

value = [];
console.log("value: ", value, ",  type: ", typeof (value));

value = {};
console.log("value: ", value, ",  type: ", typeof (value));

value = Math.random;
console.log("value: ", value, ",  type: ", typeof (value));

value = null;
console.log("value: ", value, ",  type: ", typeof (value));

value = undefined;
console.log("value: ", value, ",  type: ", typeof (value));


// value.toFixed(2); // Error: value is of type 'unknown'.
value = 12.121212;
if (typeof value === "number") {
    console.log(value.toFixed(2));
}
// To call methods on the variable with type unknown, you need to use the type assertion to explicitly tell the TypeScript compiler that the type of the variable.
console.log((value as number).toFixed(1));

value = false;
if ((value as boolean).valueOf()) {
    console.log("value is true");
}
else {
    console.log("value is false");
}


let val1: unknown;
val1 = [1, 2, 3, 4, 5];
console.log("Values: ", val1, ",   type: ", typeof (val1));

let sum1 = (val1 as number[]).reduce((a, b) => a + b, 0);
console.log("Sum: ", sum1, ", type: ", typeof (sum1));