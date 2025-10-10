/* # break

  -  break statement allows us to terminate a loop and pass the program control over the next statement after the loop.
  - We can use 'break' statement inside: for, while and do...while loop.
*/

// Example
interface Product{
    name: string,
    price: number
}

const cartProducts: Product[] = [
    {
        name: "Samsung S21 FE",
        price: 40000
    },
    {
        name: "Logitech Mouse",
        price: 300
    },
    {
        name: "iPhone 17",
        price: 130000
    },
    {
        name: "hp Laptop",
        price: 100000
    }
]

// Find first unavailable product
for (let i: number = 0; i<cartProducts.length; i++){
    if (cartProducts[i].price > 100000) {
        console.log(`Expensive item found: ${cartProducts[i].name} - Rs.${cartProducts[i].price}`);
        console.log("Please review the cart again before checkout");
        break;
    }
}
