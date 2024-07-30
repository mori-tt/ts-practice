// type HasName = {
//   name: string;
// };
// type Family<Parent extends HasName, Child extends HasName> = {
//   mother: Parent;
//   father: Parent;
//   child: Child;
// };

// type Animal = {
//   name: string;
// };
// type Human = {
//   name: string;
//   age: number;
// };
// type T = Family<number, string>;

// type T = Family<Animal, Human>;

type Family<Parent extends HasName, Child extends Parent> = {
  mother: Parent;
  father: Parent;
  child: Child;
};

// これはOK
type S = Family<Animal, Human>;
// これはエラー （AnimalはHumanの部分型ではないため）
// type T = Family<Human, Animal>;
