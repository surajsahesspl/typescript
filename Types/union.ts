// Union Type
// Used when a value can be more than a single type.
// | -> Pipe opeartor
// Only common properties accessible without narrowing

let value: number | string = 3;  // OK
value = "Hello";    // OK
// value = true;    // Error

// Note:
// We need to know the type when union types are being used to avoid errors.
if (typeof(value) === "string") {
    console.log(value.toUpperCase()); // OK
}else if (typeof (value) === "number") {
    // console.log(value.toFixed(2)); // Type: never (Won't execute)
}



type person= { name: string };

type user= { role: string, salary?: number };

// Union type
type endUser = person | user;

let endUser: endUser = {
    name: "Suraj",
    role:"user"
}

console.log("User: ", endUser);
// console.log("User Name: ", endUser.name) // Won't work in Union (|), but will work in Intersection (&)
