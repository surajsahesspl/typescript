/* # switch case

  - switch statement evaluates an expression, matches the expressions value to a case clause, and executes statements associated with that case.

*/

let theme: string = "dark";

switch (theme) {
  case "light":
    console.log("Apply light theme");
    break;
  case "dark":
    console.log("Apply dark theme");
    break;
  case "blue":
    console.log("Apply blue theme");
    break;
  default:
    console.log("Apply system default theme");
}
