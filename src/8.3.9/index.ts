// import path from "path";
// import { fileURLToPath } from "url";
// import { readFile } from "fs/promises";

// const filePath = fileURLToPath(import.meta.url);
// const fileDir = path.dirname(filePath);
// // // プロジェクトのルートディレクトリを取得
// const projectRoot = path.join(fileDir, "..", "..");
// // // uhyo.textファイルのパスを指定
// const dataFile = path.join(projectRoot, "src", "7.4.1", "uhyo.text");

// const repeat10 = (str: string) =>
//   new Promise<string>((resolve) => {
//     setTimeout(() => resolve(str.repeat(10)), 1000);
//   });

// // readFile(dataFile, "utf8")
// //   .then((result) => repeat10(result))
// //   .then((result) => {
// //     console.log(result);
// //   });

// const p1 = readFile(dataFile, "utf8");

// const p3 = p1.then((result) => {
//   const p2 = repeat10(result);
//   return p2;
// });

// p3.then((result) => {
//   console.log(result);
// });
