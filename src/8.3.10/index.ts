// import path from "path";
// import { fileURLToPath } from "url";
// import { readFile } from "fs/promises";

// const filePath = fileURLToPath(import.meta.url);
// const fileDir = path.dirname(filePath);
// // // プロジェクトのルートディレクトリを取得
// const projectRoot = path.join(fileDir, "..", "..");
// // // uhyo.textファイルのパスを指定
// const dataFile = path.join(projectRoot, "src", "7.4.1", "uhyo.text");

// // const p1 = readFile(dataFile, "utf8");

// // const p2 = p1.then((result) => {
// //   throw new Error("Error!!!!");
// // });

// // p2.then((result) => {
// //   console.log(result);
// // });

// const sleepReject = (duration: number) => {
//   return new Promise<never>((resolve, reject) => {
//     setTimeout(reject, duration);
//   });
// };

// const p = readFile(dataFile, "utf8")
//   .then(() => sleepReject(1000))
//   .then(
//     (result) => {
//       console.log(result);
//     },
//     () => {
//       console.log("失敗しました。");
//     }
//   );
