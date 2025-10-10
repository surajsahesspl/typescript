/* # if statement

- if statement evaluates a condition (a boolean expression) and executes a block of code only if the condition is true. 
- The condition is evaluated before the block of code block is executed.

*/

let loginStatus: boolean = true;

if (loginStatus) {
    console.log("Show user dashboard");
    // Redirect to Dashboard page
} else {
    console.log("Login first");
    // Redirect to Login page
}
