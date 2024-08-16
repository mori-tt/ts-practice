// https://qiita.com/daishiman/items/e28a810323ae8b1b976f

// // SuperType のオブジェクトの定義
// type Engineer = {
//   name: string;
//   year: number;
// };

// // SubType のオブジェクトの定義
// type FrontendEngineer = {
//   name: string;
//   year: number;
//   frontendSkill: Array<string>;
// };

// // SuperType の型を引数にもった  SubType の型の関数
// const frontendEngineerInfo = (engineer: Engineer): FrontendEngineer => {
//   return {
//     frontendSkill: [""],
//     ...engineer,
//   };
// };

// // engineerInfo 関数を SubType の型を引数に持った SuperType の型に代入
// const engineerInfo: (frontendEngineer: FrontendEngineer) => Engineer =
//   frontendEngineerInfo;

// // 関数 engineerInfo を使用する
// const info = engineerInfo({
//   name: "daishi",
//   year: 1,
//   frontendSkill: ["JavaScript"],
// });

// console.log(info); // { frontendSkill: [ 'JavaScript' ], name: 'daishi', year: 1 }

// 5.3
// SuperType のオブジェクトの定義
// type Engineer = {
//     name: string;
//     year: number;
// };

// // SubType のオブジェクトの定義
// type FrontendEngineer = {
//     name: string;
//     year: number;
//     frontendSkill: Array<string>;
// };

// // SuperType の型と boolean 型を引数にもった void 型の関数
// const engineerInfo = (engineer: Engineer, isPM: boolean) => {
//     console.log(engineer.name);
//     console.log(engineer.year);
//     console.log(isPM);
// };

// // engineerInfo 関数を SubType の型と boolean 型を引数にもった関数に代入
// const frontendEngineerInfo: (frontendEngineer: FrontendEngineer, isPM: boolean) => void = engineerInfo;

// // 関数 rontendEngineerInfo を使用する
// frontendEngineerInfo(
//     {
//         name: 'daishi',
//         year: 1,
//         frontendSkill: ['JavaScript'],
//     },
//     false,
// );
// 実行結果
// daishi
// 1
// false

// 5.4
// SuperType のオブジェクトの定義
// type Engineer = {
//   name: string;
//   year: number;
// };

// // SubType のオブジェクトの定義
// type FrontendEngineer = {
//   name: string;
//   year: number;
//   frontendSkill: Array<string>;
// };

// // 複数の SuperType の型の引数をもった void 型の関数
// const engineerInfo = (
//   kakedashiEngineer: Engineer,
//   seniorEngineer: Engineer
// ) => {
//   console.log(kakedashiEngineer.name);
//   console.log(kakedashiEngineer.year);
//   console.log(seniorEngineer.name);
//   console.log(seniorEngineer.year);
// };

// // engineerInfo 関数を 複数の SubType の型を引数にもった関数に代入
// const frontendEngineerInfo: (
//   kakedashiFrontendEngineer: FrontendEngineer,
//   seniorFrontendEngineer: FrontendEngineer
// ) => void = engineerInfo;

// // 関数 frontendEngineerInfo を使用する
// frontendEngineerInfo(
//   {
//     name: "daishi",
//     year: 1,
//     frontendSkill: ["JavaScript"],
//   },
//   {
//     name: "manju",
//     year: 10,
//     frontendSkill: ["JavaScript", "TypeScript"],
//   }
// );
// 実行結果
// daishi
// 1
// manju
// 10

// 5.5
// SuperType のオブジェクトの定義
// type Engineer = {
//     name: string;
//     year: number;
// };

// // SubType のオブジェクトの定義
// type FrontendEngineer = {
//     name: string;
//     year: number;
//     frontendSkill: Array<string>;
// };

// // SuperType の型を引数にもった  SubType の型の関数
// const frontendEngineerInfo = (engineer: Engineer): FrontendEngineer => {
//     return {
//         frontendSkill: [''],
//         ...engineer,
//     };
// };

// // engineerInfo 関数を SubType の型を引数に持った SuperType の型に代入
// const engineerInfo: (frontendEngineer: FrontendEngineer) => Engineer = frontendEngineerInfo;

// // 関数 engineerInfo を使用する
// const info = engineerInfo({
//     name: 'daishi',
//     year: 1,
//     frontendSkill: ['JavaScript'],
// });

// console.log(info); // { frontendSkill: [ 'JavaScript' ], name: 'daishi', year: 1 }
