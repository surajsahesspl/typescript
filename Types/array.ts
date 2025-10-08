// Array: Homogeneous collection of values of same datatype

// Declaration and Initialization
// Method-1
let arr0: number[] = [8, 0, 1, 2, 3];

// Method-2
let arr1: Array<number> = [9, 4, 6, 8, 0, 1, 2, 3];
console.log("Array 1: " + arr1);

// Add element at the end
arr1.push(4);

// Pop an element from the array (last)
const num = arr1.pop()
console.log("Popped element: " + num);

// Sort the array
arr1.sort();
console.log("Sorted Array 1: " + arr1);

// Concatenation
arr0.concat(arr1);
console.log("Concatenated Array: " + arr0.concat(arr1));

// Map
const mappedArr = arr1.map((num) => { return num * 2 });
console.log("Mapped Array: " + mappedArr);

// Filter
const filteredArr = arr1.filter((num) => num < 6);
console.log("Filtered Array: " + filteredArr);

// Reduce
const sum = arr1.reduce((acc, num) => { return acc + num }, 0);
console.log("Sum of Array: " + sum);

// Array Traversal
// 1. Using forEach()
console.log("Array Traversal using forEach():");
arr1.forEach((num) => {
    console.log(num);
})

// 2. Using for..in()
console.log("Array Traversal using for..in():");
for (let index in arr1) {
    console.log(arr1[index]);
}

// toString()
console.log("Array as String: " + arr1.toString());

// join()
console.log("Joined Array: " + arr1.join("-"));

// shift()
const shiftedNum = arr1.shift();
console.log("Shifted element: " + shiftedNum);

// unshift()
arr1.unshift(10);
console.log("Array after unshift: " + arr1);

// some()
const hasEvenNum = arr1.some((num) => num % 2 == 0);
console.log("Array has even number: " + hasEvenNum);

// reverse()
console.log("Reversed array: " + arr1.reverse());

// splice()
arr1.splice(2, 2); // Removes 2 elements from index 2
console.log("Array after splice (removed): " + arr1);
arr1.splice(1, 1, 100); // Adds 1 element to index 1
console.log("Array after splice (added): " + arr1);

// ------------------------------------------------------

// String array
let arr2: string[] = ["a", "b", "c"];


// Readonly array
let arr3: readonly number[] = [1, 2, 3];
// arr3.push(4); // Error: Property 'push' does not exist on type 'readonly number[]'.