// import path from "path";
// import { fileURLToPath } from "url";
// import { readFile } from "fs/promises";

// const filePath = fileURLToPath(import.meta.url);
// const fileDir = path.dirname(filePath);
// // // プロジェクトのルートディレクトリを取得
// const projectRoot = path.join(fileDir, "..", "..");
// // // uhyo.textファイルのパスを指定
// const dataFile = path.join(projectRoot, "src", "7.4.1", "uhyo.text");

// const data = await readFile(dataFile, { encoding: "utf8" });

// let count = 0;
// let currentIndex = 0;
// while (true) {
//   const nextIndex = data.indexOf("uhyo", currentIndex);
//   if (nextIndex >= 0) {
//     count++;
//     currentIndex = nextIndex + 1;
//   } else {
//     break;
//   }
// }
// console.log(count);
