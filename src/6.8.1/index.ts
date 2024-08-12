// type Option<T> =
//   | {
//       tag: "some";
//       value: T;
//     }
//   | {
//       tag: "none";
//     };

// type Option<T> =
//   | {
//       hasValue: true;
//       value: T;
//     }
//   | { hasvalue: false };

// function isSome<T>(obj: Option<T>): obj is { tag: "some"; value: T } {
//   return obj.tag === "some";
// }

// function isSome<T>(obj: Option<T>): obj is Extract<Option<T>, { tag: "some" }> {
//   return obj.tag === "some";
// }

// type Some<T> = {
//   tag: "some";
//   value: T;
// };

// type None = {
//   tag: "none";
// };

// type Option<T> = Some<T> | None;

// function isSome<T>(obj: Option<T>): obj is Some<T> {
//   return obj.tag === "some";
// }

// function showNumberExists(obj: Option<number>): void {
//   if (isSome(obj)) {
//     console.log(obj.value);
//   }
// }

// const four: Option<number> = {
//   tag: "some",
//   value: 4,
// };

// const nothing: Option<number> = {
//   tag: "none",
// };

// showNumberExists(four);
// showNumberExists(nothing);
