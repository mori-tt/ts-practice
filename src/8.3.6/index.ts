// import { readFile } from "fs/promises";

// const pFoo = readFile("foo.txt", "utf8");
// const pBar = readFile("bar.txt", "utf8");
// const pBaz = readFile("baz.txt", "utf8");

// const p = Promise.all([pFoo, pBar, pBaz]);

// p.then((results) => {
//   console.log("foo.txt", results[0]);
//   console.log("bar.txt", results[1]);
//   console.log("baz.txt", results[2]);
// });

// import { readFile } from "fs/promises";

// const p = Promise.all([
//   readFile("foo.txt", "utf8"),
//   readFile("bar.txt", "utf8"),
//   readFile("baz.txt", "utf8"),
// ]);

// p.then((results) => {
//   const [foo, bar, baz] = results;
//   console.log("foo.txt:", foo);
//   console.log("bar.txt:", bar);
//   console.log("baz.txt:", baz);
// });

// import { readFile } from "fs/promises";

// const p = Promise.race([
//   readFile("foo.txt", "utf8"),
//   readFile("bar.txt", "utf8"),
//   readFile("baz.txt", "utf8"),
// ]);

// p.then((result) => {
//   console.log(result);
// });

// import { readFile } from "fs/promises";

// const sleepReject = (duration: number) => {
//   return new Promise<never>((resolve, reject) => {
//     setTimeout(reject, duration);
//   });
// };

// const p = Promise.race([readFile("foo.txt", "utf8"), sleepReject(5000)]);

// p.then(
//   (result) => {
//     console.log("成功", result);
//   },
//   (error: unknown) => {
//     console.log("失敗", error);
//   }
// );
