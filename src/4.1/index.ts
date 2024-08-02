// function range(min: number, max: number): number[] {
//   const result = [];
//   for (let i = min; i <= max; i++) {
//     result.push(i);
//   }
//   return result;
// }

// console.log(range(1, 7));

// function helloWorldNTimes2(n: number): void {
//   if (n >= 100) {
//     console.log(`${n}回なんて無理です！！`);
//     return;
//   }
//   for (let i = 0; i < n; i++) {
//     console.log("Hello, World!");
//   }
// }

// helloWorldNTimes2(100);
// helloWorldNTimes2(10);

// type Human = {
//   height: number;
//   weight: number;
// };

// const calcBMI = function (human: Human): number {
//   return human.weight / human.height ** 2;
// };

// const uhyo: Human = { height: 1.84, weight: 72 };

// console.log(calcBMI(uhyo));

// type Human = {
//   height: number;
//   weight: number;
// };

// const calcBMI = function ({ height, weight }: Human): number {
//   return weight / height ** 2;
// };

// const uhyo: Human = { height: 1.84, weight: 72 };

// console.log(calcBMI(uhyo));

// type Human = {
//   height: number;
//   weight: number;
// };

// const calcBMI = ({ height, weight }: Human): number => {
//   return weight / height ** 2;
// };

// const calcBMI = ({ height, weight }: Human): number => weight / height ** 2;

// const uhyo: Human = { height: 1.84, weight: 72 };

// console.log(calcBMI(uhyo));

// type Human = {
//   height: number;
//   weight: number;
// };

// type ReturnObj = { bmi: number };

// const calcBMIObj = ({ height, weight }: Human): ReturnObj => ({
//   bmi: weight / height ** 2,
// });

// const uhyo: Human = { height: 1.84, weight: 72 };

// console.log(calcBMIObj(uhyo));

// const obj = {
//   double(num: number): number {
//     return num * 2;
//   },

//   double2: (num: number): number => num * 2,
// };

// console.log(obj.double(100));

// console.log(obj.double2(100));

// const sum = (...args: number[]): number => {
//   let result = 0;
//   for (const num of args) {
//     result += num;
//   }
//   return result;
// };

// console.log(sum(1, 10, 100));

// console.log(sum(123, 456));

// console.log(sum());

// const sum = (base: number, ...args: number[]): number => {
//   let result = base * 1000;
//   for (const num of args) {
//     result += num;
//   }
//   return result;
// };

// console.log(sum(1, 10, 100));

// console.log(sum(123, 456));

// console.log(sum(123));

// console.log(sum());

// const sum = (...args: number[]): number => {
//   let result = 0;
//   for (const num of args) {
//     result += num;
//   }
//   return result;
// };

// console.log(sum(1, 10, 100));

// console.log(sum(123, 456));

// console.log(sum());

// const sum = (base: number, ...args: number[]): number => {
//   let result = base * 1000;
//   for (const num of args) {
//     result += num;
//   }
//   return result;
// };

// console.log(sum(1, 10, 100));

// console.log(sum(123, 456));

// console.log(sum());

// const sum = (...args: number[]): number => {
//   let result = 0;
//   for (const num of args) {
//     result += num;
//   }
//   return result;
// };

// const nums = [1, 2, 3, 4, 5];

// console.log(sum(...nums));

// const toLowerOrUpper = (str: string, upper?: boolean): string => {
//   if (upper) {
//     return str.toUpperCase();
//   } else {
//     return str.toLowerCase();
//   }
// };

// console.log(toLowerOrUpper("Hello"));

// console.log(toLowerOrUpper("Hello", false));

// console.log(toLowerOrUpper("Hello", true));

// const toLowerOrUpper = (str: string, upper: boolean = false): string => {
//   if (upper) {
//     return str.toUpperCase();
//   } else {
//     return str.toLowerCase();
//   }
// };

// console.log(toLowerOrUpper("Hello"));

// console.log(toLowerOrUpper("Hello", false));

// console.log(toLowerOrUpper("Hello", true));

// function foo(): void {}

// const bar = (): void => {};

// console.log(foo.name);
// console.log(bar.name);

// type User = { name: string; age: number };

// const getName = (u: User): string => {
//   console.log("u is", u);
//   return u.name;
// };

// const users: User[] = [
//   { name: "uhyo", age: 26 },
//   { name: "John Smith", age: 15 },
// ];

// const names = users.map(getName);

// console.log(names);

// type User = { name: string; age: number };

// const users: User[] = [
//   { name: "uhyo", age: 26 },
//   { name: "John Smith", age: 15 },
// ];

// const names = users.map((u: User): string => u.name);

// console.log(names);

// const adultUsers = users.filter((user: User) => user.age >= 20);

// const allAdult = users.every((user: User) => user.age >= 20);

// const seniorExists = users.some((user: User) => user.age >= 60);

// const john = users.find((user: User) => user.name.startsWith("John"));
