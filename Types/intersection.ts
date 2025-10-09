// Intersection type
/*
    - Intersection types combine multiple types into one.
    - The resulting type has all properties from each constituent type. Think of it as "this AND that".
    - All properties from all types are required

*/

type BasicUser = {
    id: number,
    name: string
};

type Admin = {
    permissions: string[],
    role: string
};

type AdminUser = BasicUser & Admin;

const adminUser: AdminUser = {
    id: 1,
    name: "Suraj",
    permissions: ["read", "write"],
    role: "admin"
};

console.log("Admin User: ", adminUser);
console.log("Admin Name: ", adminUser.name);