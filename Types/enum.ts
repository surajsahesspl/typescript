// An enum is a group of "named constant values".
// Enum stands for enumerated type.


// Defining enum
enum Color {
    Red,
    Green,
    Blue
}

let col: Color = Color.Green;
console.log(col); // Output: 1 (by default, enums are zero-based)

// Explicitly assigning values
enum Color1 {
    Red = 1,
    Green,
    Blue
}
let col1: Color1 = Color1.Green;
console.log(col1); // Output: 2

// Example: (String Enum)
enum Status {
    Active = "ACTIVE",
    Inactive = "INACTIVE",
    Pending = "PENDING"
}

let user: { name: string, salary?: number, status: string } = {
    name: "Suraj",
    salary:18000,
    status:Status.Inactive
}

if (user.salary) {
    console.log("User status: ", user.status);
    user.status = Status.Active;
    console.log("User status updated: ", user.status);
}
else {
    console.log("User status: ", user.status);
}