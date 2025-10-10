/* # Arrow Functions
  - Arrow functions are anonymous functions written in a shorter syntax introduced in ES6.
*/

// Example:

// Simple arrow function
const welcome = (name: string):string => {
    return `Welcome back ${name}`;
}
console.log(welcome("Suraj"));


// Arrow function with no parameters
const sayHello = ():void => {
    console.log("Hello!");
}


// Arrow function with multiple parameters
const calculateSum = (num1: number, num2: number, num3: number): number => {
    return num1 + num2 + num3;
}
console.log("Multiple parameters: ", calculateSum(1, 2, 3));


// Arrow function as callback
const numbers: number[] = [5, 4, 2, 1, 0, 3];
numbers.sort()
const squaredNumbers = numbers.map((num): number => {
    return num ** 2;
})

console.log(squaredNumbers);
