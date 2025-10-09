/* # Type Aliases
  - A way to define custom types (from primitive non-primitive types)
  
  - Can be useful for:
      - Simplifying complex types
      - Making code more readable and maintainable
      - Creating resuable types that can be used in many places in the codebase
      - Can use "extends" or intersection "&"
      
Syntax: type aliasName = Type;
    where, Type can be anything from primitive, non-primitive or complex type/
*/

// Simple type alias
type Name = string;
let userName: Name = "Suraj";


type ID = string | number;
let userId: ID = 12;
console.log("UserID: ", userId, typeof userId)

userId = "User-12";
console.log("UserID: ", userId, typeof userId)


// Complex type alias
type Address = {
    street: string,
    city: string,
    zipCode:number
}

type User = {
    name: string,
    designation: string,
    salary?: number,
    address: Address,
    isEmployed: boolean
}

const userInfo: User = {
    name: "Suraj",
    designation: "Project Trainee",
    address: {
        street: "KIIT",
        city: "BBSR",
        zipCode:751024
    },
    isEmployed: true
}

console.log("User Details: ", userInfo, typeof userInfo);