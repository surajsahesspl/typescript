/* # Interface
  - Similar to type aliases except they only apply to object types.
  - Can extend other objects
  - More structured for object types
*/

interface AddressInfo{
    street: string,
    city: string,
    zipCode:number
}

const userAddress: AddressInfo={
    street: "KIIT",
    city: "BBSR",
    zipCode:751024
};
console.log("User Address: ", userAddress, typeof userAddress);


// Extending interface
interface UserInfo extends AddressInfo{
    name: string,
    designation: string,
    salary?: number,
    isEmployed: boolean
}


const userInfo: UserInfo = {
    name: "Suraj",
    designation: "Project Trainee",
    street: "KIIT",
    city: "BBSR",
    zipCode:751024,
    isEmployed: true
}

console.log("User Details: ", userInfo, typeof userInfo);
console.log("User City: ", userInfo.city, typeof userInfo.city);
