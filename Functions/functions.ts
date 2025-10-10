/* # Functions
  - A function is a set of statements to perform a specific task.
  - If no return type is defined, TypeScript will attempt to infer it through the types of the variables or expressions returned.

  - Function Declaration: A function declaration tells the compiler about a function's name, return type, and parameters.
  - Function Definition: A function definition provides the actual body of the function.


  # Function types consist of the following −
    - Type of function parameters (like string, number, boolean, etc)
    - Return type of the function (like void, string, number, boolean, etc)
*/

// Example:
// Basic Function with Types
function calculateDiscountedPrice(price: number, discount: number): number{
    return price - (price * discount) / 100;
}

const finalPrice: number = calculateDiscountedPrice(1850, 12);
console.log("Discouned Price: ", finalPrice);


// Basic function without return type (it will infer from the value/expression returned)
function add(a: number, b: number) {
  return a + b;
}
console.log(add(3, 2));