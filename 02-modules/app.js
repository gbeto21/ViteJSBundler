/*Common js format */
// const add = require("./math");

// function addNumbers(a, b) {
//   console.log(add(a, b));
// }

// addNumbers(2, 3);

/*ESM format */
import { add } from "./math.js";
function addNumbers(a, b) {
  console.log(add(a, b));
}

addNumbers(2, 3);
