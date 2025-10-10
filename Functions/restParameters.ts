/* # Rest Parameters
  - Rest parameter allows a function to accept a variable number of arguments and store them as an array.
  
  - A rest parameter must be last in the parameter list.

  - There must be only a single rest parameter in the function definition.

  - A function can have a single rest parameter and multiple required parameters.

  - Syntax: function funcName(otherParameters, ...restParameterName){}

  - Similar to spread operator but works differently.
*/

// Example
function multiply(...nums: number[]): number{
    console.log(`Total numbers received for multiplication: ${nums.length}`);
    let mult = 1;
    for (let i = 1; i < nums.length; i++){
        mult *= nums[i];
    }
    return mult;
}

function calculateSum(x:number, y:number, ...nums:number[]): number{
    let totalSum:number = x+y;
    for (let i = 0; i < nums.length; i++) {
        totalSum += nums[i];
    }
    return totalSum;
}

console.log("\nFunction having only Rest Parameter:");
console.log(multiply(1));
console.log(multiply(1, 2));
console.log(multiply(1, 2, 3, 4, 5));

console.log("\nFunction having Rest Parameter and other required parameters:");
console.log(calculateSum(1, 2));
console.log(calculateSum(1, 2, 3, 4, 5));
