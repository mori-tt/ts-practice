// function map(array: number[], callback: (value: number) => number): number[] {
//   const result: number[] = [];
//   for (const elm of array) {
//     result.push(callback(elm));
//   }
//   return result;
// }

// function map<T, U>(array: T[], callback: (value: T) => U): U[] {
//   const result: U[] = [];
//   for (const elm of array) {
//     result.push(callback(elm));
//   }
//   return result;
// }

// const data = [1, 1, 2, 3, 5, 8, 13];

// const result = map(data, (x) => x * 10);
// // [10, 10, 20, 30, 50, 80, 130] と表示される
// console.log(result);

// const data = [1, -3, -2, 8, 0, -1];

// const result: boolean[] = map(data, (x) => x >= 0);
// // [true, false, false, true, true, false] と表示される
// console.log(result);
