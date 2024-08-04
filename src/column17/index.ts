// type HasName = { name: string };

// type HasNameAndAge = { name: string; age: number };

// type Obj = {
//   func: (arg: HasName) => string;
//   method(arg: HasName): string;
// };

// const something: Obj = {
//   func: (user) => user.name,
//   method: (user) => user.name,
// };

// const getAge = (user: HasNameAndAge) => String(user.age);

// something.func = getAge;
// something.method = getAge;
