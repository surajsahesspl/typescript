/* # Anonymous Function
  - An anonymous function is simply a function without a name, typically assigned to a variable or passed as a callback.

  - We write it using the classic 'function' keyword but don’t give it a name.
*/

// Example:

// Anonymous function without explicit typing
const calculateSum = function (a: number, b: number):number {
    return a + b;
}

console.log("Sum: ", calculateSum(2, 3));

// Using anonymous function with explicit typing
const multiplication: (num1: number, num2: number) => number = function (x: number, y: number): number{
    return x * y;
}

console.log("Multiply: ", multiplication(2, 3));


console.log("\n")
// Anonymous function as a callback
const numbers: number[] = [1, 2, 3, 4, 5];

numbers.forEach(function (num): void {
    console.log(num*2);
});

console.log("\n")
const squaredNumbers:number[] = numbers.map(function(num): number {
    return num ** 2;
})

console.log(squaredNumbers);