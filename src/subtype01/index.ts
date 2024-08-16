// https://qiita.com/daishiman/items/a0573f2ae7f0e76d1895

// 5.3
// type Engineer = {
//   name: string;
//   year: number;
// };

// type FrontendEngineer = {
//   name: string;
//   year: number;
//   frontendSkill: Array<string>;
// };

// const kakedashiFront: FrontendEngineer = {
//   name: "daishi",
//   year: 1,
//   frontendSkill: ["JavaScript"],
// };

// const kakedashiEngineer: Engineer = kakedashiFront;

// console.log(kakedashiEngineer);

// const kakedashiEngineer: Engineer = {
//   name: "daishi",
//   year: 1,
//   frontendSkill: ["JavaScript"],
// };

// const kakedashiFrontendEnginieer: FrontendEngineer = kakedashiEngineer;

// 5.4
// type Engineer = {
//   name: string;
//   year: number;
//   frontendSkill?: Array<string>; // ← 追加
//   backendSkill?: Array<string>; // ← 追加
//   infraSkill?: Array<string>; // ← 追加
// };

// type FrontendEngineer = {
//   name: string;
//   year: number;
//   frontendSkill: Array<string>;
// };

// const kakedashiFront: FrontendEngineer = {
//   name: "daishi",
//   year: 1,
//   frontendSkill: ["JavaScript"],
// };

// const kakedashiEngineer: Engineer = kakedashiFront;

// console.log(kakedashiEngineer);

// 5.5
// type Engineer = {
//   name: string;
//   year: number;
//   frontendSkill?: Array<string>;
// };

// type FrontendEngineer = {
//   name: string;
//   year: number;
//   frontendSkill: Array<string>;
// };

// type EngineerTeam = {
//   teamName: string;
//   director: Engineer;
//   chief: Engineer;
//   employee: Engineer;
// };

// type FrontendEngineerTeam = {
//   teamName: string;
//   director: FrontendEngineer;
//   chief: FrontendEngineer;
//   employee: FrontendEngineer;
// };

// const bucho: FrontendEngineer = {
//   name: "ぶちょう",
//   year: 20,
//   frontendSkill: ["TypeScript", "React", "Vue"],
// };

// const katyo: FrontendEngineer = {
//   name: "かちょう",
//   year: 10,
//   frontendSkill: ["TypeScript", "React"],
// };

// const kakedashi: FrontendEngineer = {
//   name: "かけだし",
//   year: 1,
//   frontendSkill: ["JavaScript"],
// };

// const frontendTeam: FrontendEngineerTeam = {
//   teamName: "frontendTeam",
//   director: bucho,
//   chief: katyo,
//   employee: kakedashi,
// };

// const engineerTeam: EngineerTeam = frontendTeam;

/**
 * 実行結果
 * {
 *   teamName: 'frontendTeam',
 *   director: {
 *     name: 'ぶちょう',
 *     year: 20,
 *     frontendSkill: [ 'TypeScript', 'React', 'Vue' ]
 *   },
 *   chief: {
 *     name: 'かちょう',
 *     year: 10,
 *     frontendSkill: [ 'TypeScript', 'React' ]
 *   },
 *   employee: {
 *     name: 'かけだし',
 *     year: 1,
 *     frontendSkill: [ 'JavaScript' ]
 *   }
 * }
 */
// console.log(engineerTeam);
