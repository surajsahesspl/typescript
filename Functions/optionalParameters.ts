/* # Function with Optional Parameters

  - The optional parameters in TypeScript allow us to specify function parameters may or may not be provided when calling the function.

  - Optional parameters can't have default values
  - Optional parameters should be last parameters
  - A default parameter is automatically an optional parameter

  - When a function is called without argument value for optional parameter, the default value of optional parameter is set to undefined. So inside the function body, we need to handle the optional parameter.

  - Syntax: (use '?' after argument name)
      function functionName(para1:type1, para2?:type2): returnType{
      // function body
      }
*/

// Example: Optional Parameters
interface Product{
    name: string,
    price: number,
    regularDiscount: number,
    festiveDiscount?:number
};

const products: Product[] = [
    {
        name: "LogiTech Mouse",
        price: 650,
        regularDiscount: 6
    },
    {
        name: "Samsung S21 FE",
        price: 50000,
        regularDiscount: 10,
        festiveDiscount:5
    }
]

// Function with optional parameter to calculate the discounted price
function calculateDiscountedPrice(price: number, regularDiscount: number, festiveDiscount?: number): number{
    // With Type Guard on the festiveDiscount
    if (festiveDiscount && typeof(festiveDiscount)==="number") {
        var discountedPrice:number = price - (price * (regularDiscount + festiveDiscount)) / 100;
    } else {
        var discountedPrice: number = price - (price * regularDiscount) / 100;
    }
    return discountedPrice;
}

console.log("\n\nExample: Optional Parameters");
// Calculating the final price of each product
for (let i: number = 0; i < products.length; i++){
    console.log(`\n*** ${products[i].name} ***`);
    
    console.log(`Regular Price: ${products[i].price}`);

    let discountedPrice:number = calculateDiscountedPrice(products[i].price, products[i].regularDiscount, products[i].festiveDiscount)
    
    console.log(`Discounted Price: ${discountedPrice}`);
}


// Example: Default Parameters
function add(a: number, b: number, c: number = 50): number{
    if (c) {
        return a + b + c;
    }
    else {
        return a + b;
    }
}

console.log("\n\nExample: Default Parameters");
console.log(add(5, 10, 15));
console.log(add(5, 10));

function getNum(): number{
    return 10 * Math.random();
}
// Passing a function as a value for default parameter
function multiply(x: number, y: number, z:number = getNum()): number{
    if (z && typeof z === "number") {
        return x * y * z;
    } else {
        return x * y;
    }
}

console.log("Passing Function as a value for default parameter:");
console.log(multiply(5, 10, 2));
console.log(multiply(5, 10));