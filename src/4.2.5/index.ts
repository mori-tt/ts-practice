// type MyFunc = {
//   isUsed?: boolean;
//   (arg: number): void;
// };

// const double: MyFunc = (arg: number) => {
//   console.log(arg * 2);
// };

// double.isUsed = true;

// console.log(double.isUsed);

type F = (arg: string) => number;
type G = { (arg: string): number };

type SwapFunc = {
  (arg: string): number;
  (arg: number): boolean;
};
