// for (let n = 1; n <= 100; n++) {
//   if (n % 3 === 0 && n % 5 === 0) {
//     console.log("FizzBUzz");
//   } else if (n % 3 === 0) {
//     console.log("Fizz");
//   } else if (n % 5 === 0) {
//     console.log("Buzz");
//   } else {
//     console.log(n);
//   }
// }

// let n = 1;
// while (n <= 100) {
//   if (n % 3 === 0 && n % 5 === 0) {
//     console.log("FizzBuzz");
//   } else if (n % 3 === 0) {
//     console.log("Fizz");
//   } else if (n % 5 === 0) {
//     console.log("Buzz");
//   } else {
//     console.log(n);
//   }
//   n++;
// }

// let result = "";
// for (let n = 1; n <= 100; n++) {
//   if (n > 1) {
//     result += " ";
//   }
//   if (n % 3 === 0 && n % 5 === 0) {
//     result += "FizzBuzz";
//   } else if (n % 3 === 0) {
//     result += "Fizz";
//   } else if (n % 5 === 0) {
//     result += "Buzz";
//   } else {
//     result += String(n);
//   }
// }

// console.log(result);

// let result = "";
// for (let n = 1; n <= 100; n++) {
//   result +=
//     (n > 1 ? " " : "") +
//     ((n % 3 === 0 ? "Fizz" : "") + (n % 5 === 0 ? "Buzz" : "") || n);
// }

// console.log(result);

let result = "";
for (let n = 1; n <= 100; n++) {
  result +=
    (n > 1 ? " " : "") +
    ((n % 3 === 0 ? "Fizz" : "") + (n % 5 === 0 ? "Buzz" : "") || n);
}
console.log(result);
