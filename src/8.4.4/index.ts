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

//   try {
//     const fooContent = await readFile(dataFile, "utf8");
//     await writeFile(
//       dataFile2,
//       fooContent + fooContent + fooContent + fooContent
//     );
//     console.log("書き込みが完了しました。");
//   } catch {
//     console.log("失敗しました。");
//   }
// }

// main().then(() => {
//   console.log("main()が成功しました");
// });
