// Primitive Types

// 1. Number
let age: number = 22;

// 2. String
let studentName: string = "Suraj";

// 3. Boolean
let isEligible: boolean = true;

// 4. Null and Undefined
let u: undefined = undefined;
let n: null = null;

// 5. Symbol
let s1:symbol= Symbol("Suraj");
let s2:symbol= Symbol("Suraj");
console.log(s1 === s2); // false
console.log(s1);

// 6. BigInt
let big:bigint = 890123456789232310n;
console.log(big);
console.log(typeof big); // bigint
// Note: BigInt is not supported in all environments, ensure your environment supports it.