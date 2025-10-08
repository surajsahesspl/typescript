// Special Types

// 1. Any
let randomValue: any = 10;
console.log(typeof(randomValue))
randomValue = "Suraj";
console.log(typeof(randomValue))
randomValue = true;
console.log(typeof(randomValue))
console.log()
// Note: Using 'any' type disables type checking for that variable, use it cautiously.


// 2. Unknown
// let unknownValue: unknown = 10;
let unknownValue: unknown = 10;
console.log(typeof (unknownValue))
unknownValue = true;
console.log(typeof(unknownValue))
unknownValue = "Suraj";
console.log(typeof(unknownValue))
// Note: 'unknown' is safer than 'any' because you must perform type checking before performing operations on it.
// console.log(unknownValue.toUpperCase()); 
if (typeof unknownValue === "string") {
    console.log(unknownValue.toUpperCase());
}
console.log()


// 3. Never
function throwError(message: string): never {
    throw new Error(message);
}
console.log()
// throwError("This is an error message");
// Note: A function that never returns (always throws an error or has an infinite loop) has the return type 'never'.


// 4. Void
function logMessage(message: string): void {
    console.log(message);
}
logMessage("Hello, World!");
// Note: 'void' is used for functions that do not return a value.
