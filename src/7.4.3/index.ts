// import { readFileSync } from "fs";
// import { fileURLToPath } from "url";
// import { dirname, join } from "path";

// // 現在のモジュールのファイルパスを取得
// const __filename = fileURLToPath(import.meta.url);

// // 現在のモジュールのディレクトリを取得
// const __dirname = dirname(__filename);

// // プロジェクトのルートディレクトリを取得
// const projectRoot = join(__dirname, "..", "..");

// // uhyo.textファイルのパスを指定
// const filePath = join(projectRoot, "src", "7.4.1", "uhyo.text");

// const fileData = readFileSync(filePath, "utf8");

// console.log(fileData);

import { readFileSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const filePath = fileURLToPath(import.meta.url);
const fileDir = path.dirname(filePath);
// // プロジェクトのルートディレクトリを取得
const projectRoot = path.join(fileDir, "..", "..");
// // uhyo.textファイルのパスを指定
const dataFile = path.join(projectRoot, "src", "7.4.1", "uhyo.text");

const data = readFileSync(dataFile, { encoding: "utf8" });

console.log(data);
