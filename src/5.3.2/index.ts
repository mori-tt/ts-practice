// class User {
//   name: string;
//   #age: number;

//   constructor(name: string, age: number) {
//     this.name = name;
//     this.#age = age;
//   }

//   public isAdult(): boolean {
//     return this.#age >= 20;
//   }
// }

// class PremiumUser extends User {
//   rank: number = 1;

//   public isAdult(): boolean {
//     return true;
//   }
// }

// const john = new User("John Smith", 15);

// const taro = new PremiumUser("Taro Yamada", 15);

// console.log(john.isAdult());

// console.log(taro.isAdult());

// class PremiumUser extends User {
//   rank: number;

//   constructor(name: string, age: number, rank: number) {
//     super(name, age);
//     this.rank = rank;
//   }
// }

// class PremiumUser extends User {
//   rank: number;
//   #actualAge: number; // 実際の年齢を保存するためのプライベートフィールド

//   constructor(name: string, age: number, rank: number) {
//     super(name, 100);
//     this.rank = rank;
//     this.#actualAge = age; // 実際の年齢を保存
//   }

//   public getAge(): number {
//     return this.#actualAge;
//   }
//   // toString()メソッドを追加
//   //   public toString(): string {
//   //     return `PremiumUser { name: "${this.name}", age: ${
//   //       this.#actualAge
//   //     }, rank: ${this.rank} }`;
//   //   }

//   // カスタム表示用のメソッドを追加
//   public toCustomString(): string {
//     return `PremiumUser { name: "${this.name}", age: ${
//       this.#actualAge
//     }, rank: ${this.rank} }`;
//   }
// }
// const uhyo = new PremiumUser("uhyo", 26, 3);

// function logPremiumUser(user: PremiumUser) {
//   console.log(user.toCustomString());
// }

// // 使用例
// logPremiumUser(uhyo);

// console.log(uhyo.name);
// console.log(uhyo.getAge());
// console.log(uhyo.rank);
// console.log(uhyo);
// console.log(uhyo.toCustomString()); // カスタム表示メソッドを使用
