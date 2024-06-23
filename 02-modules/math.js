/*Common js format */
// function add(a, b) {
//   return a + b;
// }

// module.exports = add;

/*ESM format */
export function add(a, b) {
  return a + b;
}

export function substract(a, b) {
  return a - b;
}

// export default add; //Option when just one funtion is exported
// import add from "./math.js" //Option when just import one funtion exported
