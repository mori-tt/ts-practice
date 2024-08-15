// import path from "path";
// import { fileURLToPath } from "url";
// import { readFile } from "fs/promises";

// const filePath = fileURLToPath(import.meta.url);
// const fileDir = path.dirname(filePath);
// // // プロジェクトのルートディレクトリを取得
// const projectRoot = path.join(fileDir, "..", "..");
// // // uhyo.textファイルのパスを指定
// const dataFile = path.join(projectRoot, "src", "7.4.1", "uhyo.text");

// // const p = readFile(dataFile, "utf8");

// // const p2 = p.then((result) => result + result);

// // p2.then((result) => {
// //   console.log(result);
// // });

// // const p2 = p.catch(() => "");

// // p2.then((result) => {
// //   console.log(result);
// // });

// readFile(dataFile, "utf8")
//   .finally(() => {
//     console.log("uhyo.text is loaded");
//   })
//   .catch(() => "")
//   .then((result) => {
//     console.log(result);
//   });
