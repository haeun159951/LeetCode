// 2,7,11,5 target = 9
// returns array with two elements
//empty array
let nums = [2, 7, 11, 15];

//very slow to loop through everything

// function twoSum(nums, target) {
//   const len = nums.length;

//   for (let i = 0; i < len; i++) {
//     for (let j = 1; j < len; j++) {
//       if (nums[i] + nums[j] === target) {
//         return [i, j];
//       }
//     }
//   }
// }

// console.log(twoSum(nums, 9));

// console.log(twoSum(nums, 9));
// // 2,7,11,5 target = 9
function twoSum(nums, target) {
  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    let num1 = nums[i]; /// current value
    console.log(num1);
    let num2 = target - num1; // value which is the number

    console.log(num2);
    if (map.has(num2)) {
      console.log([map.get(num2), i]); ///1,0
      return [map.get(num2), i]; // 1,0
    }

    map.set(num1, i);
  }
}

console.log(twoSum(nums, 9));
