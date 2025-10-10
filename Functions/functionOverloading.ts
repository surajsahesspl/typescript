/* # Function Overloading
  - It allows us to define multiple function signatures for a single function. 
  
  - It's a way to provide different call patterns while maintaining strong type-checking.

  - Unlike other languages like Java or C++, TypeScript doesn't support true function overloading at runtime, but it uses a single implementation with multiple type signatures.

  Notes:
      - Only one implementation is allowed.
      - The implementation must accommodate all overloads.
      - TypeScript resolves overloads based on first matching signature from top to bottom.
*/

// Example

// Overloading by Parameter Type

function greet(name: string): string;
function greet(name: number): string;

function greet(name: string | number): string{
    if (typeof name === "string") {
        return `Hello ${name}`;
    } else {
        return `UserID: ${name}`;
    }
}

console.log(greet("Suraj"));
console.log(greet(1));


// Overloading by Number of parameters
function add(a: number, b: number): number;
function add(a: number, b: number, c: number): number;

function add(a: number, b: number, c?: number): number {
    if (c) {
        return a + b + c;
    } else {
        return a + b;
  }
}

console.log("Two Parameters: ", add(2, 3))
console.log("Three Parameters: ", add(2, 3, 5))


// Overloading with different Return types
function getValue(value: string): string;
function getValue(value: number): number;

function getValue(value: string | number): string | number {
  return value;
}

console.log(getValue("test"));
console.log(getValue(123));
