// import path from "path";
// import { fileURLToPath } from "url";
// import { readFile } from "fs"; // 追加

// const filePath = fileURLToPath(import.meta.url);
// const fileDir = path.dirname(filePath);
// // // プロジェクトのルートディレクトリを取得
// const projectRoot = path.join(fileDir, "..", "..");
// // // uhyo.textファイルのパスを指定
// const dataFile = path.join(projectRoot, "src", "7.4.1", "uhyo.text");

// console.log("1.読み込みを開始します。");

// readFile(dataFile, "utf8", (err, data) => {
//   if (err) {
//     console.error("読み込み中エラーが発生しました", err);
//   }
//   console.log("3.読み込みました", data);
// });

// console.log("2.読み込みを開始しました");

// import { createInterface } from "readline";

// const rl = createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// rl.question("文字列を入力してください:", (line) => {
//   console.log(`${line}が入力されました！`);
//   rl.close();
// });
