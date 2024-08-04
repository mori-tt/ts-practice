// function sum(nums: readonly number[]): number {
//   let result = 0;
//   for (const num of nums) {
//     result += num;
//   }
//   return result;
// }

// const nums1: readonly number[] = [1, 10, 100];

// console.log(sum(nums1));

// const nums2: number[] = [1, 1, 2, 3, 5, 8];

// console.log(sum(nums2));

// function fillZero(nums: number[]): void {
//   for (let i = 0; i < nums.length; i++) {
//     nums[i] = 0;
//   }
// }

// const nums1: number[] = [1, 10, 100];

// fillZero(nums1);

// console.log(nums1);

// const nums2: readonly number[] = [1, 1, 2, 3, 5, 8];

// fillZero(nums2);

// type User = { name: string };

// type ReadonlyUser = { readonly name: string };

// const uhyoify = (user: User) => {
//   user.name = "Uhyo";
// };

// const john: ReadonlyUser = {
//   name: "John Smith",
// };

// // john.name = "Nanashi";

// uhyoify(john);

// console.log(john.name);
