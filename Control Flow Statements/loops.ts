/* # Loop
  - A loop statement allows us to execute a statement or group of statements multiple times.
  
  # Definite Loop
  - A loop whose number of iterations are definite/fixed.
    - for loop is an implementation of a definite loop
  
  # Indefinite Loop
  - An indefinite loop is used when the number of iterations in a loop is indeterminate or unknown.
  - we can implement indefinite loop using "while" and "do while" loop
*/

/* 1. for loop
  Syntax: 
    for(initialization; condition; expression){
    
    }
*/

type Product = {
    name: string,
    description: string,
    price: number,
    isAvailable: boolean
};

const products: Product[] = [
    {
        name: "Samsung S21 FE",
        description: "5G smartphone with better battery performance",
        price: 40000,
        isAvailable:true
    },
    {
        name: "Logitech Mouse",
        description: "",
        price: 300,
        isAvailable:true
    },
    {
        name: "iPhone 17",
        description: "Better battery, camera and storage",
        price: 130000,
        isAvailable:false
    },
    {
        name: "hp Laptop",
        description: "512GB SSD, 16GB RAM, light weight",
        price: 100000,
        isAvailable:true
    }
]

for (let i: number = 0; i < products.length; i++){
    console.log("Product-", i + 1)
    console.log(`Product Name: ${products[i].name} \nDescription: ${products[i].description}\nPrice: ${products[i].price}\n${products[i].isAvailable ? "Available" : "Out of Stock"}`)

    console.log("--------------------------------")
}
console.log("============================================")
// ====================================================================

/* 2. while loop
 Syntax:
   while(condition){
   
   }
*/

let attempts: number = 1;
while (attempts <= 3) {
    attempts++;
    if (Math.random() < 0.5) {
    }
    else {
        console.log("Login Successful");
        break;
    }
}
if (attempts > 3) {
    console.log("Login Failed");
}
console.log("Attempts: ", attempts);

console.log("============================================")
// ====================================================================

/* 3. do while loop
- It runs at least once without checking the condition
 Syntax:
   do{

   } while(condition);

*/
let isLoggedIn: boolean = false;
do {
    console.log("Product added to cart");
    if (isLoggedIn) {
        break;
    }
} while (isLoggedIn);

if (!isLoggedIn) {
    console.log("Login first to proceed to checkout.");
}else {
 console.log("Redirecting to checkout page...")   
}