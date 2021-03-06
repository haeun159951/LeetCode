// 2,7,11,5 target = 9
// returns array with two elements
//empty array
let nums = [2, 7, 11, 15];
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

/*
 [2,7,11,15], 9

 // i =0; value = 2 complement = target - current number: 7
 i =1 value 7 : 2

*/

const twoSum = function (nums, target) {
  // Initialise a map to store the first run of numbers
  let map = new Map();

  // Loop through the numbers
  for (let i = 0; i < nums.length; i++) {
    // Determine the complement (required number) for the current number
    const complement = target - nums[i];

    // Check if the complement exists in the Map
    if (map.has(complement)) {
      return [map.get(complement), i]; // value and index
    }
    // If not, add the current number to the Map
    map.set(nums[i], i); // value and index
  }
};

console.log(twoSum([2, 7, 11, 15], 9));
