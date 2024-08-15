// import path from "path";
// import { fileURLToPath } from "url";
// import { readFile } from "fs/promises";

// const filePath = fileURLToPath(import.meta.url);
// const fileDir = path.dirname(filePath);
// // // プロジェクトのルートディレクトリを取得
// const projectRoot = path.join(fileDir, "..", "..");
// // // uhyo.textファイルのパスを指定
// const dataFile = path.join(projectRoot, "src", "7.4.1", "uhyo.text");

// // const sleepReject = (duration: number) => {
// //   return new Promise<never>((resolve, reject) => {
// //     setTimeout(reject, duration);
// //   });
// // };

// // const p = Promise.allSettled([readFile(dataFile, "utf8"), sleepReject(5000)]);

// // p.then((result) => {
// //   console.log(result);
// // });

// const sleepReject = (duration: number) => {
//   return new Promise<never>((resolve, reject) => {
//     setTimeout(reject, duration);
//   });
// };

// const p = Promise.any([readFile(dataFile, "utf8"), sleepReject(5000)]);

// p.then((result) => {
//   console.log(result);
// });
