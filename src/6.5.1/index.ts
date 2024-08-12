// function getFirstFiveLetters(strOrNum: string | number) {
//   const str = strOrNum as string;
//   return str.slice(0, 5);
// }

// console.log(getFirstFiveLetters("uhyohyhyo"));

// console.log(getFirstFiveLetters(123));

// type Animal = {
//   tag: "animal";
//   species: string;
// };

// type Human = {
//   tag: "human";
//   name: string;
// };

// type User = Animal | Human;

// function getNameAllHuman(users: readonly User[]): string[] | undefined {
//   if (users.every((user) => user.tag === "human")) {
//     return (users as Human[]).map((user) => user.name);
//   }
//   return undefined;
// }
