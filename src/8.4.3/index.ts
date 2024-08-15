// const sleep = (duration: number) => {
//   return new Promise<void>((resolve) => {
//     setTimeout(resolve, duration);
//   });
// };

// async function get3() {
//   await sleep(1000);
//   return 3;
// }

// async function main() {
//   const num1 = await get3();
//   const num2 = await get3();
//   const num3 = await get3();
//   return num1 + num2 + num3;
// }

// main().then((result) => {
//   console.log(`result is ${result}`);
// });

// import path from "path";
// import { fileURLToPath } from "url";
// // import { readFile } from "fs/promises";

// const filePath = fileURLToPath(import.meta.url);
// const fileDir = path.dirname(filePath);
// // // プロジェクトのルートディレクトリを取得
// const projectRoot = path.join(fileDir, "..", "..");
// // // uhyo.textファイルのパスを指定
// const dataFile = path.join(projectRoot, "src", "7.4.1", "uhyo.text");
// const dataFile2 = path.join(projectRoot, "src", "7.4.1", "uhyo2.text");

// async function main() {
//   const { readFile, writeFile } = await import("fs/promises");
//   const fooContent = await readFile(dataFile, "utf8");
//   await writeFile(dataFile2, fooContent + fooContent);
//   console.log("書き込み完了しました。");
// }

// main().then(() => {
//   console.log("main()が完了しました。");
// });
