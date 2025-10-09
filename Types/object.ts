// Object types

// Creation and initialization
let person: { name: string, age: number, isEligible: boolean } = {
    name: "Suraj Kumar Sah",
    age: 21,
    isEligible: true
};
console.log("Object Person: ", person);
console.log("Name: ", person.name);
console.log("Eligible: ", person["isEligible"]);


// Using Index Signature
let newObj: {[key:string]: any}={};
newObj["age"] = 22;
newObj["qualification"] = "B.Tech";
console.log("Using Index Signature: ", newObj);


// Optional properties
let employee: { name: string, department: string, salary?: number } = {
    name: "Suraj Kumar Sah",
    department: "IT"
}
console.log("Employee without salary: ", employee);

let employee1: { name: string, department: string, salary?: number } = {
    name: "Suraj Kumar Sah",
    department: "IT",
    salary:18000
}
console.log("Employee with salary: ", employee1);

// Nested Objects
let student: { name: string, age: number, address: { street: string, city: string, zipCode: number } } = {
    name: "Suraj Kumar Sah",
    age: 21,
    address: {
        street: "KIIT Square, Patia",
        city: "Bhubaneswar",
        zipCode: 751024
    }
};
console.log("Student: ", student);
console.log("City: ", student.address.city);

// Readonly properties
let readonlyPerson: { readonly name: string, age: number } = {
    name: "Suraj Kumar Sah",
    age: 21
};
console.log("Readonly Person: ", readonlyPerson);
// readonlyPerson.name = "New Name"; // Error: Cannot assign to 'name' because it is a read-only property
