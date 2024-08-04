// const repeat = function <T>(element: T, length: number): T[] {
//   const result: T[] = [];
//   for (let i = 0; i < length; i++) {
//     result.push(element);
//   }
//   return result;
// };

// const repeat = <T>(element: T, length: number): T[] => {
//   const result: T[] = [];
//   for (let i = 0; i < length; i++) {
//     result.push(element);
//   }
//   return result;
// };

// const utils = {
//   repeat<T>(element: T, length: number): T[] {
//     const result: T[] = [];
//     for (let i = 0; i < length; i++) {
//       result.push(element);
//     }
//     return result;
//   },
// };

// const pair = <Left, Right>(left: Left, right: Right): [Left, Right] => [
//   left,
//   right,
// ];

// const p = pair<string, number>("uhyo", 26);

// console.log(p);

// const repeat = <T extends { name: string }>(
//   element: T,
//   length: number
// ): T[] => {
//   const result: T[] = [];
//   for (let i = 0; i < length; i++) {
//     result.push(element);
//   }
//   return result;
// };

// type HasNameAndAge = {
//   name: string;
//   age: number;
// };

// console.log(repeat<HasNameAndAge>({ name: "uhyo", age: 26 }, 3));

// console.log(repeat<string>("a", 5));
